import { AntiCyberSiAraTaskProxyless } from "../../../lib/Requests/Token/AntiCyberSiAraTaskProxyless";

import { expect, it, describe } from "vitest";

describe("AntiCyberSiAraTaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new AntiCyberSiAraTaskProxyless({
      "SlideMasterUrlId": "some-SlideMasterUrlId",
      "userAgent": "some-userAgent",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "SlideMasterUrlId": "some-SlideMasterUrlId",
      "_isAntiCyberSiAraTaskProxyless": true,
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "type": "AntiCyberSiAraTaskProxyless",
      "userAgent": "some-userAgent",
      "websiteURL": "some-websiteURL"
    });
  });
});
