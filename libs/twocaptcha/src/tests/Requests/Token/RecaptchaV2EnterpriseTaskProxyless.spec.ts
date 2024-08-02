import { RecaptchaV2EnterpriseTaskProxyless } from "../../../lib/Requests/Token/RecaptchaV2EnterpriseTaskProxyless";

describe("RecaptchaV2EnterpriseTaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new RecaptchaV2EnterpriseTaskProxyless({
      apiDomain: "some-apiDomain",
      cookies: "some-cookies",
      enterprisePayload: { value: "some-enterprisePayload" },
      isInvisible: false,
      recaptchaDataSValue: "some-recaptchaDataSValue",
      userAgent: "some-userAgent",
      websiteKey: "some-websiteKey",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isRecaptchaV2EnterpriseTaskProxyless: true,
      apiDomain: "some-apiDomain",
      cookies: "some-cookies",
      enterprisePayload: { value: "some-enterprisePayload" },
      isInvisible: false,
      proxyAddress: undefined,
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: undefined,
      proxyType: undefined,
      recaptchaDataSValue: "some-recaptchaDataSValue",
      type: "RecaptchaV2EnterpriseTaskProxyless",
      userAgent: "some-userAgent",
      websiteKey: "some-websiteKey",
      websiteURL: "some-websiteURL"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new RecaptchaV2EnterpriseTaskProxyless({
      recaptchaDataSValue: "some-recaptchaDataSValue",
      userAgent: "some-userAgent",
      websiteKey: "some-websiteKey",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isRecaptchaV2EnterpriseTaskProxyless: true,
      apiDomain: undefined,
      cookies: undefined,
      enterprisePayload: undefined,
      isInvisible: undefined,
      proxyAddress: undefined,
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: undefined,
      proxyType: undefined,
      recaptchaDataSValue: "some-recaptchaDataSValue",
      type: "RecaptchaV2EnterpriseTaskProxyless",
      userAgent: "some-userAgent",
      websiteKey: "some-websiteKey",
      websiteURL: "some-websiteURL"
    });
  });
});
