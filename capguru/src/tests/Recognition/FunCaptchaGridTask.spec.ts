import { FunCaptchaGridTask } from "../../lib/Request/Recognition/FunCaptchaGridTask";

describe("FunCaptchaGridTask Test", () => {
  it("To be equal to object", () => {
    const task = new FunCaptchaGridTask({
      body: "image",
      textinstructions: "Pick the spiral galaxy"
    });

    expect(task).toEqual({
      body: "image",
      click: "funcap2",
      isGrid: true,
      method: "base64",
      textinstructions: "Pick the spiral galaxy"
    });
  });
});
