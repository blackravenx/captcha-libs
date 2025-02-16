import { setupServer } from "msw/node";

import { HttpResponse, RequestHandler, http } from "msw";

import { beforeAll, afterEach, afterAll } from "vitest";

import { CapSolverBalanceErrorResponse, CapSolverBalanceResponse, CapSolverCreateTaskResponse, FeedbackResponse, FeedbackTaskParams } from "src/lib/types";

import { Requests } from "src/lib/Requests";

const baseUrl = "https://api.capsolver.com";

const handler: RequestHandler[] = [
  http.post(`${baseUrl}/getBalance`, async ({ request }) => {
    const body = await request.json() as { "clientKey": string };

    if (body.clientKey) {
      return HttpResponse.json<CapSolverBalanceResponse>({
        "balance": 1,
        "errorId": 0,
        "packages": []
      });
    }

    return HttpResponse.json<CapSolverBalanceErrorResponse>({
      "errorCode": "ERROR_KEY_DOES_NOT_EXIST",
      "errorDescription": "clientKey is invalid",
      "errorId": 1
    });
  }),
  http.post(`${baseUrl}/feedbackTask`, async ({ request }) => {
    const body = await request.json() as { "clientKey": string } & FeedbackTaskParams;

    if (body.clientKey && body.taskId) {
      return HttpResponse.json<FeedbackResponse>({
        "errorId": 0,
        "message": "We will rely on error messages to continuously optimize accuracy."
      });
    } else if (!body.clientKey) {
      return HttpResponse.json<FeedbackResponse>({
        "errorCode": "ERROR_INVALID_TASK_DATA",
        "errorDescription": "taskId is invalid",
        "errorId": 1
      });
    }

    return HttpResponse.json<FeedbackResponse>({
      "errorCode": "ERROR_INVALID_TASK_DATA",
      "errorDescription": "clientKey is invalid",
      "errorId": 1
    });
  }),
  http.post(`${baseUrl}/createTask`, async ({ request }) => {
    const body = await request.json() as {
      "clientKey": string;
      "task": Requests;
    };

    if (!body.clientKey) {
      return HttpResponse.json<CapSolverBalanceErrorResponse>({
        "errorCode": "ERROR_KEY_DOES_NOT_EXIST",
        "errorDescription": "clientKey is invalid",
        "errorId": 1
      });
    }

    return HttpResponse.json<CapSolverCreateTaskResponse>({
      "errorId": 0,
      "errorCode": "",
      "errorDescription": "",
      "taskId": "1010"
    });
  }),
  http.post(`${baseUrl}/getTaskResult`, async ({ request }) => {
    const body = await request.json() as { "taskId": string };

    if (!body.taskId) {
      return HttpResponse.json({
        "errorCode": "ERROR_INVALID_TASK_ID",
        "errorDescription": "not found taskId",
        "errorId": 1
      });
    }

    await new Promise((resolve) => setTimeout(resolve, 5_000));

    return HttpResponse.json({
      "errorId": 0,
      "taskId": body.taskId,
      "solution": {},
      "status": "ready"
    });
  })
];

const server = setupServer(...handler);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
