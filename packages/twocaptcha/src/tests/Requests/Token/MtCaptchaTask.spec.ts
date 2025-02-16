import { MtCaptchaTask } from "../../../lib/Requests/Token/MtCaptchaTask";

import { expect, it, describe } from "vitest";

describe("MtCaptchaTask", () => {
  it("To be equal to object", () => {
    const task = new MtCaptchaTask({
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isMtCaptchaTask": true,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "MtCaptchaTask",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new MtCaptchaTask({
      "proxyAddress": "some-proxyAddress",
      "proxyPort": 1010,
      "proxyType": "http",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isMtCaptchaTask": true,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "MtCaptchaTask",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });
});
