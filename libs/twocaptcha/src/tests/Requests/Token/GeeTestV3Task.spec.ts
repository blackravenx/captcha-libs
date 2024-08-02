import { GeeTestV3Task } from "../../../lib/Requests/Token/GeeTestV3Task";

describe("GeeTestV3Task", () => {
  it("To be equal to object", () => {
    const task = new GeeTestV3Task({
      challenge: "some-challenge",
      geetestApiServerSubdomain: "some-geetestApiServerSubdomain",
      gt: "some-gt",
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      userAgent: "some-userAgent",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isGeeTestTask: true,
      challenge: "some-challenge",
      geetestApiServerSubdomain: "some-geetestApiServerSubdomain",
      gt: "some-gt",
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "GeeTestTask",
      userAgent: "some-userAgent",
      version: 3,
      websiteURL: "some-websiteURL"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new GeeTestV3Task({
      challenge: "some-challenge",
      geetestApiServerSubdomain: undefined,
      gt: "some-gt",
      proxyAddress: "some-proxyAddress",
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: 1010,
      proxyType: "http",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isGeeTestTask: true,
      challenge: "some-challenge",
      geetestApiServerSubdomain: undefined,
      gt: "some-gt",
      proxyAddress: "some-proxyAddress",
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: 1010,
      proxyType: "http",
      type: "GeeTestTask",
      userAgent: undefined,
      version: 3,
      websiteURL: "some-websiteURL"
    });
  });
});
