import type { ProxylessTaskParams, _IsTaskType } from "../_BaseTaskRequest";

import type { RecaptchaV3TaskBaseParams } from "./Base/_RecaptchaV3TaskBase";

import { RecaptchaV3TaskBase } from "./Base/_RecaptchaV3TaskBase";

type ReCaptchaV3TaskProxyLessParams = ProxylessTaskParams<RecaptchaV3TaskBaseParams>;

/**
 * @classdesc ReCaptchaV3TaskProxyLess is using the server's built-in proxy.
 * @class
 * @extends {RecaptchaV3TaskBase}
 * @see {@link https://docs.capsolver.com/guide/captcha/ReCaptchaV3.html}
 */
export class ReCaptchaV3TaskProxyLess extends RecaptchaV3TaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isReCaptchaV3TaskProxyLess - Only used for correct method overloading intellisense
  */
  readonly _isReCaptchaV3TaskProxyLess: _IsTaskType["_isReCaptchaV3TaskProxyLess"] = true;

  /**
   * Create ReCaptchaV3TaskProxyLess
   * @see {@link https://docs.capsolver.com/guide/captcha/ReCaptchaV3.html}
   * @param {Object} params - ReCaptchaV3TaskProxyLessParams
   * @param {string} [params.apiDomain] - Domain address from which to load reCAPTCHA Enterprise. For example: http://www.google.com/, http://www.recaptcha.net/. Don't use a parameter if you don't know why it's needed.
   * @param {Object=} [params.enterprisePayload] - Enterprise Payload
   * @param {Object=} [params.cookies] - cookies
   * @param {string} [params.websiteURL] - Web address of the website using recaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [params.websiteKey] - The domain public key, rarely updated. (Ex: b989d9e8-0d14-41sda0-870f-97b5283ba67d)
   * @param {string=} [params.pageAction] - Widget action value. Website owner defines what user is doing on the page through this parameter. Default value: verify
   * @param {number} [params.minScore] - Value from 0.1 to 0.9.
   */
  constructor (params: ReCaptchaV3TaskProxyLessParams) {
    super(params, "ReCaptchaV3TaskProxyLess");
  }
}
