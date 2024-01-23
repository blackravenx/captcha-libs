import { ReCaptchaV2Task } from "../../../lib/Request/TokenRequest/ReCaptchaV2Task";

describe("ReCaptchaV2Task", () => {
  it("To be equal to object", () => {
    const task = new ReCaptchaV2Task({
      apiDomain: "https://some-api-domain.com",
      cookies: [
        {
          name: "Cookie name",
          value: "Cookie value"
        },
        {
          name: "Cookie 2 name",
          value: "Cookie 2 value"
        }
      ],
      enterprisePayload: { s: "SOME_ADDITIONAL_TOKEN" },
      isInvisible: false,
      pageAction: "some-action",
      proxy: "proxy",
      userAgent: "some-userAgent",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      apiDomain: "https://some-api-domain.com",
      cookies: [
        {
          name: "Cookie name",
          value: "Cookie value"
        },
        {
          name: "Cookie 2 name",
          value: "Cookie 2 value"
        }
      ],
      enterprisePayload: { s: "SOME_ADDITIONAL_TOKEN" },
      isInvisible: false,
      pageAction: "some-action",
      proxy: "proxy",
      type: "ReCaptchaV2Task",
      userAgent: "some-userAgent",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new ReCaptchaV2Task({
      proxy: "proxy",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      apiDomain: undefined,
      cookies: undefined,
      enterprisePayload: undefined,
      isInvisible: false,
      pageAction: undefined,
      proxy: "proxy",
      type: "ReCaptchaV2Task",
      userAgent: undefined,
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
});
