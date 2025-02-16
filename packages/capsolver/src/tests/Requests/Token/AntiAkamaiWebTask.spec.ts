import { AntiAkamaiWebTask } from "../../../lib/Requests/Token/AntiAkamaiWebTask";

import { expect, it, describe } from "vitest";

describe("AntiAkamaiWebTask", () => {
  it("To be equal to object", () => {
    const task = new AntiAkamaiWebTask({
      "abck": "some-abck",
      "url": "https://some-url.com",
      "userAgent": "some-userAgent"
    });

    expect(task).toEqual({
      "_endpoint": "akamaiweb/invoke",
      "_isAntiAkamaiWebTask": true,
      "abck": "some-abck",
      "type": "AntiAkamaiWebTask",
      "url": "https://some-url.com",
      "userAgent": "some-userAgent"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new AntiAkamaiWebTask({ "url": "https://some-url.com" });

    expect(task).toEqual({
      "_endpoint": "akamaiweb/invoke",
      "_isAntiAkamaiWebTask": true,
      "type": "AntiAkamaiWebTask",
      "url": "https://some-url.com"
    });
  });
});
