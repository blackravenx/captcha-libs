import { GeeTestV4TaskProxyLess } from "../../../lib/Request/TokenRequest/GeeTestV4TaskProxyLess";

describe("GeeTestV4TaskProxyLess", () => {
  it("To be equal to object", () => {
    const task = new GeeTestV4TaskProxyLess({
      captchaId: "some-captchaId",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      captchaId: "some-captchaId",
      type: "GeeTestTaskProxyLess",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new GeeTestV4TaskProxyLess({
      captchaId: "some-captchaId",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      captchaId: "some-captchaId",
      type: "GeeTestTaskProxyLess",
      websiteURL: "https://some-url.com"
    });
  });
});
