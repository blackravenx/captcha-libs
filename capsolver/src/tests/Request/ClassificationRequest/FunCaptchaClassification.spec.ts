import { FunCaptchaClassification } from "../../../lib/Request/ClassificationRequest/FunCaptchaClassification";

describe("FunCaptchaClassificationRequest Test", () => {
  it("To be equal to object", () => {
    const task = new FunCaptchaClassification({
      images: "image1",
      module: "module",
      question: "question",
      websiteKey: "xxx-xxx-xxx-key",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      images: "image1",
      module: "module",
      question: "question",
      type: "FunCaptchaClassification",
      websiteKey: "xxx-xxx-xxx-key",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional parameters", () => {
    const task = new FunCaptchaClassification({
      images: "image1",
      question: "question"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      images: "image1",
      module: undefined,
      question: "question",
      type: "FunCaptchaClassification",
      websiteKey: undefined,
      websiteURL: undefined
    });
  });
});
