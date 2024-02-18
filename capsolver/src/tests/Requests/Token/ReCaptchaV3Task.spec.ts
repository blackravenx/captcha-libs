import { ReCaptchaV3Task } from "../../../lib/Requests/Token/ReCaptchaV3Task";

describe("ReCaptchaV3Task", () => {
  it("To be equal to object", () => {
    const task = new ReCaptchaV3Task({
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
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      userAgent: "some-userAgent",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isReCaptchaV3Task: true,
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
      proxy: undefined,
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "ReCaptchaV3Task",
      userAgent: "some-userAgent",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new ReCaptchaV3Task({
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
      _isReCaptchaV3Task: true,
      apiDomain: undefined,
      cookies: undefined,
      enterprisePayload: undefined,
      minScore: undefined,
      pageAction: undefined,
      proxy: undefined,
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "ReCaptchaV3Task",
      userAgent: undefined,
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
});
