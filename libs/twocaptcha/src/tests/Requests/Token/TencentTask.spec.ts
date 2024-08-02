import { TencentTask } from "../../../lib/Requests/Token/TencentTask";

describe("TencentTask", () => {
  it("To be equal to object", () => {
    const task = new TencentTask({
      appId: "some-appId",
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isTencentTask: true,
      appId: "some-appId",
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "TencentTask",
      websiteURL: "some-websiteURL"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new TencentTask({
      appId: "some-appId",
      proxyAddress: "some-proxyAddress",
      proxyPort: 1010,
      proxyType: "http",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isTencentTask: true,
      appId: "some-appId",
      proxyAddress: "some-proxyAddress",
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: 1010,
      proxyType: "http",
      type: "TencentTask",
      websiteURL: "some-websiteURL"
    });
  });
});
