import { TurnstileTaskProxyless } from "../../../lib/Requests/Token/TurnstileTaskProxyless";

describe("TurnstileTaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new TurnstileTaskProxyless({
      action: "some-action",
      data: "some-data",
      pagedata: "some-pagedata",
      userAgent: "some-userAgent",
      websiteKey: "some-websiteKey",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isTurnstileTaskProxyless: true,
      action: "some-action",
      data: "some-data",
      pagedata: "some-pagedata",
      proxyAddress: undefined,
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: undefined,
      proxyType: undefined,
      type: "TurnstileTaskProxyless",
      userAgent: "some-userAgent",
      websiteKey: "some-websiteKey",
      websiteURL: "some-websiteURL"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new TurnstileTaskProxyless({
      userAgent: "some-userAgent",
      websiteKey: "some-websiteKey",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isTurnstileTaskProxyless: true,
      action: undefined,
      data: undefined,
      pagedata: undefined,
      proxyAddress: undefined,
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: undefined,
      proxyType: undefined,
      type: "TurnstileTaskProxyless",
      userAgent: "some-userAgent",
      websiteKey: "some-websiteKey",
      websiteURL: "some-websiteURL"
    });
  });
});
