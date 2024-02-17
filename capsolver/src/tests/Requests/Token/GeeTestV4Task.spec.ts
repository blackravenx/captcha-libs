import { GeeTestV4Task } from "../../../lib/Requests/Token/GeeTestV4Task";

describe("GeeTestV4Task", () => {
  it("To be equal to object", () => {
    const task = new GeeTestV4Task({
      captchaId: "some-captchaId",
      proxy: "proxy",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isGeeTestTask: true,
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
      _endpoint: "createTask",
      _isGeeTestTask: true,
      captchaId: "some-captchaId",
      proxy: "proxy",
      type: "GeeTestTask",
      websiteURL: "https://some-url.com"
    });
  });
});
