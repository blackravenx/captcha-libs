import { FunCaptchaTaskProxyLess } from "../../../lib/Requests/Token/FunCaptchaTaskProxyLess";

import { expect, it, describe } from "vitest";

describe("FunCaptchaTaskProxyLess", () => {
  it("To be equal to object", () => {
    const task = new FunCaptchaTaskProxyLess({
      "data": "some-data",
      "websitePublicKey": "some-websitePublicKey",
      "websiteURL": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isFunCaptchaTaskProxyLess": true,
      "data": "some-data",
      "proxy": undefined,
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "type": "FunCaptchaTaskProxyLess",
      "websitePublicKey": "some-websitePublicKey",
      "websiteURL": "https://some-url.com"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new FunCaptchaTaskProxyLess({
      "websitePublicKey": "some-websitePublicKey",
      "websiteURL": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isFunCaptchaTaskProxyLess": true,
      "data": undefined,
      "proxy": undefined,
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "type": "FunCaptchaTaskProxyLess",
      "websitePublicKey": "some-websitePublicKey",
      "websiteURL": "https://some-url.com"
    });
  });
});
