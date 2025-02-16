import { TurnstileTask } from "../../../lib/Requests/Token/TurnstileTask";

import { expect, it, describe } from "vitest";

describe("TurnstileTask", () => {
  it("To be equal to object", () => {
    const task = new TurnstileTask({
      "action": "some-action",
      "data": "some-data",
      "pagedata": "some-pagedata",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isTurnstileTask": true,
      "action": "some-action",
      "data": "some-data",
      "pagedata": "some-pagedata",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "TurnstileTask",
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new TurnstileTask({
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": 1010,
      "proxyType": "http",
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isTurnstileTask": true,
      "action": undefined,
      "data": undefined,
      "pagedata": undefined,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "TurnstileTask",
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });
});
