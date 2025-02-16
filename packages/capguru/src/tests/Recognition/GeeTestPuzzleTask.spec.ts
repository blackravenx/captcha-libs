import { GeeTestPuzzleTask } from "../../lib/Request/Recognition/GeeTestPuzzleTask";

import { expect, it, describe } from "vitest";

describe("GeeTestPuzzleTask Test", () => {
  it("To be equal to object", () => {
    const task = new GeeTestPuzzleTask({ "body": "image" });

    expect(task).toEqual({
      "body": "image",
      "click": "geetest",
      "isSingleCoordinate": true,
      "method": "base64",
      "textinstructions": "slider"
    });
  });
});
