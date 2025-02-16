import { VisionEngine } from "../../../lib/Requests/Classification/VisionEngine";

import { expect, it, describe } from "vitest";

describe("VisionEngine Test", () => {
  it("To be equal to object", () => {
    const task = new VisionEngine({
      "image": "image-base64",
      "imageBackground": "imageBackground-base64",
      "module": "rotate_1",
      "question": "question",
      "websiteURL": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isVisionEngine": true,
      "image": "image-base64",
      "imageBackground": "imageBackground-base64",
      "module": "rotate_1",
      "question": "question",
      "type": "VisionEngine",
      "websiteURL": "https://some-url.com"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new VisionEngine({
      "image": "image-base64",
      "imageBackground": "imageBackground-base64",
      "module": "rotate_1"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isVisionEngine": true,
      "image": "image-base64",
      "imageBackground": "imageBackground-base64",
      "module": "rotate_1",
      "question": undefined,
      "type": "VisionEngine",
      "websiteURL": undefined
    });
  });
});
