import { AmazonTask } from "../../../lib/Requests/Token/AmazonTask";

import { expect, it, describe } from "vitest";

describe("AmazonTask", () => {
  it("To be equal to object", () => {
    const task = new AmazonTask({
      "captchaScript": "some-captchaScript",
      "challengeScript": "some-challengeScript",
      "context": "some-context",
      "iv": "some-iv",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isAmazonTask": true,
      "captchaScript": "some-captchaScript",
      "challengeScript": "some-challengeScript",
      "context": "some-context",
      "iv": "some-iv",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "AmazonTask",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new AmazonTask({
      "context": "some-context",
      "iv": "some-iv",
      "proxyAddress": "some-proxyAddress",
      "proxyPort": 1010,
      "proxyType": "http",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isAmazonTask": true,
      "captchaScript": undefined,
      "challengeScript": undefined,
      "context": "some-context",
      "iv": "some-iv",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "AmazonTask",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });
});
