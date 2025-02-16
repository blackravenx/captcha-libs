import type { ProxyRequiredTaskParams, _IsTaskType } from "../_BaseTaskRequest";

import type { MtCaptchaTaskBaseParams } from "./Base/_MtCaptchaTaskBase";

import { MtCaptchaTaskBase } from "./Base/_MtCaptchaTaskBase";

type MtCaptchaTaskParams = ProxyRequiredTaskParams<MtCaptchaTaskBaseParams>;

/**
 * Token-based method for automated solving of MTCaptcha.
 * @extends {MtCaptchaTaskBase}
 * @see {@link https://2captcha.com/api-docs/mtcaptcha}
 */
export class MtCaptchaTask extends MtCaptchaTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isMtCaptchaTask - Only used for correct method overloading intellisense
  */
  readonly _isMtCaptchaTask: _IsTaskType["_isMtCaptchaTask"] = true;

  /**
  * Create MtCaptchaTask
  * @see {@link https://2captcha.com/api-docs/mtcaptcha}
  * @param {Object} params - MtCaptchaTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - The MTCaptcha sitekey value found in the page code.
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor (params: MtCaptchaTaskParams) {
    super(params, "MtCaptchaTask");
  }
}
