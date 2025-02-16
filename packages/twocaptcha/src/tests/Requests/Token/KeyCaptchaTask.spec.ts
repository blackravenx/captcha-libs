import { KeyCaptchaTask } from "../../../lib/Requests/Token/KeyCaptchaTask";

import { expect, it, describe } from "vitest";

describe("KeyCaptchaTask", () => {
  it("To be equal to object", () => {
    const task = new KeyCaptchaTask({
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "s_s_c_session_id": "some-s_s_c_session_id",
      "s_s_c_user_id": 1,
      "s_s_c_web_server_sign": "some-s_s_c_web_server_sign",
      "s_s_c_web_server_sign2": "some-s_s_c_web_server_sign2",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isKeyCaptchaTask": true,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "s_s_c_session_id": "some-s_s_c_session_id",
      "s_s_c_user_id": 1,
      "s_s_c_web_server_sign": "some-s_s_c_web_server_sign",
      "s_s_c_web_server_sign2": "some-s_s_c_web_server_sign2",
      "type": "KeyCaptchaTask",
      "websiteURL": "some-websiteURL"
    });
  });
});
