import { AudioTask } from "../../../lib/Requests/Recognition/AudioTask";

import { expect, it, describe } from "vitest";

describe("AudioTask", () => {
  it("To be equal to object", () => {
    const task = new AudioTask({
      "body": "some-body",
      "lang": "en"
    });

    expect(task).toEqual({
      "_isAudioTask": true,
      "body": "some-body",
      "lang": "en",
      "type": "AudioTask"
    });
  });
});
