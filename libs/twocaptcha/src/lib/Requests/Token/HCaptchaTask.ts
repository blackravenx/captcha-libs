import type {
  ProxyRequiredTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { HCaptchaTaskBaseParams } from "./Base/_HCaptchaTaskBase";
import { HCaptchaTaskBase } from "./Base/_HCaptchaTaskBase";

type HCaptchaTaskParams = ProxyRequiredTaskParams<HCaptchaTaskBaseParams>;

/**
 * Token-based method to bypass hCaptcha. The method is quite similar to reCAPTCHA V2. The token can be used on the target website inside h-captcha-response form field or passed to a callback function. It's recommended to use the userAgent value together with the token.
 * @extends {HCaptchaTaskBase}
 * {@link https://2captcha.com/api-docs/hcaptcha}
 */
export class HCaptchaTask extends HCaptchaTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isHCaptchaTask - Only used for correct method overloading intellisense
  */
  readonly _isHCaptchaTask: _IsTaskType["_isHCaptchaTask"] = true;

  /**
  * Create HCaptchaTask
  * {@link https://2captcha.com/api-docs/hcaptcha}
  * @param {Object} params - HCaptchaTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - hCaptcha sitekey. Can be found inside data-sitekey property of the hCaptcha div element or inside sitekey parameter of the requests to hCaptcha API
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {boolean}[params.isInvisible] - Pass true for Invisible version of hcaptcha - a case when you don't see the checkbox, but the challenge appears. Mostly used with a callback function
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor(params: HCaptchaTaskParams) {
    super(params, "HCaptchaTask");
  }
}