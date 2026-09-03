import { AntiBotdeflectorTaskProxyLess } from "../../../lib/Requests/Token/AntiBotdeflectorTaskProxyLess";

import { expect, it, describe } from "vitest";

describe("AntiBotdeflectorTaskProxyLess", () => {
  it("To be equal to object", () => {
    const task = new AntiBotdeflectorTaskProxyLess({
      "domain": "botdeflector.eu",
      'flowToken': "some-token",
      "websiteURL": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isAntiBotdeflectorTaskProxyLess": true,
      "type": "AntiBotdeflectorTaskProxyLess",
      "domain": "botdeflector.eu",
      'flowToken': "some-token",
      "websiteURL": "https://some-url.com"
    });
  });
});
