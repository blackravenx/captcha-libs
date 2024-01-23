import { AntiCloudflareTaskTurnstile } from "../../../lib/Request/TokenRequest/AntiCloudflareTaskTurnstile";

describe("AntiCloudflareTaskTurnstile", () => {
  it("To be equal to object", () => {
    const task = new AntiCloudflareTaskTurnstile({
      metadata: {
        action: "some-action",
        cdata: "some-cdata",
        type: "challenge"
      },
      proxy: "proxy",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      metadata: {
        action: "some-action",
        cdata: "some-cdata",
        type: "challenge"
      },
      proxy: "proxy",
      type: "AntiCloudflareTask",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new AntiCloudflareTaskTurnstile({ websiteURL: "https://some-url.com" });

    expect(task).toEqual({
      metadata: { type: "turnstile" },
      type: "AntiCloudflareTask",
      websiteURL: "https://some-url.com"
    });
  });
});
