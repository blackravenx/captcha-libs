import { AntiCloudflareChallengeTask } from "../../../lib/Requests/Token/AntiCloudflareChallengeTask";

describe("AntiCloudflareChallengeTask", () => {
  it("To be equal to object", () => {
    const task = new AntiCloudflareChallengeTask({
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isAntiCloudflareTask: true,
      proxy: undefined,
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "AntiCloudflareTask",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new AntiCloudflareChallengeTask({ websiteURL: "https://some-url.com" });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isAntiCloudflareTask: true,
      proxy: undefined,
      type: "AntiCloudflareTask",
      websiteURL: "https://some-url.com"
    });
  });
});
