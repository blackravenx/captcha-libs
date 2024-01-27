import { AntiCloudflareChallengeTask } from "../../../lib/Request/TokenRequest/AntiCloudflareChallengeTask";

describe("AntiCloudflareChallengeTask", () => {
  it("To be equal to object", () => {
    const task = new AntiCloudflareChallengeTask({
      proxy: "proxy",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      proxy: "proxy",
      type: "AntiCloudflareTask",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new AntiCloudflareChallengeTask({ websiteURL: "https://some-url.com" });

    expect(task).toEqual({
      _endpoint: "createTask",
      type: "AntiCloudflareTask",
      websiteURL: "https://some-url.com"
    });
  });
});
