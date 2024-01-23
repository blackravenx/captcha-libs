import { ReCaptchaV3EnterpriseTaskProxyLess } from "../../../lib/Request/TokenRequest/ReCaptchaV3EnterpriseTaskProxyLess";

describe("ReCaptchaV3EnterpriseTaskProxyLess", () => {
  it("To be equal to object", () => {
    const task = new ReCaptchaV3EnterpriseTaskProxyLess({
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
      minScore: 0.7,
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
      minScore: 0.7,
      pageAction: "some-action",
      type: "ReCaptchaV3EnterpriseTaskProxyLess",
      userAgent: "some-userAgent",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new ReCaptchaV3EnterpriseTaskProxyLess({
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      apiDomain: undefined,
      cookies: undefined,
      enterprisePayload: undefined,
      minScore: undefined,
      pageAction: undefined,
      type: "ReCaptchaV3EnterpriseTaskProxyLess",
      userAgent: undefined,
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
});
