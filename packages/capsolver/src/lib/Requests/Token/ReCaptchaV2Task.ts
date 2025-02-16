import type { ProxyRequiredTaskParams, _IsTaskType } from "../_BaseTaskRequest";

import type { RecaptchaV2TaskBaseParams } from "./Base/_RecaptchaV2TaskBase";

import { RecaptchaV2TaskBase } from "./Base/_RecaptchaV2TaskBase";

type RecaptchaV2TaskParams = ProxyRequiredTaskParams<RecaptchaV2TaskBaseParams>;

/**
 * @classdesc ReCaptchaV2Task this task type require your own proxies.
 * @class
 * @extends {RecaptchaV2TaskBase}
 * @see {@link https://docs.capsolver.com/guide/captcha/ReCaptchaV2.html}
 */
export class ReCaptchaV2Task extends RecaptchaV2TaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isReCaptchaV2Task - Only used for correct method overloading intellisense
  */
  readonly _isReCaptchaV2Task: _IsTaskType["_isReCaptchaV2Task"] = true;

  /**
   * Create ReCaptchaV2Task
   * @see {@link https://docs.capsolver.com/guide/captcha/ReCaptchaV2.html}
   * @param {Object} params - RecaptchaV2TaskParams
   * @param {string} [params.apiDomain] - Domain address from which to load reCAPTCHA Enterprise. For example: http://www.google.com/, http://www.recaptcha.net/. Don't use a parameter if you don't know why it's needed.
   * @param {Object=} [params.enterprisePayload] - Enterprise Payload
   * @param {Object=} [params.cookies] - cookies
   * @param {string} [params.websiteURL] - Web address of the website using recaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [params.websiteKey] - The domain public key, rarely updated. (Ex: b989d9e8-0d14-41sda0-870f-97b5283ba67d)
   * @param {string=} [params.pageAction] - some site in anchor endpoint have sa param ,it's action value
   * @param {boolean=} [params.isInvisible] - if recaptcha don't have pageAction, reload request body content flag have "fi"
   * @param {string} [params.userAgent] - Browser's User-Agent which is used in emulation. It is required that you use a signature of a modern browser, otherwise Google will ask you to "update your browser".
   * @param {string} [params.proxy] - proxy
   * @param {string} [params.proxyAddress] - proxyAddress
   * @param {string} [params.proxyLogin] - proxyLogin
   * @param {string} [params.proxyPassword] - proxyPassword
   * @param {string} [params.proxyPort] - proxyPort
   * @param {string} [params.proxyType] - proxyType
   */
  constructor (params: RecaptchaV2TaskParams) {
    super(params, "ReCaptchaV2Task");
  }
}
