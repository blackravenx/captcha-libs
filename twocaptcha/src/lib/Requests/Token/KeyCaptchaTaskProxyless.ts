import {
  ProxylessTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import {
  KeyCaptchaTaskBase, KeyCaptchaTaskBaseParams
} from "./_KeyCaptchaTaskBase";

type KeyCaptchaTaskProxylessParams = ProxylessTaskParams<KeyCaptchaTaskBaseParams>;

/**
 * Token-based method for automated solving of Capy Puzzle Captcha.
 * @extends {KeyCaptchaTaskBase}
 * {@link https://2captcha.com/api-docs/keycaptcha}
 */
export class KeyCaptchaTaskProxyless extends KeyCaptchaTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isKeyCaptchaTaskProxyless - Only used for correct method overloading intellisense
  */
  readonly _isKeyCaptchaTaskProxyless = true;

  /**
  * Create KeyCaptchaTaskProxyless
  * {@link https://2captcha.com/api-docs/keycaptcha}
  * @param {Object} params - KeyCaptchaTaskProxylessParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.s_s_c_user_id] - The value of s_s_c_user_id parameter found on page
  * @param {string} [params.s_s_c_session_id] - The value of s_s_c_session_id parameter found on page
  * @param {string} [params.s_s_c_web_server_sign] - The value of s_s_c_web_server_sign parameter found on page
  * @param {string} [params.s_s_c_web_server_sign2] - The value of s_s_c_web_server_sign2 parameter found on page
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor(params: KeyCaptchaTaskProxylessParams) {
    super(params, "KeyCaptchaTaskProxyless");
  }
}