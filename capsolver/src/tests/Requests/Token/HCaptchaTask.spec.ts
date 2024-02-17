import { HCaptchaTask } from "../../../lib/Requests/Token/HCaptchaTask";

describe("HCaptchaTask test", () => {
  it("To be equal to object", () => {
    const task = new HCaptchaTask({
      enterprisePayload: { s: "SOME_ADDITIONAL_TOKEN" },
      isInvisible: false,
      proxy: "proxy",
      userAgent: "some-userAgent",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isHCaptchaTask: true,
      enterprisePayload: { s: "SOME_ADDITIONAL_TOKEN" },
      isInvisible: false,
      proxy: "proxy",
      type: "HCaptchaTask",
      userAgent: "some-userAgent",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new HCaptchaTask({
      proxy: "proxy",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isHCaptchaTask: true,
      enterprisePayload: undefined,
      isInvisible: false,
      proxy: "proxy",
      type: "HCaptchaTask",
      userAgent: undefined,
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
});
