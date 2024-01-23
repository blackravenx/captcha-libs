import { AntiAkamaiWebTask } from "../../../lib/Request/TokenRequest/AntiAkamaiWebTask";

describe("AntiAkamaiWebTask", () => {
  it("To be equal to object", () => {
    const task = new AntiAkamaiWebTask({
      abck: "some-abck",
      url: "https://some-url.com",
      userAgent: "some-userAgent"
    });

    expect(task).toEqual({
      abck: "some-abck",
      type: "AntiAkamaiWebTask",
      url: "https://some-url.com",
      userAgent: "some-userAgent"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new AntiAkamaiWebTask({ url: "https://some-url.com" });

    expect(task).toEqual({
      type: "AntiAkamaiWebTask",
      url: "https://some-url.com"
    });
  });
});
