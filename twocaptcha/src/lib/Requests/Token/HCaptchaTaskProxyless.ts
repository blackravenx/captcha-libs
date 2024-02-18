import type {
  ProxylessTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { HCaptchaTaskBaseParams } from "./Base/_HCaptchaTaskBase";
import { HCaptchaTaskBase } from "./Base/_HCaptchaTaskBase";

type HCaptchaTaskProxylessParams = ProxylessTaskParams<HCaptchaTaskBaseParams>;

/**
 * Token-based method to bypass hCaptcha. The method is quite similar to reCAPTCHA V2. The token can be used on the target website inside h-captcha-response form field or passed to a callback function. It's recommended to use the userAgent value together with the token.
 * @extends {HCaptchaTaskProxylessBase}
 * {@link https://2captcha.com/api-docs/hcaptcha}
 */
export class HCaptchaTaskProxyless extends HCaptchaTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isHCaptchaTaskProxyless - Only used for correct method overloading intellisense
  */
  readonly _isHCaptchaTaskProxyless = true;

  /**
  * Create HCaptchaTaskProxyless
  * {@link https://2captcha.com/api-docs/hcaptcha}
  * @param {Object} params - HCaptchaTaskProxylessParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - hCaptcha sitekey. Can be found inside data-sitekey property of the hCaptcha div element or inside sitekey parameter of the requests to hCaptcha API
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {boolean}[params.isInvisible] - Pass true for Invisible version of hcaptcha - a case when you don't see the checkbox, but the challenge appears. Mostly used with a callback function
  */
  constructor(params: HCaptchaTaskProxylessParams) {
    super(params, "HCaptchaTaskProxyless");
  }
}
