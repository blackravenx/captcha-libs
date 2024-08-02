import type {
  ProxyRequiredTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import {
  FunCaptchaTaskBase, type FunCaptchaTaskBaseParams
} from "./Base/_FunCaptchaBase";

export type FunCaptchaTaskParams = ProxyRequiredTaskParams<FunCaptchaTaskBaseParams>;

/**
 * @classdesc FunCaptchaTask is using the server's built-in proxy.
 * @class
 * @extends {BaseTask}
 * @implements {FunCaptchaTaskBaseParams}
 * {@link https://docs.capsolver.com/guide/captcha/FunCaptcha.html}
 */

export class FunCaptchaTask extends FunCaptchaTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isFunCaptchaTask - Only used for correct method overloading intellisense
  */
  readonly _isFunCaptchaTask: _IsTaskType["_isFunCaptchaTask"] = true;

  /**
   * Create FunCaptchaTask
   * {@link https://docs.capsolver.com/guide/captcha/FunCaptcha.html}
   * @param {object} params -	FunCaptchaTaskParams
   * @param {string} [params.websiteURL] - Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [params.websitePublicKey] - The domain public key, rarely updated. (Ex: E8A75615-1CBA-5DFF-8031-D16BCF234E10)
   * @param {string} [params.userAgent] - the user-agent you use to generate blob data. you need to use the user-agent we support (windows chrome browser)
   * @param {string} [params.data] - Additional parameter that may be required by FunCaptcha implementation. Use this property to send "blob" value as a stringified array. See example how it may look like. {"\blob":"HERE_COMES_THE_blob_VALUE"} Learn how to get FunCaptcha blob data
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.proxyAddress] - proxyAddress
   * @param {string} [params.proxyLogin] - proxyLogin
   * @param {string} [params.proxyPassword] - proxyPassword
   * @param {number} [params.proxyPort] - proxyPort
   * @param {string} [params.proxyType] - proxyType
   */
  constructor(params: FunCaptchaTaskParams) {
    super(params, "FunCaptchaTask");
  }
}