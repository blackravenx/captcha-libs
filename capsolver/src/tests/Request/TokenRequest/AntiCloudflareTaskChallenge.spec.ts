import { AntiCloudflareTaskChallenge } from "../../../lib/Request/TokenRequest/AntiCloudflareTaskChallenge";

describe("AntiCloudflareTaskChallenge", () => {
  it("To be equal to object", () => {
    const task = new AntiCloudflareTaskChallenge({
      proxy: "proxy",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      proxy: "proxy",
      type: "AntiCloudflareTask",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new AntiCloudflareTaskChallenge({ websiteURL: "https://some-url.com" });

    expect(task).toEqual({
      type: "AntiCloudflareTask",
      websiteURL: "https://some-url.com"
    });
  });
});
