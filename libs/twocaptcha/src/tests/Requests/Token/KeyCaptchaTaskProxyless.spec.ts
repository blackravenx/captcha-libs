import { KeyCaptchaTaskProxyless } from "../../../lib/Requests/Token/KeyCaptchaTaskProxyless";

describe("KeyCaptchaTaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new KeyCaptchaTaskProxyless({
      s_s_c_session_id: "some-s_s_c_session_id",
      s_s_c_user_id: 1,
      s_s_c_web_server_sign: "some-s_s_c_web_server_sign",
      s_s_c_web_server_sign2: "some-s_s_c_web_server_sign2",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isKeyCaptchaTaskProxyless: true,
      proxyAddress: undefined,
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: undefined,
      proxyType: undefined,
      s_s_c_session_id: "some-s_s_c_session_id",
      s_s_c_user_id: 1,
      s_s_c_web_server_sign: "some-s_s_c_web_server_sign",
      s_s_c_web_server_sign2: "some-s_s_c_web_server_sign2",
      type: "KeyCaptchaTaskProxyless",
      websiteURL: "some-websiteURL"
    });
  });
});
