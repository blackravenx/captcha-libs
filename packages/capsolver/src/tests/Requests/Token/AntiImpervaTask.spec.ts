import { AntiImpervaTask } from "../../../lib/Requests/Token/AntiImpervaTask";

import { expect, it, describe } from "vitest";

describe("AntiImpervaTask", () => {
  it("To be equal to object", () => {
    const task = new AntiImpervaTask({
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "reese84": true,
      "reeseScriptUrl": "some-reeseScriptUrl",
      "reeseToken": "some-reeseToken",
      "userAgent": "some-userAgent",
      "utmvc": true,
      "websiteUrl": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isAntiImpervaTask": true,
      "proxy": undefined,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "reese84": true,
      "reeseScriptUrl": "some-reeseScriptUrl",
      "reeseToken": "some-reeseToken",
      "type": "AntiImpervaTask",
      "userAgent": "some-userAgent",
      "utmvc": true,
      "websiteUrl": "https://some-url.com"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new AntiImpervaTask({
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "userAgent": "some-userAgent",
      "websiteUrl": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isAntiImpervaTask": true,
      "proxy": undefined,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "reese84": false,
      "reeseScriptUrl": undefined,
      "reeseToken": undefined,
      "type": "AntiImpervaTask",
      "userAgent": "some-userAgent",
      "utmvc": false,
      "websiteUrl": "https://some-url.com"
    });
  });
});
