import { setupServer } from "msw/node";

import { HttpResponse, http } from "msw";

import { beforeAll, afterEach, afterAll } from "vitest";

export const baseUrl = "https://api.solvecha.com";

export const server = setupServer(
  http.post(`${baseUrl}/getBalance`, async ({ request }) => {
    const body = await request.json() as { "clientKey"?: string };

    if (body.clientKey !== "some-key") {
      return HttpResponse.json({
        "errorCode": "ERROR_KEY_DENIED_ACCESS",
        "errorDescription": "The clientKey is missing or wrong.",
        "errorId": 1
      }, { "status": 401 });
    }

    return HttpResponse.json({ "balance": 0, "errorId": 0, "packages": [] });
  })
);

beforeAll(() => {
  server.listen({ "onUnhandledRequest": "error" });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
