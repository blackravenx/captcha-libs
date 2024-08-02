import { GeeTestV3Task } from "../../../lib/Requests/Token/GeeTestV3Task";

describe("GeeTestV3Task", () => {
  it("To be equal to object", () => {
    const task = new GeeTestV3Task({
      challenge: "some-challenge",
      geetestApiServerSubdomain: "https://some-api-domain.com",
      gt: "some-gt",
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      userAgent: "some-userAgent",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isGeeTestTask: true,
      challenge: "some-challenge",
      geetestApiServerSubdomain: "https://some-api-domain.com",
      gt: "some-gt",
      proxy: undefined,
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "GeeTestTask",
      userAgent: "some-userAgent",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new GeeTestV3Task({
      challenge: "some-challenge",
      gt: "some-gt",
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isGeeTestTask: true,
      challenge: "some-challenge",
      gt: "some-gt",
      proxy: undefined,
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "GeeTestTask",
      websiteURL: "https://some-url.com"
    });
  });
});
