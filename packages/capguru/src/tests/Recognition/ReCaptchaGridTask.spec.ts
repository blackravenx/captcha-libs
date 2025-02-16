import { ReCaptchaGridTask } from "../../lib/Request/Recognition/ReCaptchaGridTask";

import { expect, it, describe } from "vitest";

describe("ReCaptchaGridTask Test", () => {
  it("To be equal to object", () => {
    const task = new ReCaptchaGridTask({
      "body": "image",
      "textinstructions": "Select all images with traffic light"
    });

    expect(task).toEqual({
      "body": "image",
      "click": "recap2",
      "isGrid": true,
      "method": "base64",
      "textinstructions": "Select all images with traffic light"
    });
  });
});
