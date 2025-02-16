import { HCaptchaTask } from "../../../lib/Requests/Token/HCaptchaTask";

import { expect, it, describe } from "vitest";

describe("HCaptchaTask", () => {
  it("To be equal to object", () => {
    const task = new HCaptchaTask({
      "enterprisePayload": { "rqdata": "test_string" },
      "isInvisible": false,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isHCaptchaTask": true,
      "enterprisePayload": { "rqdata": "test_string" },
      "isInvisible": false,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "HCaptchaTask",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new HCaptchaTask({
      "proxyAddress": "some-proxyAddress",
      "proxyPort": 1010,
      "proxyType": "http",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isHCaptchaTask": true,
      "enterprisePayload": undefined,
      "isInvisible": undefined,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "HCaptchaTask",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });
});
