import { MtCaptchaTaskProxyLess } from "../../../lib/Request/TokenRequest/MtCaptchaTaskProxyLess";

describe("MtCaptchaTaskProxyLess", () => {
  it("To be equal to object", () => {
    const task = new MtCaptchaTaskProxyLess({
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      type: "MtCaptchaTaskProxyLess",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
});
