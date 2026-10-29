import { Solvecha } from "../../lib/solvecha";

import { describe, expect, it } from "vitest";

import { HttpResponse, http } from "msw";

import { baseUrl, server } from "./mock";

import { ImageToTextTask, ReCaptchaV2Classification } from "../../lib/Requests";

describe("Solvecha API: createTask and getTaskResult", () => {
  it("should return the solution that createTask already holds, without polling or balance call", async () => {
    let sentBody: Record<string, unknown> = {};

    server.use(http.post(`${baseUrl}/createTask`, async ({ request }) => {
      sentBody = await request.json() as Record<string, unknown>;

      return HttpResponse.json({
        "errorId": 0,
        "errorCode": "",
        "errorDescription": "",
        "status": "ready",
        "taskId": "1",
        "solution": { "type": "multi", "objects": [ 0, 2, 5 ], "size": 3 }
      });
    }));

    const client = new Solvecha({ "clientKey": "some-key" });

    const response = await client.solve(new ReCaptchaV2Classification({ "image": "image", "question": "/m/04_sv" }));

    expect(response.solution.objects).toEqual([ 0, 2, 5 ]);

    expect(sentBody).toEqual({
      "clientKey": "some-key",
      "task": { "type": "ReCaptchaV2Classification", "image": "image", "question": "/m/04_sv" }
    });
  });

  it("should poll getTaskResult while the task is processing", async () => {
    let polls = 0;

    server.use(
      http.post(`${baseUrl}/createTask`, () => HttpResponse.json({ "errorId": 0, "status": "processing", "taskId": "7" })),
      http.post(`${baseUrl}/getTaskResult`, () => {
        polls += 1;

        if (polls < 2) return HttpResponse.json({ "errorId": 0, "status": "processing", "taskId": "7" });

        return HttpResponse.json({ "errorId": 0, "status": "ready", "taskId": "7", "solution": { "text": "w4kq" } });
      })
    );

    const client = new Solvecha({ "clientKey": "some-key", "pollingInterval": 10 });

    const response = await client.solve(new ImageToTextTask({ "body": "image" }));

    expect(response.solution.text).toBe("w4kq");

    expect(polls).toBe(2);
  });

  it("should throw the API error with its message on a 4xx response", async () => {
    server.use(http.post(`${baseUrl}/createTask`, () => HttpResponse.json({
      "errorCode": "ERROR_KEY_DENIED_ACCESS",
      "errorDescription": "The clientKey is missing or wrong.",
      "errorId": 1
    }, { "status": 401 })));

    const client = new Solvecha({ "clientKey": "wrong-key" });

    await expect(client.solve(new ImageToTextTask({ "body": "image" }))).rejects.toThrow("ERROR_KEY_DENIED_ACCESS - The clientKey is missing or wrong.");
  });

  it("should throw a timeout error when the task never finishes", async () => {
    server.use(
      http.post(`${baseUrl}/createTask`, () => HttpResponse.json({ "errorId": 0, "status": "processing", "taskId": "9" })),
      http.post(`${baseUrl}/getTaskResult`, () => HttpResponse.json({ "errorId": 0, "status": "processing", "taskId": "9" }))
    );

    const client = new Solvecha({ "clientKey": "some-key", "pollingInterval": 10, "timeout": 50 });

    await expect(client.solve(new ImageToTextTask({ "body": "image" }))).rejects.toThrow("timeout");
  });
});
