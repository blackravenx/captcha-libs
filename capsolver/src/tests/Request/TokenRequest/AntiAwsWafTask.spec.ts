import { AntiAwsWafTask } from "../../../lib/Request/TokenRequest/AntiAwsWafTask";

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
      proxy: "proxy",
      type: "AntiAwsWafTask",
      websiteURL: "https://some-url.com"
    });
  });
});
