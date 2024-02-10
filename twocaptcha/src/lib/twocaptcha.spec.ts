import { twocaptcha } from "./twocaptcha";

describe("twocaptcha", () => {
  it("should work", () => {
    expect(twocaptcha()).toEqual("twocaptcha");
  });
});
