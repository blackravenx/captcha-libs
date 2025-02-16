import { HCaptchaClassification } from "../../../lib/Requests/Classification/HCaptchaClassification";

import { expect, it, describe } from "vitest";

describe("HCaptchaClassificationRequest Test", () => {
  it("To be equal to object", () => {
    const task = new HCaptchaClassification({
      "queries": [ "image1" ],
      "question": "question",
      "websiteKey": "xxx-xxx-xxx-key",
      "websiteURL": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isHCaptchaClassification": true,
      "queries": [ "image1" ],
      "question": "question",
      "type": "HCaptchaClassification",
      "websiteKey": "xxx-xxx-xxx-key",
      "websiteURL": "https://some-url.com"
    });
  });

  it("To be equal to object without optional parameters", () => {
    const task = new HCaptchaClassification({
      "queries": [ "image1" ],
      "question": "question"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isHCaptchaClassification": true,
      "module": undefined,
      "queries": [ "image1" ],
      "question": "question",
      "type": "HCaptchaClassification",
      "websiteKey": undefined,
      "websiteURL": undefined
    });
  });
});
