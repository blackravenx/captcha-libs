import { GeeTestV3Task } from "../../../lib/Request/TokenRequest/GeeTestV3Task";

describe("GeeTestV3Task", () => {
  it("To be equal to object", () => {
    const task = new GeeTestV3Task({
      challenge: "some-challenge",
      geetestApiServerSubdomain: "https://some-api-domain.com",
      gt: "some-gt",
      proxy: "proxy",
      userAgent: "some-userAgent",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      challenge: "some-challenge",
      geetestApiServerSubdomain: "https://some-api-domain.com",
      gt: "some-gt",
      proxy: "proxy",
      type: "GeeTestTask",
      userAgent: "some-userAgent",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new GeeTestV3Task({
      challenge: "some-challenge",
      gt: "some-gt",
      proxy: "proxy",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      challenge: "some-challenge",
      gt: "some-gt",
      proxy: "proxy",
      type: "GeeTestTask",
      websiteURL: "https://some-url.com"
    });
  });
});
