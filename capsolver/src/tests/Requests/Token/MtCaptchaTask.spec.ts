import { MtCaptchaTask } from "../../../lib/Requests/Token/MtCaptchaTask";

describe("TASK", () => {
  it("To be equal to object", () => {
    const task = new MtCaptchaTask({
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isMtCaptchaTask: true,
      proxy: undefined,
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "MtCaptchaTask",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
});
