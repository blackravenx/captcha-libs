import { AntiAwsWafTask } from "../../../lib/Requests/Token/AntiAwsWafTask";

describe("AntiAwsWafTask", () => {
  it("To be equal to object", () => {
    const task = new AntiAwsWafTask({
      awsChallengeJS: "some-challenge-js",
      awsContext: "some-context",
      awsIv: "some-iv",
      awsKey: "some-key",
      proxy: "proxy",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isAntiAwsWafTask: true,
      awsChallengeJS: "some-challenge-js",
      awsContext: "some-context",
      awsIv: "some-iv",
      awsKey: "some-key",
      proxy: "proxy",
      type: "AntiAwsWafTask",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new AntiAwsWafTask({
      proxy: "proxy",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isAntiAwsWafTask: true,
      proxy: "proxy",
      type: "AntiAwsWafTask",
      websiteURL: "https://some-url.com"
    });
  });
});
