import { TikTokKolesoTask } from "../../lib/Request/Recognition/TikTokKolesoTask";

import { expect, it, describe } from "vitest";

describe("TikTokKolesoTask Test", () => {
  it("To be equal to object", () => {
    const task = new TikTokKolesoTask({
      "body": "image",
      "body0": "image-0",
      "body1": "image-1"
    });

    expect(task).toEqual({
      "body": "image",
      "body0": "image-0",
      "body1": "image-1",
      "click": "geetest",
      "isSingleCoordinate": true,
      "method": "base64",
      "textinstructions": "koleso"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new TikTokKolesoTask({ "body": "image" });

    expect(task).toEqual({
      "body": "image",
      "body0": undefined,
      "body1": undefined,
      "click": "geetest",
      "isSingleCoordinate": true,
      "method": "base64",
      "textinstructions": "koleso"
    });
  });
});
