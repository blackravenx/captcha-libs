import { AntiAwsWafTaskProxyLess } from "../../../lib/Requests/Token/AntiAwsWafTaskProxyLess";

import { expect, it, describe } from "vitest";

describe("AntiAwsWafTaskProxyLess", () => {
  it("To be equal to object", () => {
    const task = new AntiAwsWafTaskProxyLess({
      "awsChallengeJS": "some-challenge-js",
      "awsContext": "some-context",
      "awsIv": "some-iv",
      "awsKey": "some-key",
      "websiteURL": "https://some-url.com",
      "awsApiJs": "https://9175c2fd4189.edge.captcha-sdk.awswaf.com/9175c2fd4189/jsapi.js",
      "awsProblemUrl": "https://ait...awswaf.com/ait/ait/ait/problem?kind=visual&...&problem=gridcaptcha-5-0.1-0&num_solutions_required=2",
      "awsApiKey": "Sps+L2gV...",
      "awsExistingToken": "5na16dg6-216a-...",
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isAntiAwsWafTaskProxyLess": true,
      "awsChallengeJS": "some-challenge-js",
      "awsContext": "some-context",
      "awsIv": "some-iv",
      "awsKey": "some-key",
      "type": "AntiAwsWafTaskProxyLess",
      "websiteURL": "https://some-url.com",
      "awsApiJs": "https://9175c2fd4189.edge.captcha-sdk.awswaf.com/9175c2fd4189/jsapi.js",
      "awsProblemUrl": "https://ait...awswaf.com/ait/ait/ait/problem?kind=visual&...&problem=gridcaptcha-5-0.1-0&num_solutions_required=2",
      "awsApiKey": "Sps+L2gV...",
      "awsExistingToken": "5na16dg6-216a-...",
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new AntiAwsWafTaskProxyLess({ "websiteURL": "https://some-url.com" });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isAntiAwsWafTaskProxyLess": true,
      "type": "AntiAwsWafTaskProxyLess",
      "websiteURL": "https://some-url.com"
    });
  });
});
