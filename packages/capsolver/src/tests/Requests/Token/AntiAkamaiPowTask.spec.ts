import { AntiAkamaiPowTask } from "../../../lib/Requests/Token/AntiAkamaiPowTask";

import { expect, it, describe } from "vitest";

describe("AntiAkamaiPowTask", () => {
  it("To be equal to object", () => {
    const task = new AntiAkamaiPowTask({
      "deviceId": "some-deviceId",
      "pow": "some-pow-data"
    });

    expect(task).toEqual({
      "_endpoint": "akamaibmp/invoke",
      "_isAntiAkamaiBMPTask": true,
      "deviceId": "some-deviceId",
      "pow": "some-pow-data",
      "type": "AntiAkamaiBMPTask"
    });
  });
});
