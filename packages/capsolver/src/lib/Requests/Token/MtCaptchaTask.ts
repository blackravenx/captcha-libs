import type { ProxyRequiredTaskParams, _IsTaskType } from "../_BaseTaskRequest";

import type { MtCaptchaTaskBaseParams } from "./Base/_MtCaptchaTaskBase";

import { MtCaptchaTaskBase } from "./Base/_MtCaptchaTaskBase";

type MtCaptchaTaskParams = ProxyRequiredTaskParams<MtCaptchaTaskBaseParams>;

/**
 * @classdesc MtCaptchaTask this task type require your own proxies
 * @class
 * @extends {MtCaptchaTaskBase}
 * @see {@link https://docs.capsolver.com/guide/captcha/MtCaptcha.html}
 */
export class MtCaptchaTask extends MtCaptchaTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isMtCaptchaTask - Only used for correct method overloading intellisense
  */
  readonly _isMtCaptchaTask: _IsTaskType["_isMtCaptchaTask"] = true;

  /**
   * Create MtCaptchaTaskBase
   * @see {@link https://docs.capsolver.com/guide/captcha/MtCaptcha.html}
   * @param {object} params -	MtCaptchaTaskBaseParams
   * @param {string} [params.websiteURL] -	The website url
   * @param {string} [params.websiteKey] - The domain public key, rarely updated. (Ex: sk=MTPublic-xxx public key)
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.proxyAddress] - proxyAddress
   * @param {string} [params.proxyLogin] - proxyLogin
   * @param {string} [params.proxyPassword] - proxyPassword
   * @param {number} [params.proxyPort] - proxyPort
   * @param {string} [params.proxyType] - proxyType
   */
  constructor (params: MtCaptchaTaskParams) {
    super(params, "MtCaptchaTask");
  }
}
