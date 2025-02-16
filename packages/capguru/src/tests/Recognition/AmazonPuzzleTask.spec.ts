import { AmazonPuzzleTask } from "../../lib/Request/Recognition/AmazonPuzzleTask";

import { expect, it, describe } from "vitest";

describe("AmazonPuzzleTask Test", () => {
  it("To be equal to object", () => {
    const task = new AmazonPuzzleTask({
      "body": "image",
      "textinstructions": "Slide the image to complete the pyramid"
    });

    expect(task).toEqual({
      "body": "image",
      "click": "oth",
      "isSingleCoordinate": true,
      "method": "base64",
      "textinstructions": "Slide the image to complete the pyramid"
    });
  });
});
