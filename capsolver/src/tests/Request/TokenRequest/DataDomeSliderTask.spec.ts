import { DataDomeSliderTask } from "../../../lib/Request/TokenRequest/DataDomeSliderTask";

describe("DataDomeSliderTask", () => {
  it("To be equal to object", () => {
    const task = new DataDomeSliderTask({
      captchaUrl: "https://some-url.com",
      proxy: "proxy",
      userAgent: "some-userAgent"
    });

    expect(task).toEqual({
      captchaUrl: "https://some-url.com",
      proxy: "proxy",
      type: "DataDomeSliderTask",
      userAgent: "some-userAgent"
    });
  });
});
