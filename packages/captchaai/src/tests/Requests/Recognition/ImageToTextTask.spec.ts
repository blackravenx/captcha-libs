import { ImageToTextTask, NumericOptions } from "../../../lib/Requests/Recognition/ImageToTextTask";

import { expect, it, describe } from "vitest";

describe("ImageToTextTask", () => {
  it("To be equal to object", () => {
    const task = new ImageToTextTask({
      "body": "some-body",
      "case": true,
      "math": true,
      "maxLength": 10,
      "minLength": 9,
      "numeric": NumericOptions.numbersAndLetters,
      "phrase": true
    });

    expect(task).toEqual({
      "_isImageToTextTask": true,
      "body": "some-body",
      "case": true,
      "math": true,
      "maxLength": 10,
      "method": "base64",
      "minLength": 9,
      "numeric": NumericOptions.numbersAndLetters,
      "phrase": true,
      "type": "ImageToTextTask"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new ImageToTextTask({ "body": "some-body" });

    expect(task).toEqual({
      "_isImageToTextTask": true,
      "body": "some-body",
      "case": undefined,
      "math": undefined,
      "maxLength": undefined,
      "method": "base64",
      "minLength": undefined,
      "numeric": undefined,
      "phrase": undefined,
      "type": "ImageToTextTask"
    });
  });
});
