import { AtbCaptchaTask } from "../../../lib/Requests/Token/AtbCaptchaTask";

import { expect, it, describe } from "vitest";

describe("AtbCaptchaTask", () => {
  it("To be equal to object", () => {
    const task = new AtbCaptchaTask({
      "apiServer": "some-apiServer",
      "appId": "some-appId",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isAtbCaptchaTask": true,
      "apiServer": "some-apiServer",
      "appId": "some-appId",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "AtbCaptchaTask",
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new AtbCaptchaTask({
      "apiServer": "some-apiServer",
      "appId": "some-appId",
      "proxyAddress": "some-proxyAddress",
      "proxyPort": 1010,
      "proxyType": "http",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isAtbCaptchaTask": true,
      "apiServer": "some-apiServer",
      "appId": "some-appId",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "AtbCaptchaTask",
      "websiteURL": "some-websiteURL"
    });
  });
});
