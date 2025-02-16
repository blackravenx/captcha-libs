import { AntiAwsWafTask } from "../../../lib/Requests/Token/AntiAwsWafTask";

import { expect, it, describe } from "vitest";

describe("AntiAwsWafTask", () => {
  it("To be equal to object", () => {
    const task = new AntiAwsWafTask({
      "awsChallengeJS": "some-challenge-js",
      "awsContext": "some-context",
      "awsIv": "some-iv",
      "awsKey": "some-key",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "websiteURL": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isAntiAwsWafTask": true,
      "awsChallengeJS": "some-challenge-js",
      "awsContext": "some-context",
      "awsIv": "some-iv",
      "awsKey": "some-key",
      "proxy": undefined,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "AntiAwsWafTask",
      "websiteURL": "https://some-url.com"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new AntiAwsWafTask({
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "websiteURL": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isAntiAwsWafTask": true,
      "proxy": undefined,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "AntiAwsWafTask",
      "websiteURL": "https://some-url.com"
    });
  });
});
