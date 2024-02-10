import { HCaptchaTask } from "../../lib/Request/Token/HCaptchaTask";

describe("HCaptchaTask Test", () => {
  it("To be equal to object", () => {
    const task = new HCaptchaTask({
      cookies: "some-cookies",
      pageurl: "some-pageurl",
      proxy: "some-proxy",
      proxyType: "HTTP",
      sitekey: "some-sitekey",
      userAgent: "some-userAgent"
    });

    expect(task).toEqual({
      cookies: "some-cookies",
      isString: true,
      method: "hcaptcha",
      pageurl: "some-pageurl",
      proxy: "some-proxy",
      proxyType: "HTTP",
      sitekey: "some-sitekey",
      userAgent: "some-userAgent"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new HCaptchaTask({
      pageurl: "some-pageurl",
      sitekey: "some-sitekey"
    });

    expect(task).toEqual({
      isString: true,
      method: "hcaptcha",
      pageurl: "some-pageurl",
      sitekey: "some-sitekey"
    });
  });
});
