import type { ProxylessTaskParams, _IsTaskType } from "../_BaseTaskRequest";

import type { MtCaptchaTaskBaseParams } from "./Base/_MtCaptchaTaskBase";

import { MtCaptchaTaskBase } from "./Base/_MtCaptchaTaskBase";

type MtCaptchaTaskProxylessParams = ProxylessTaskParams<MtCaptchaTaskBaseParams>;

/**
 * Token-based method for automated solving of MTCaptcha.
 * @extends {MtCaptchaTaskBase}
 * @see {@link https://2captcha.com/api-docs/mtcaptcha}
 */
export class MtCaptchaTaskProxyless extends MtCaptchaTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isMtCaptchaTaskProxyless - Only used for correct method overloading intellisense
  */
  readonly _isMtCaptchaTaskProxyless: _IsTaskType["_isMtCaptchaTaskProxyless"] = true;

  /**
  * Create MtCaptchaTaskProxyless
  * @see {@link https://2captcha.com/api-docs/mtcaptcha}
  * @param {Object} params - MtCaptchaTaskProxylessParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - The MTCaptcha sitekey value found in the page code.
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  */
  constructor (params: MtCaptchaTaskProxylessParams) {
    super(params, "MtCaptchaTaskProxyless");
  }
}
