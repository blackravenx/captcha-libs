import { TurnstileTask } from "../../../lib/Requests/Token/TurnstileTask";

import { expect, it, describe } from "vitest";

describe("TurnstileTask", () => {
  it("To be equal to object", () => {
    const task = new TurnstileTask({
      "action": "some-action",
      "data": "some-data",
      "pagedata": "some-pagedata",
      "pageurl": "some-pageurl",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "sitekey": "some-sitekey",
      "userAgent": "some-userAgent"
    });

    expect(task).toEqual({
      "_isTurnstileTask": true,
      "action": "some-action",
      "data": "some-data",
      "method": "turnstile",
      "pagedata": "some-pagedata",
      "pageurl": "some-pageurl",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "sitekey": "some-sitekey",
      "type": "TurnstileTask",
      "userAgent": "some-userAgent"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new TurnstileTask({
      "pageurl": "some-pageurl",
      "proxyAddress": "some-proxyAddress",
      "proxyPort": 1010,
      "proxyType": "http",
      "sitekey": "some-sitekey"
    });

    expect(task).toEqual({
      "_isTurnstileTask": true,
      "action": undefined,
      "data": undefined,
      "method": "turnstile",
      "pagedata": undefined,
      "pageurl": "some-pageurl",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": 1010,
      "proxyType": "http",
      "sitekey": "some-sitekey",
      "type": "TurnstileTask",
      "userAgent": undefined
    });
  });
});
