import {
  ImageToTextTask, NumericOptions
} from "../../../lib/Requests/Recognition/ImageToTextTask";

describe("ImageToTextTask", () => {
  it("To be equal to object", () => {
    const task = new ImageToTextTask({
      body: "some-body",
      case: true,
      comment: "some-comment",
      imgInstructions: "some-imgInstructions",
      math: true,
      maxLength: 10,
      minLength: 9,
      numeric: NumericOptions.numbersAndLetters,
      phrase: true
    });

    expect(task).toEqual({
      _isImageToTextTask: true,
      body: "some-body",
      case: true,
      comment: "some-comment",
      imgInstructions: "some-imgInstructions",
      math: true,
      maxLength: 10,
      minLength: 9,
      numeric: NumericOptions.numbersAndLetters,
      phrase: true,
      type: "ImageToTextTask"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new ImageToTextTask({ body: "some-body" });

    expect(task).toEqual({
      _isImageToTextTask: true,
      body: "some-body",
      case: undefined,
      comment: undefined,
      imgInstructions: undefined,
      math: undefined,
      maxLength: undefined,
      minLength: undefined,
      numeric: undefined,
      phrase: undefined,
      type: "ImageToTextTask"
    });
  });
});
