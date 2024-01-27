import { MtCaptchaTask } from "../../../lib/Request/TokenRequest/MtCaptchaTask";

describe("TASK", () => {
  it("To be equal to object", () => {
    const task = new MtCaptchaTask({
      proxy: "proxy",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      proxy: "proxy",
      type: "MtCaptchaTask",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
});
