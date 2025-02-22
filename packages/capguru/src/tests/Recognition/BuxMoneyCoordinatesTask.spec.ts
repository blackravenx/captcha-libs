import { BuxMoneyCoordinatesTask } from "../../lib/Request/Recognition/BuxMoneyCoordinatesTask";

import { expect, it, describe } from "vitest";

describe("BuxMoneyCoordinatesTask Test", () => {
  it("To be equal to object", () => {
    const task = new BuxMoneyCoordinatesTask({ "body": "image" });

    expect(task).toEqual({
      "body": "image",
      "click": "oth",
      "isMultipleCoordinates": true,
      "method": "base64",
      "textinstructions": "custom1223"
    });
  });
});
