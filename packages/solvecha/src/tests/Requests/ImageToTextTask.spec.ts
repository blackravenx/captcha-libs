import { ImageToTextTask } from "../../lib/Requests/ImageToTextTask";

import { expect, it, describe } from "vitest";

describe("ImageToTextTask Test", () => {
  it("To be equal to object", () => {
    const task = new ImageToTextTask({
      "body": "image",
      "module": "common"
    });

    expect(task).toEqual({
      "_isImageToTextTask": true,
      "body": "image",
      "module": "common",
      "type": "ImageToTextTask"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new ImageToTextTask({ "body": "image" });

    expect(task).toEqual({
      "_isImageToTextTask": true,
      "body": "image",
      "module": undefined,
      "type": "ImageToTextTask"
    });
  });
});
