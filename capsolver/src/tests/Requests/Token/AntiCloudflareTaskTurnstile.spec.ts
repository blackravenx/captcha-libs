import { AntiCloudflareTurnstileTask } from "../../../lib/Requests/Token/AntiCloudflareTurnstileTask";

describe("AntiCloudflareTurnstileTask", () => {
  it("To be equal to object", () => {
    const task = new AntiCloudflareTurnstileTask({
      metadata: {
        action: "some-action",
        cdata: "some-cdata",
        type: "challenge"
      },
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
      _isAntiCloudflareTask: true,
      metadata: {
        action: "some-action",
        cdata: "some-cdata",
        type: "challenge"
      },
      proxy: undefined,
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "AntiCloudflareTask",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new AntiCloudflareTurnstileTask({
      metadata: { type: "turnstile" },
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
      _isAntiCloudflareTask: true,
      metadata: {
        action: undefined,
        cdata: undefined,
        type: "turnstile"
      },
      proxy: undefined,
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "AntiCloudflareTask",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
});
