import { AntiCyberSiAraTask } from "../../../lib/Requests/Token/AntiCyberSiAraTask";

import { expect, it, describe } from "vitest";

describe("AntiCyberSiAraTask", () => {
  it("To be equal to object", () => {
    const task = new AntiCyberSiAraTask({
      "SlideMasterUrlId": "some-SlideMasterUrlId",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "userAgent": "some-userAgent",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "SlideMasterUrlId": "some-SlideMasterUrlId",
      "_isAntiCyberSiAraTask": true,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "AntiCyberSiAraTask",
      "userAgent": "some-userAgent",
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new AntiCyberSiAraTask({
      "SlideMasterUrlId": "some-SlideMasterUrlId",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": 1010,
      "proxyType": "http",
      "userAgent": "some-userAgent",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "SlideMasterUrlId": "some-SlideMasterUrlId",
      "_isAntiCyberSiAraTask": true,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "AntiCyberSiAraTask",
      "userAgent": "some-userAgent",
      "websiteURL": "some-websiteURL"
    });
  });
});
