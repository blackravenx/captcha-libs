import { ImageToTextTask } from "../../../lib/Requests/Classification/ImageToTextTask";

describe("ImageToTextTask Test", () => {
  it("To be equal to object", () => {
    const task = new ImageToTextTask({
      body: "image",
      isCaseSensitive: true,
      module: "common",
      score: 0.5,
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isImageToTextTask: true,
      body: "image",
      case: true,
      module: "common",
      score: 0.5,
      type: "ImageToTextTask",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new ImageToTextTask({ body: "image" });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isImageToTextTask: true,
      body: "image",
      case: undefined,
      module: undefined,
      score: undefined,
      type: "ImageToTextTask",
      websiteURL: undefined
    });
  });
});
