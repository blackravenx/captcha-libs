import { CapSolver } from "../../lib/capsolver";

import { describe, expect, it } from "vitest";

// Mock has 5 sec delay
import "./mock";

import { ImageToTextTask } from "../../lib/Requests";

describe(
  "CapSolver API: createTask and getTaskResult", () => {
    it("should response success after 5sec delay", async () => {
      const client = new CapSolver({
        "clientKey": "some-key",
        "pollingInterval": 2_000,
        "timeout": 6_000
      });

      const imageToText = new ImageToTextTask({
        "module": "common",
        // base64 encoded image
        "body": "/9j/4AAQSkZJRgABA......"
      });

      const response = await client.solve(imageToText);

      expect(response).toEqual(expect.objectContaining({
        "errorId": 0,
        "taskId": expect.any(String),
        "solution": {},
        "status": "ready"
      }));
    });

    it("should throw timeout exceeded error after 3sec delay", async () => {
      const client = new CapSolver({
        "clientKey": "some-key",
        "pollingInterval": 2_000,
        "timeout": 3_000
      });

      const imageToText = new ImageToTextTask({
        "module": "common",
        // base64 encoded image
        "body": "/9j/4AAQSkZJRgABA......"
      });

      await expect(async () => await client.solve(imageToText)).rejects.toThrow();
    });
  }, { "timeout": 6_000 }
);
