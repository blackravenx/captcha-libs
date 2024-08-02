import type {
  ProxyRequiredTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { AtbCaptchaTaskBaseParams } from "./Base/_AtbCaptchaTaskBase";
import { AtbCaptchaTaskBase } from "./Base/_AtbCaptchaTaskBase";

type AtbCaptchaTaskParams = ProxyRequiredTaskParams<AtbCaptchaTaskBaseParams>;

/**
 * Token-based method to bypass Tencent captcha.
 * @extends {AtbCaptchaTaskBase}
 * {@link https://2captcha.com/api-docs/atb-captcha}
 */
export class AtbCaptchaTask extends AtbCaptchaTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isAtbCaptchaTask - Only used for correct method overloading intellisense
  */
  readonly _isAtbCaptchaTask: _IsTaskType["_isAtbCaptchaTask"] = true;

  /**
  * Create AtbCaptchaTask
  * {@link https://2captcha.com/api-docs/atb-captcha}
  * @param {Object} params - AtbCaptchaTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.appId] - The value of appId parameter in the website source code.
  * @param {string} [params.apiServer] - The value of apiServer parameter in the website source code.
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor(params: AtbCaptchaTaskParams) {
    super(params, "AtbCaptchaTask");
  }
}