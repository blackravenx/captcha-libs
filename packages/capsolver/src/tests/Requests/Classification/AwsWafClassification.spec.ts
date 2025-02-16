import { AwsWafClassification } from "../../../lib/Requests/Classification/AwsWafClassification";

import { expect, it, describe } from "vitest";

describe("AwsWafClassification", () => {
  it("To be equal to object", () => {
    const task = new AwsWafClassification({
      "images": [
        "img1",
        "img2"
      ],
      "question": "question",
      "websiteKey": "xxx-xxx-xxx-key",
      "websiteURL": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isAwsWafClassification": true,
      "images": [
        "img1",
        "img2"
      ],
      "question": "question",
      "type": "AwsWafClassification",
      "websiteKey": "xxx-xxx-xxx-key",
      "websiteURL": "https://some-url.com"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new AwsWafClassification({
      "images": [
        "img1",
        "img2"
      ],
      "question": "question"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isAwsWafClassification": true,
      "images": [
        "img1",
        "img2"
      ],
      "question": "question",
      "type": "AwsWafClassification",
      "websiteKey": undefined,
      "websiteURL": undefined
    });
  });
});
