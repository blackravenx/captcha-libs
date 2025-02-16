import type { ProxylessTaskParams, _IsTaskType } from "../_BaseTaskRequest";

import type { CutCaptchaTaskBaseParams } from "./Base/_CutCaptchaTask";

import { CutCaptchaTaskBase } from "./Base/_CutCaptchaTask";

type CutCaptchaTaskProxylessParams = ProxylessTaskParams<CutCaptchaTaskBaseParams>;

/**
 * Token-based method to bypass Friendly Captcha.
 * @extends {CutCaptchaTaskBase}
 * @see {@link https://2captcha.com/api-docs/cutcaptcha}
 */
export class CutCaptchaTaskProxyless extends CutCaptchaTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isCutCaptchaTask - Only used for correct method overloading intellisense
  */
  readonly _isCutCaptchaTaskProxyless: _IsTaskType["_isCutCaptchaTaskProxyless"] = true;

  /**
  * Create CutCaptchaTaskProxyless
  * @see {@link https://2captcha.com/api-docs/cutcaptcha}
  * @param {Object} params - CutCaptchaTaskProxylessParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.miseryKey] - The value of CUTCAPTCHA_MISERY_KEY variable defined on page.
  * @param {string} [params.apiKey] - The value of data-apikey attribute of iframe's body. Also the name of javascript file included on the page
  */
  constructor (params: CutCaptchaTaskProxylessParams) {
    super(params, "CutCaptchaTaskProxyless");
  }
}
