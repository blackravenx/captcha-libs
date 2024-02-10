import { HCaptchaCoordinatesTask } from "../../lib/Request/Recognition/HCaptchaCoordinatesTask";

describe("HCaptchaCoordinatesTask Test", () => {
  it("To be equal to object", () => {
    const task = new HCaptchaCoordinatesTask({
      body: "image",
      textinstructions: "bear"
    });

    expect(task).toEqual({
      body: "image",
      click: "hcap",
      isMultipleCoordinates: true,
      method: "base64",
      textinstructions: "bear"
    });
  });
});
