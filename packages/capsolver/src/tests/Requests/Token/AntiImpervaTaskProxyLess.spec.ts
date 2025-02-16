import { AntiImpervaTaskProxyLess } from "../../../lib/Requests/Token/AntiImpervaTaskProxyLess";

import { expect, it, describe } from "vitest";

describe("AntiImpervaTaskProxyLess", () => {
  it("To be equal to object", () => {
    const task = new AntiImpervaTaskProxyLess({
      "reese84": true,
      "reeseScriptUrl": "some-reeseScriptUrl",
      "reeseToken": "some-reeseToken",
      "userAgent": "some-userAgent",
      "utmvc": true,
      "websiteUrl": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isAntiImpervaTaskProxyLess": true,
      "reese84": true,
      "reeseScriptUrl": "some-reeseScriptUrl",
      "reeseToken": "some-reeseToken",
      "type": "AntiImpervaTaskProxyLess",
      "userAgent": "some-userAgent",
      "utmvc": true,
      "websiteUrl": "https://some-url.com"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new AntiImpervaTaskProxyLess({
      "userAgent": "some-userAgent",
      "websiteUrl": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isAntiImpervaTaskProxyLess": true,
      "reese84": false,
      "reeseScriptUrl": undefined,
      "reeseToken": undefined,
      "type": "AntiImpervaTaskProxyLess",
      "userAgent": "some-userAgent",
      "utmvc": false,
      "websiteUrl": "https://some-url.com"
    });
  });
});
