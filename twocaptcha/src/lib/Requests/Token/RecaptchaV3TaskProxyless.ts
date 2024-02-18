import type {
  ProxylessTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { RecaptchaV3TaskBaseParams } from "./Base/_RecaptchaV3TaskBase";
import { RecaptchaV3TaskBase } from "./Base/_RecaptchaV3TaskBase";

type RecaptchaV3TaskProxylessParams = ProxylessTaskParams<RecaptchaV3TaskBaseParams>;

/**
 * Token-based method for automated solving of reCAPTCHA V3.
 * @extends {RecaptchaV3TaskBase}
 * {@link https://3captcha.com/api-docs/recaptcha-v3}
 */
export class RecaptchaV3TaskProxyless extends RecaptchaV3TaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isRecaptchaV3TaskProxyless - Only used for correct method overloading intellisense
  */
  readonly _isRecaptchaV3TaskProxyless = true;

  /**
  * Create RecaptchaV3TaskProxyless
  * {@link https://2captcha.com/api-docs/recaptcha-v3}
  * @param {Object} params - RecaptchaV3TaskProxylessParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - reCAPTCHA sitekey. Can be found inside data-sitekey property of the reCAPTCHA div element or inside k parameter of the requests to reCAPTHCHA API. You can also use the script to find the value
  *
  * @param {string} [params.apiDomain] - Domain used to load the captcha: google.com or recaptcha.net. Default value: google.com
  * @param {string} [params.pageAction] - Action parameter value. The value is set by website owner inside data-action property of the reCAPTCHA div element or passed inside options object of execute method call, like grecaptcha.execute('websiteKey'{ action: 'myAction' })
  * @param {number} [params.minScore] - Required score value:
  */
  constructor(params: RecaptchaV3TaskProxylessParams) {
    super(params, "RecaptchaV3TaskProxyless");
  }
}