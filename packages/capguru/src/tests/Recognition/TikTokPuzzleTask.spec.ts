import { TikTokPuzzleTask } from "../../lib/Request/Recognition/TikTokPuzzleTask";

import { expect, it, describe } from "vitest";

describe("TikTokPuzzleTask Test", () => {
  it("To be equal to object", () => {
    const task = new TikTokPuzzleTask({ "body": "image" });

    expect(task).toEqual({
      "body": "image",
      "click": "geetest",
      "isSingleCoordinate": true,
      "method": "base64",
      "textinstructions": "slider"
    });
  });
});
