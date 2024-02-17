import { AntiCloudflareChallengeTask } from "../../../lib/Requests/Token/AntiCloudflareChallengeTask";

describe("AntiCloudflareChallengeTask", () => {
  it("To be equal to object", () => {
    const task = new AntiCloudflareChallengeTask({
      proxy: "proxy",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isAntiCloudflareTask: true,
      proxy: "proxy",
      type: "AntiCloudflareTask",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new AntiCloudflareChallengeTask({ websiteURL: "https://some-url.com" });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isAntiCloudflareTask: true,
      type: "AntiCloudflareTask",
      websiteURL: "https://some-url.com"
    });
  });
});
