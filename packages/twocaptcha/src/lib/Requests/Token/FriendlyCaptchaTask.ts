import type { ProxyRequiredTaskParams, _IsTaskType } from "../_BaseTaskRequest";

import type { FriendlyCaptchaTaskBaseParams } from "./Base/_FriendlyCaptchaTask";

import { FriendlyCaptchaTaskBase } from "./Base/_FriendlyCaptchaTask";

type FriendlyCaptchaTaskParams = ProxyRequiredTaskParams<FriendlyCaptchaTaskBaseParams>;

/**
 * Token-based method to bypass Friendly Captcha.
 * @extends {FriendlyCaptchaTaskBase}
 * @see {@link https://2captcha.com/api-docs/friendly-captcha}
 */
export class FriendlyCaptchaTask extends FriendlyCaptchaTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isFriendlyCaptchaTask - Only used for correct method overloading intellisense
  */
  readonly _isFriendlyCaptchaTask: _IsTaskType["_isFriendlyCaptchaTask"] = true;

  /**
  * Create FriendlyCaptchaTask
  * @see {@link https://2captcha.com/api-docs/friendly-captcha}
  * @param {Object} params - FriendlyCaptchaTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - Capy Puzzle Captcha captchakey.
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor (params: FriendlyCaptchaTaskParams) {
    super(params, "FriendlyCaptchaTask");
  }
}
