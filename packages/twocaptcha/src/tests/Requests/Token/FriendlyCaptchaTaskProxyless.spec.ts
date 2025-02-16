import { FriendlyCaptchaTaskProxyless } from "../../../lib/Requests/Token/FriendlyCaptchaTaskProxyless";

import { expect, it, describe } from "vitest";

describe("FriendlyCaptchaTaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new FriendlyCaptchaTaskProxyless({
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isFriendlyCaptchaTaskProxyless": true,
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "type": "FriendlyCaptchaTaskProxyless",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });
});
