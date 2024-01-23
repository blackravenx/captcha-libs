import { GeeTestTaskProxyLess } from "../../../lib/Request/TokenRequest/GeeTestTaskProxyLess";

describe("GeeTestTaskProxyLess", () => {
  it("To be equal to object", () => {
    const task = new GeeTestTaskProxyLess({
      captchaId: "some-captchaId",
      challenge: "some-challenge",
      gt: "some-gt",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      captchaId: "some-captchaId",
      challenge: "some-challenge",
      gt: "some-gt",
      type: "GeeTestTaskProxyLess",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new GeeTestTaskProxyLess({
      challenge: "some-challenge",
      gt: "some-gt",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      challenge: "some-challenge",
      gt: "some-gt",
      type: "GeeTestTaskProxyLess",
      websiteURL: "https://some-url.com"
    });
  });
});
