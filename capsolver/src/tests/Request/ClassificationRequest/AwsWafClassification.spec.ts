import { AwsWafClassification } from "../../../lib/Request/ClassificationRequest/AwsWafClassification";

describe("AwsWafClassification", () => {
  it("To be equal to object", () => {
    const task = new AwsWafClassification({
      images: [ "img1", "img2" ],
      question: "question",
      websiteKey: "xxx-xxx-xxx-key",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      images: [ "img1", "img2" ],
      question: "question",
      type: "AwsWafClassification",
      websiteKey: "xxx-xxx-xxx-key",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new AwsWafClassification({
      images: [ "img1", "img2" ],
      question: "question"
    });

    expect(task).toEqual({
      images: [ "img1", "img2" ],
      question: "question",
      type: "AwsWafClassification",
      websiteKey: undefined,
      websiteURL: undefined
    });
  });
});
