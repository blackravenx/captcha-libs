import { WorldCashCoordinatesTask } from "../../lib/Request/Recognition/WorldCashCoordinatesTask";

import { expect, it, describe } from "vitest";

describe("WorldCashCoordinatesTask Test", () => {
  it("To be equal to object", () => {
    const task = new WorldCashCoordinatesTask({ "body": "image" });

    expect(task).toEqual({
      "body": "image",
      "click": "oth",
      "isMultipleCoordinates": true,
      "method": "base64",
      "textinstructions": "custom1224"
    });
  });
});
