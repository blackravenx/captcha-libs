import { HCaptchaGridTask } from "../../lib/Request/Recognition/HCaptchaGridTask";

describe("HCaptchaGridTask Test", () => {
  it("To be equal to object", () => {
    const task = new HCaptchaGridTask({
      body: "image",
      textinstructions: "Please click each image containing a ladybug"
    });

    expect(task).toEqual({
      body: "image",
      click: "hcap2",
      isGrid: true,
      method: "base64",
      textinstructions: "Please click each image containing a ladybug"
    });
  });
});
