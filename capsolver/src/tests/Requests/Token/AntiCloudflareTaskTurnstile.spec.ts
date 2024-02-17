import { AntiCloudflareTurnstileTask } from "../../../lib/Requests/Token/AntiCloudflareTurnstileTask";

describe("AntiCloudflareTurnstileTask", () => {
  it("To be equal to object", () => {
    const task = new AntiCloudflareTurnstileTask({
      metadata: {
        action: "some-action",
        cdata: "some-cdata",
        type: "challenge"
      },
      proxy: "proxy",
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
      proxy: "proxy",
      type: "AntiCloudflareTask",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new AntiCloudflareTurnstileTask({
      metadata: { type: "turnstile" },
      proxy: "proxy",
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
      proxy: "proxy",
      type: "AntiCloudflareTask",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
});
