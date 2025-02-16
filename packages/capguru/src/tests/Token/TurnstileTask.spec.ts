import { TurnstileTask } from "../../lib/Request/Token/TurnstileTask";

import { expect, it, describe } from "vitest";

describe("TurnstileTask Test", () => {
  it("To be equal to object", () => {
    const task = new TurnstileTask({
      "pageurl": "some-pageurl",
      "sitekey": "some-sitekey"
    });

    expect(task).toEqual({
      "isString": true,
      "method": "turnstile",
      "pageurl": "some-pageurl",
      "sitekey": "some-sitekey"
    });
  });
});
