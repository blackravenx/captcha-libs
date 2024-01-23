import {
  FunCaptchaTaskBase, type FunCaptchaTaskBaseParams
} from "./_FunCaptchaBase";

export type FunCaptchaTaskProxyLessParams = Omit<FunCaptchaTaskBaseParams, "type">;

/**
 * @classdesc FunCaptchaTaskProxyLess is using the server's built-in proxy.
 * @class
 * @extends {BaseTask}
 * @implements {FunCaptchaTaskBaseParams}
 * {@link https://docs.capsolver.com/guide/captcha/FunCaptcha.html}
 */

export class FunCaptchaTaskProxyLess extends FunCaptchaTaskBase {

  /**
   * Create FunCaptchaTask
   * {@link https://docs.capsolver.com/guide/captcha/FunCaptcha.html}
   * @param {object} params -	FunCaptchaTaskProxyLessParams
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.websiteURL] - Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [params.websitePublicKey] - The domain public key, rarely updated. (Ex: E8A75615-1CBA-5DFF-8031-D16BCF234E10)
   * @param {string} [param.funcaptchaApiJSSubdomain] - A special subdomain of funcaptcha.com, from which the JS captcha widget should be loaded. Most FunCaptcha installations work from shared domains.
   * @param {string} [params.data] - Additional parameter that may be required by FunCaptcha implementation. Use this property to send "blob" value as a stringified array. See example how it may look like. {"\blob":"HERE_COMES_THE_blob_VALUE"} Learn how to get FunCaptcha blob data
   */
  constructor(params: FunCaptchaTaskProxyLessParams) {
    super(params, "FunCaptchaTaskProxyLess");
  }
}