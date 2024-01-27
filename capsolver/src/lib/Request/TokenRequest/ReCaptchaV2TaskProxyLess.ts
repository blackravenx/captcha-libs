import type { ProxylessTaskParams } from "../_BaseTaskRequest";
import type { RecaptchaV2BaseTaskParams } from "./_RecaptchaV2TaskBase";
import { RecaptchaV2TaskBase } from "./_RecaptchaV2TaskBase";

type RecaptchaV2TaskProxylessParams = ProxylessTaskParams<Omit<RecaptchaV2BaseTaskParams, "_endpoint" | "type">>;

/**
 * @classdesc ReCaptchaV2TaskProxyLess is using the server's built-in proxy.
 * @class
 * @extends {RecaptchaV2TaskBase}
 * {@link https://docs.capsolver.com/guide/captcha/ReCaptchaV2.html}
 */
export class ReCaptchaV2TaskProxyLess extends RecaptchaV2TaskBase {

  /**
   * Create ReCaptchaV2TaskProxyLess
   * {@link https://docs.capsolver.com/guide/captcha/ReCaptchaV2.html}
   * @param {Object} params - RecaptchaV2TaskProxylessParams
   * @param {string} params.apiDomain - Domain address from which to load reCAPTCHA Enterprise. For example: http://www.google.com/, http://www.recaptcha.net/. Don't use a parameter if you don't know why it's needed.
   * @param {Object=} params.enterprisePayload - Enterprise Payload
   * @param {Object=} params.cookies - cookies
   * @param {string} params.websiteURL - Web address of the website using recaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} params.websiteKey - The domain public key, rarely updated. (Ex: b989d9e8-0d14-41sda0-870f-97b5283ba67d)
   * @param {string=} params.pageAction - some site in anchor endpoint have sa param ,it's action value
   * @param {boolean=} params.isInvisible - if recaptcha don't have pageAction, reload request body content flag have "fi"
   * @param {string} [params.userAgent] - Browser's User-Agent which is used in emulation. It is required that you use a signature of a modern browser, otherwise Google will ask you to "update your browser".
   */
  constructor(params: RecaptchaV2TaskProxylessParams) {
    super(params, "ReCaptchaV2TaskProxyLess");
  }
}