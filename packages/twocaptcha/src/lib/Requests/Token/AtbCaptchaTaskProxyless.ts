import type { ProxylessTaskParams, _IsTaskType } from "../_BaseTaskRequest";

import type { AtbCaptchaTaskBaseParams } from "./Base/_AtbCaptchaTaskBase";

import { AtbCaptchaTaskBase } from "./Base/_AtbCaptchaTaskBase";

type AtbCaptchaTaskProxylessParams = ProxylessTaskParams<AtbCaptchaTaskBaseParams>;

/**
 * Token-based method to bypass Tencent captcha.
 * @extends {AtbCaptchaTaskProxylessBase}
 * @see {@link https://2captcha.com/api-docs/atb-captcha}
 */
export class AtbCaptchaTaskProxyless extends AtbCaptchaTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isAtbCaptchaTaskProxyless - Only used for correct method overloading intellisense
  */
  readonly _isAtbCaptchaTaskProxyless: _IsTaskType["_isAtbCaptchaTaskProxyless"] = true;

  /**
  * Create AtbCaptchaTaskProxyless
  * @see {@link https://2captcha.com/api-docs/atb-captcha}
  * @param {Object} params - AtbCaptchaTaskProxylessParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.appId] - The value of appId parameter in the website source code.
  * @param {string} [params.apiServer] - The value of apiServer parameter in the website source code.
  */
  constructor (params: AtbCaptchaTaskProxylessParams) {
    super(params, "AtbCaptchaTaskProxyless");
  }
}
