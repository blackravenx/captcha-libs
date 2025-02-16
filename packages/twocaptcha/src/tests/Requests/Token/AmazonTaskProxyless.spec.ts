import { AmazonTaskProxyless } from "../../../lib/Requests/Token/AmazonTaskProxyless";

import { expect, it, describe } from "vitest";

describe("AmazonTaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new AmazonTaskProxyless({
      "captchaScript": "some-captchaScript",
      "challengeScript": "some-challengeScript",
      "context": "some-context",
      "iv": "some-iv",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isAmazonTaskProxyless": true,
      "captchaScript": "some-captchaScript",
      "challengeScript": "some-challengeScript",
      "context": "some-context",
      "iv": "some-iv",
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "type": "AmazonTaskProxyless",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new AmazonTaskProxyless({
      "context": "some-context",
      "iv": "some-iv",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isAmazonTaskProxyless": true,
      "captchaScript": undefined,
      "challengeScript": undefined,
      "context": "some-context",
      "iv": "some-iv",
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "type": "AmazonTaskProxyless",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });
});
