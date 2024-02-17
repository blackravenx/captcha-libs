import { MtCaptchaTask } from "../../../lib/Requests/Token/MtCaptchaTask";

describe("TASK", () => {
  it("To be equal to object", () => {
    const task = new MtCaptchaTask({
      proxy: "proxy",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isMtCaptchaTask: true,
      proxy: "proxy",
      type: "MtCaptchaTask",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
});
