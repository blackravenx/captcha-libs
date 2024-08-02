import { AntiTurnstileTaskProxyLess } from "../../../lib/Requests/Token/AntiTurnstileTaskProxyLess";

describe("AntiTurnstileTaskProxyLess", () => {
  it("To be equal to object", () => {
    const task = new AntiTurnstileTaskProxyLess({
      metadata: {
        action: "some-action",
        cdata: "some-cdata"
      },
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isAntiTurnstileTaskProxyLess: true,
      metadata: {
        action: "some-action",
        cdata: "some-cdata"
      },
      type: "AntiTurnstileTaskProxyLess",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new AntiTurnstileTaskProxyLess({
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isAntiTurnstileTaskProxyLess: true,
      metadata: undefined,
      type: "AntiTurnstileTaskProxyLess",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
});
