import { DataDomeSliderTask } from "../../../lib/Requests/Token/DataDomeSliderTask";

describe("DataDomeSliderTask", () => {
  it("To be equal to object", () => {
    const task = new DataDomeSliderTask({
      captchaUrl: "https://some-url.com",
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      userAgent: "some-userAgent"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isDataDomeSliderTask: true,
      captchaUrl: "https://some-url.com",
      proxy: undefined,
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "DataDomeSliderTask",
      userAgent: "some-userAgent"
    });
  });
});
