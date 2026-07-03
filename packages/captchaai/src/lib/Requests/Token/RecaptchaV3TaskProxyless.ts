import type { ProxylessTaskParams, _IsTaskType } from "../_BaseTaskRequest";

import type { RecaptchaV3TaskBaseParams } from "./Base/_RecaptchaV3TaskBase";

import { RecaptchaV3TaskBase } from "./Base/_RecaptchaV3TaskBase";

type RecaptchaV3TaskProxylessParams = ProxylessTaskParams<RecaptchaV3TaskBaseParams>;

/**
 * Token-based method for automated solving of reCAPTCHA V3.
 * @extends {RecaptchaV3TaskBase}
 * @see {@link https://docs.captchaai.com}
 */
export class RecaptchaV3TaskProxyless extends RecaptchaV3TaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isRecaptchaV3TaskProxyless - Only used for correct method overloading intellisense
  */
  readonly _isRecaptchaV3TaskProxyless: _IsTaskType["_isRecaptchaV3TaskProxyless"] = true;

  /**
  * Create RecaptchaV3TaskProxyless
  * @see {@link https://docs.captchaai.com}
  * @param {Object} params - RecaptchaV3TaskProxylessParams
  * @param {string} [params.pageurl] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.googlekey] - reCAPTCHA sitekey. Can be found inside data-sitekey property of the reCAPTCHA div element or inside k parameter of the requests to reCAPTHCHA API
  * @param {string} [params.domain] - Domain used to load the captcha: google.com or recaptcha.net. Default value: google.com
  * @param {string} [params.action] - Action parameter value. The value is set by website owner inside data-action property of the reCAPTCHA div element or passed inside options object of execute method call, like grecaptcha.execute('googlekey'{ action: 'myAction' })
  * @param {number} [params.min_score] - Required score value: 0.3, 0.7 or 0.9
  * @param {string} [params.version] - reCAPTCHA version. Value is v3 for reCAPTCHA V3
  */
  constructor (params: RecaptchaV3TaskProxylessParams) {
    super({
      "version": "v3",
      ...params
    }, "RecaptchaV3TaskProxyless");
  }
}
