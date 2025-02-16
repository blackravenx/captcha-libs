import { TikTokABCTask } from "../../lib/Request/Recognition/TikTokABCTask";

import { expect, it, describe } from "vitest";

describe("TikTokABCTask Test", () => {
  it("To be equal to object", () => {
    const task = new TikTokABCTask({ "body": "image" });

    expect(task).toEqual({
      "body": "image",
      "click": "geetest",
      "isMultipleCoordinates": true,
      "method": "base64",
      "textinstructions": "abc"
    });
  });
});
