import { TurnstileTaskProxyless } from "../../../lib/Requests/Token/TurnstileTaskProxyless";

import { expect, it, describe } from "vitest";

describe("TurnstileTaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new TurnstileTaskProxyless({
      "action": "some-action",
      "data": "some-data",
      "pagedata": "some-pagedata",
      "pageurl": "some-pageurl",
      "sitekey": "some-sitekey",
      "userAgent": "some-userAgent"
    });

    expect(task).toEqual({
      "_isTurnstileTaskProxyless": true,
      "action": "some-action",
      "data": "some-data",
      "method": "turnstile",
      "pagedata": "some-pagedata",
      "pageurl": "some-pageurl",
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "sitekey": "some-sitekey",
      "type": "TurnstileTaskProxyless",
      "userAgent": "some-userAgent"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new TurnstileTaskProxyless({
      "pageurl": "some-pageurl",
      "sitekey": "some-sitekey"
    });

    expect(task).toEqual({
      "_isTurnstileTaskProxyless": true,
      "action": undefined,
      "data": undefined,
      "method": "turnstile",
      "pagedata": undefined,
      "pageurl": "some-pageurl",
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "sitekey": "some-sitekey",
      "type": "TurnstileTaskProxyless",
      "userAgent": undefined
    });
  });
});
