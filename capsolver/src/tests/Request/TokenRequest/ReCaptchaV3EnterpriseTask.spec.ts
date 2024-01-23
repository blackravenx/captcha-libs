import { ReCaptchaV3EnterpriseTask } from "../../../lib/Request/TokenRequest/ReCaptchaV3EnterpriseTask";

describe("ReCaptchaV3EnterpriseTask", () => {
  it("To be equal to object", () => {
    const task = new ReCaptchaV3EnterpriseTask({
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
      minScore: 0.7,
      pageAction: "some-action",
      proxy: "proxy",
      type: "ReCaptchaV3EnterpriseTask",
      userAgent: "some-userAgent",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new ReCaptchaV3EnterpriseTask({
      proxy: "proxy",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      apiDomain: undefined,
      cookies: undefined,
      enterprisePayload: undefined,
      minScore: undefined,
      pageAction: undefined,
      proxy: "proxy",
      type: "ReCaptchaV3EnterpriseTask",
      userAgent: undefined,
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
});
