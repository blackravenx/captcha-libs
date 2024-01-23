import type { ProxylessTaskParams } from "../_BaseTaskRequest";
import type { RecaptchaV3TaskBaseParams } from "./_RecaptchaV3Base";
import { RecaptchaV3TaskBase } from "./_RecaptchaV3Base";

type ReCaptchaV3M1TaskProxyLessParams = ProxylessTaskParams<Omit<RecaptchaV3TaskBaseParams, "type">>;

/**
 * @classdesc ReCaptchaV3M1TaskProxyLess built-in with high-quality proxies, the score can remain stable at 0.7 or above.
 * @class
 * @extends {RecaptchaV3TaskBase}
 * {@link https://docs.capsolver.com/guide/captcha/ReCaptchaV3.html}
 */
export class ReCaptchaV3M1TaskProxyLess extends RecaptchaV3TaskBase {

  /**
   * Create ReCaptchaV3Task
   * {@link https://docs.capsolver.com/guide/captcha/ReCaptchaV3.html}
   * @param {Object} params - ReCaptchaV3TaskParams
   * @param {string} [params.apiDomain] - Domain address from which to load reCAPTCHA Enterprise. For example: http://www.google.com/, http://www.recaptcha.net/. Don't use a parameter if you don't know why it's needed.
   * @param {Object=} [params.enterprisePayload] - Enterprise Payload
   * @param {Object=} [params.cookies] - cookies
   * @param {string} [params.websiteURL] - Web address of the website using recaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [params.websiteKey] - The domain public key, rarely updated. (Ex: b989d9e8-0d14-41sda0-870f-97b5283ba67d)
   * @param {string=} [params.pageAction] - Widget action value. Website owner defines what user is doing on the page through this parameter. Default value: verify
   * @param {number} [params.minScore] - Value from 0.1 to 0.9.
   */
  constructor(params: ReCaptchaV3M1TaskProxyLessParams) {
    super(params, "ReCaptchaV3M1TaskProxyLess");
  }
}
