import type { ProxyRequiredTaskParams, _IsTaskType } from "../_BaseTaskRequest";

import type { HCaptchaTaskBaseParams } from "./Base/_HCaptchaTaskBase";

import { HCaptchaTaskBase } from "./Base/_HCaptchaTaskBase";

type HCaptchaTaskParams = ProxyRequiredTaskParams<HCaptchaTaskBaseParams>;

/**
 * @classdesc HCaptchaTask this task type require your own proxies
 * @class
 * @deprecated deleted from service support
 * @see {@link https://docs.capsolver.com/guide/captcha/HCaptcha.html}
 * @extends {BaseTask}
 * @implements {HCaptchaTaskBaseParams}
 */
export class HCaptchaTask extends HCaptchaTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isHCaptchaTask - Only used for correct method overloading intellisense
  */
  readonly _isHCaptchaTask: _IsTaskType["_isHCaptchaTask"] = true;

  /**
   * Create HCaptchaTask this task type require your own proxies
   * @see {@link https://docs.capsolver.com/guide/captcha/HCaptcha.html}
   * @param {Object} params - HCaptchaTaskParams
   * @param {Object=} params.enterprisePayload - Enterprise Payload
   * @param {string=} params.proxy - proxy
   * @param {string} [params.proxyAddress] - proxyAddress
   * @param {string} [params.proxyLogin] - proxyLogin
   * @param {string} [params.proxyPassword] - proxyPassword
   * @param {number} [params.proxyPort] - proxyPort
   * @param {string} [params.proxyType] - proxyType
   * @param {string} params.websiteURL - Web address of the website using recaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} params.websiteKey - The domain public key, rarely updated. (Ex: b989d9e8-0d14-41sda0-870f-97b5283ba67d)
   * @param {boolean=} params.isInvisible - if recaptcha don't have pageAction, reload request body content flag have "fi"
   * @param {string} [params.userAgent] - Browser's User-Agent which is used in emulation. It is required that you use a signature of a modern browser, otherwise Google will ask you to "update your browser".
   */
  constructor (params: HCaptchaTaskParams) {
    super(params, "HCaptchaTask");
  }
}
