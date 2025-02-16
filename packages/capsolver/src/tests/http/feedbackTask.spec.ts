import { CapSolver } from "../../lib/capsolver";

import { describe, expect, it } from "vitest";

import "./mock";

describe("CapSolver API: feedbackTask", () => {
  it("should response message", async () => {
    const client = new CapSolver({ "clientKey": "some-key" });

    const response = await client.feedbackTask({
      "taskId": "1010",
      "invalid": true
    });

    expect(response).toEqual(expect.objectContaining({
      "errorId": 0,
      "message": "We will rely on error messages to continuously optimize accuracy."
    }));
  });
});
