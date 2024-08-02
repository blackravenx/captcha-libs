import { AntiAwsWafTaskProxyLess } from "../../../lib/Requests/Token/AntiAwsWafTaskProxyLess";

describe("AntiAwsWafTaskProxyLess", () => {
  it("To be equal to object", () => {
    const task = new AntiAwsWafTaskProxyLess({
      awsChallengeJS: "some-challenge-js",
      awsContext: "some-context",
      awsIv: "some-iv",
      awsKey: "some-key",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isAntiAwsWafTaskProxyLess: true,
      awsChallengeJS: "some-challenge-js",
      awsContext: "some-context",
      awsIv: "some-iv",
      awsKey: "some-key",
      type: "AntiAwsWafTaskProxyLess",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new AntiAwsWafTaskProxyLess({ websiteURL: "https://some-url.com" });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isAntiAwsWafTaskProxyLess: true,
      type: "AntiAwsWafTaskProxyLess",
      websiteURL: "https://some-url.com"
    });
  });
});
