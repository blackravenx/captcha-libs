import { GeeTestTask } from "../../../lib/Requests/Token/GeeTestTask";

describe("GeeTestTask", () => {
  it("To be equal to object", () => {
    const task = new GeeTestTask({
      captchaId: "some-captchaId",
      challenge: "some-challenge",
      gt: "some-gt",
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isGeeTestTask: true,
      captchaId: "some-captchaId",
      challenge: "some-challenge",
      gt: "some-gt",
      proxy: undefined,
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "GeeTestTask",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new GeeTestTask({
      challenge: "some-challenge",
      gt: "some-gt",
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isGeeTestTask: true,
      challenge: "some-challenge",
      gt: "some-gt",
      proxy: undefined,
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "GeeTestTask",
      websiteURL: "https://some-url.com"
    });
  });
});
