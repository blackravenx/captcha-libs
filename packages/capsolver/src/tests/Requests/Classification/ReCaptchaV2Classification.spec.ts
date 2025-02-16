import { ReCaptchaV2Classification } from "../../../lib/Requests/Classification/ReCaptchaV2Classification";

import { expect, it, describe } from "vitest";

describe("ReCaptchaClassificationRequest Test", () => {
  it("To be equal to object", () => {
    const task = new ReCaptchaV2Classification({
      "image": "image1",
      "question": "question",
      "websiteKey": "xxx-xxx-xxx-key",
      "websiteURL": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isReCaptchaV2Classification": true,
      "image": "image1",
      "question": "question",
      "type": "ReCaptchaV2Classification",
      "websiteKey": "xxx-xxx-xxx-key",
      "websiteURL": "https://some-url.com"
    });
  });

  it("To be equal to object without optional parameters", () => {
    const task = new ReCaptchaV2Classification({
      "image": "image1",
      "question": "question"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isReCaptchaV2Classification": true,
      "image": "image1",
      "module": undefined,
      "question": "question",
      "type": "ReCaptchaV2Classification",
      "websiteKey": undefined,
      "websiteURL": undefined
    });
  });
});
