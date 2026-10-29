import { ReCaptchaV2Classification } from "../../lib/Requests/ReCaptchaV2Classification";

import { expect, it, describe } from "vitest";

describe("ReCaptchaV2Classification Test", () => {
  it("To be equal to object", () => {
    const task = new ReCaptchaV2Classification({
      "image": "image",
      "question": "/m/04_sv"
    });

    expect(task).toEqual({
      "_isReCaptchaV2Classification": true,
      "image": "image",
      "question": "/m/04_sv",
      "type": "ReCaptchaV2Classification"
    });
  });
});
