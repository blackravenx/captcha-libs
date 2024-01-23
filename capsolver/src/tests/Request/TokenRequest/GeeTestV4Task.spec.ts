import { GeeTestV4Task } from "../../../lib/Request/TokenRequest/GeeTestV4Task";

describe("GeeTestV4Task", () => {
  it("To be equal to object", () => {
    const task = new GeeTestV4Task({
      captchaId: "some-captchaId",
      proxy: "proxy",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      captchaId: "some-captchaId",
      proxy: "proxy",
      type: "GeeTestTask",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new GeeTestV4Task({
      captchaId: "some-captchaId",
      proxy: "proxy",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      captchaId: "some-captchaId",
      proxy: "proxy",
      type: "GeeTestTask",
      websiteURL: "https://some-url.com"
    });
  });
});
