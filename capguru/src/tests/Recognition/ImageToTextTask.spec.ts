import {
  ImageToTextTask, ImageToTextVernet
} from "../../lib/Request/Recognition/ImageToTextTask";

describe("ImageToTextTask Test", () => {
  it("To be equal to object", () => {
    const task = new ImageToTextTask({
      body: "image",
      vernet: ImageToTextVernet.MicrosoftHotmail
    });

    expect(task).toEqual({
      body: "image",
      isString: true,
      method: "base64",
      vernet: ImageToTextVernet.MicrosoftHotmail
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new ImageToTextTask({ body: "image" });

    expect(task).toEqual({
      body: "image",
      isString: true,
      method: "base64",
      vernet: undefined
    });
  });
});
