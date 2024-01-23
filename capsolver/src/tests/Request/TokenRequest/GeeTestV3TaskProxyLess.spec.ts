import { GeeTestV3TaskProxyLess } from "../../../lib/Request/TokenRequest/GeeTestV3TaskProxyLess";

describe("GeeTestV3TaskProxyLess", () => {
  it("To be equal to object", () => {
    const task = new GeeTestV3TaskProxyLess({
      challenge: "some-challenge",
      geetestApiServerSubdomain: "https://some-api-domain.com",
      gt: "some-gt",
      userAgent: "some-userAgent",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      captchaId: undefined,
      challenge: "some-challenge",
      geetestApiServerSubdomain: "https://some-api-domain.com",
      gt: "some-gt",
      proxy: undefined,
      type: "GeeTestTaskProxyLess",
      userAgent: "some-userAgent",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new GeeTestV3TaskProxyLess({
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
