import type {
  ProxyCredentials, ProxyTypes, TaskTypes
} from "../../_BaseTaskRequest";
import { BaseTask } from "../../_BaseTaskRequest";

export type KeyCaptchaTaskBaseParams = Partial<ProxyCredentials> & {
  s_s_c_session_id: string;
  s_s_c_user_id: number;
  s_s_c_web_server_sign: string;
  s_s_c_web_server_sign2: string;
  websiteURL: string;
};

/**
 * Base class for KeyCaptchaTask
 * @extends {BaseTask}
 * {@link https://2captcha.com/api-docs/keycaptcha}
 */
export abstract class KeyCaptchaTaskBase extends BaseTask implements KeyCaptchaTaskBaseParams {

  /**
   * @type {string} websiteURL - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  websiteURL: string;

  /**
   * @type {number} s_s_c_user_id - The value of s_s_c_user_id parameter found on page
   */
  s_s_c_user_id: number;

  /**
   * @type {string} s_s_c_session_id - The value of s_s_c_session_id parameter found on page
   */
  s_s_c_session_id: string;

  /**
   * @type {string} s_s_c_web_server_sign - The value of s_s_c_web_server_sign parameter found on page
   */
  s_s_c_web_server_sign: string;

  /**
   * @type {string} s_s_c_web_server_sign2 - The value of s_s_c_web_server_sign2 parameter found on page
   */
  s_s_c_web_server_sign2: string;

  proxyAddress?: string;
  proxyLogin?: string;
  proxyPassword?: string;
  proxyPort?: number;
  proxyType?: ProxyTypes;

  /**
  * Create KeyCaptchaTaskBase
  * {@link https://2captcha.com/api-docs/keycaptcha}
  * @param {Object} params - KeyCaptchaTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {number} [params.s_s_c_user_id] - The value of s_s_c_user_id parameter found on page
  * @param {string} [params.s_s_c_session_id] - The value of s_s_c_session_id parameter found on page
  * @param {string} [params.s_s_c_web_server_sign] - The value of s_s_c_web_server_sign parameter found on page
  * @param {string} [params.s_s_c_web_server_sign2] - The value of s_s_c_web_server_sign2 parameter found on page
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor({
    websiteURL, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword, s_s_c_session_id, s_s_c_user_id,
    s_s_c_web_server_sign, s_s_c_web_server_sign2
  }: KeyCaptchaTaskBaseParams, type: TaskTypes) {
    super({ type });
    this.websiteURL = websiteURL;
    this.proxyAddress = proxyAddress;
    this.proxyLogin = proxyLogin;
    this.proxyPassword = proxyPassword;
    this.proxyPort = proxyPort;
    this.proxyType = proxyType;
    this.s_s_c_session_id = s_s_c_session_id;
    this.s_s_c_user_id = s_s_c_user_id;
    this.s_s_c_web_server_sign = s_s_c_web_server_sign;
    this.s_s_c_web_server_sign2 = s_s_c_web_server_sign2;
  }
}