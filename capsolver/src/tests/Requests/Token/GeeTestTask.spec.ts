import { GeeTestTask } from "../../../lib/Requests/Token/GeeTestTask";

describe("GeeTestTask", () => {
  it("To be equal to object", () => {
    const task = new GeeTestTask({
      captchaId: "some-captchaId",
      challenge: "some-challenge",
      gt: "some-gt",
      proxy: "proxy",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isGeeTestTask: true,
      captchaId: "some-captchaId",
      challenge: "some-challenge",
      gt: "some-gt",
      proxy: "proxy",
      type: "GeeTestTask",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new GeeTestTask({
      challenge: "some-challenge",
      gt: "some-gt",
      proxy: "proxy",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isGeeTestTask: true,
      challenge: "some-challenge",
      gt: "some-gt",
      proxy: "proxy",
      type: "GeeTestTask",
      websiteURL: "https://some-url.com"
    });
  });
});
