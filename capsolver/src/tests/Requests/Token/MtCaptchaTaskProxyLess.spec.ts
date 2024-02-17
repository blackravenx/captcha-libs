import { MtCaptchaTaskProxyLess } from "../../../lib/Requests/Token/MtCaptchaTaskProxyLess";

describe("MtCaptchaTaskProxyLess", () => {
  it("To be equal to object", () => {
    const task = new MtCaptchaTaskProxyLess({
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isMtCaptchaTaskProxyLess: true,
      type: "MtCaptchaTaskProxyLess",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
});
