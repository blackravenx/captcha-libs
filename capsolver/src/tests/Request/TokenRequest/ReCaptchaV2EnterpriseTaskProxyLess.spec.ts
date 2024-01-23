import { ReCaptchaV2EnterpriseTaskProxyLess } from "../../../lib/Request/TokenRequest/ReCaptchaV2EnterpriseTaskProxyLess";

describe("ReCaptchaV2EnterpriseTaskProxyLess", () => {
  it("To be equal to object", () => {
    const task = new ReCaptchaV2EnterpriseTaskProxyLess({
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
      type: "ReCaptchaV2EnterpriseTaskProxyLess",
      userAgent: "some-userAgent",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new ReCaptchaV2EnterpriseTaskProxyLess({
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      apiDomain: undefined,
      cookies: undefined,
      enterprisePayload: undefined,
      isInvisible: false,
      pageAction: undefined,
      type: "ReCaptchaV2EnterpriseTaskProxyLess",
      userAgent: undefined,
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
});
