import type { TaskTypes } from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";

export type FunCaptchaTaskBaseParams = {
  data?: string;
  funcaptchaApiJSSubdomain?: string;
  proxy?: string;
  websitePublicKey: string;
  websiteURL: string;
};

/**
 * @classdesc Base class for FunCaptchaTask
 * @class
 * @extends {BaseTask}
 * @implements {FunCaptchaTaskBaseParams}
 * {@link https://docs.capsolver.com/guide/captcha/FunCaptcha.html}
 */

export abstract class FunCaptchaTaskBase extends BaseTask implements FunCaptchaTaskBaseParams {

  /**
   * Create FunCaptchaTask
   * {@link https://docs.capsolver.com/guide/captcha/FunCaptcha.html}
   * @param {object} params -	FunCaptchaTaskParams
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.websiteURL] - Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [params.websitePublicKey] - The domain public key, rarely updated. (Ex: E8A75615-1CBA-5DFF-8031-D16BCF234E10)
   * @param {string} [param.funcaptchaApiJSSubdomain] - A special subdomain of funcaptcha.com, from which the JS captcha widget should be loaded. Most FunCaptcha installations work from shared domains.
   * @param {string} [params.data] - Additional parameter that may be required by FunCaptcha implementation. Use this property to send "blob" value as a stringified array. See example how it may look like. {"\blob":"HERE_COMES_THE_blob_VALUE"} Learn how to get FunCaptcha blob data
   */
  constructor({
    websiteURL, proxy, websitePublicKey, data, funcaptchaApiJSSubdomain
  }: FunCaptchaTaskBaseParams, type: TaskTypes) {
    super({ type });
    this.websiteURL = websiteURL;
    this.proxy = proxy;
    this.websitePublicKey = websitePublicKey;
    this.data = data;
    this.funcaptchaApiJSSubdomain = funcaptchaApiJSSubdomain;
  }

  /**
   * @type {string} websitePublicKey - The domain public key, rarely updated. (Ex: E8A75615-1CBA-5DFF-8031-D16BCF234E10)
   */
  websitePublicKey: string;

  /**
   * @type {string} funcaptchaApiJSSubdomain - A special subdomain of funcaptcha.com, from which the JS captcha widget should be loaded. Most FunCaptcha installations work from shared domains.
   */
  funcaptchaApiJSSubdomain?: string;

  /**
   * @type {string} data - Additional parameter that may be required by FunCaptcha implementation. Use this property to send "blob" value as a stringified array. See example how it may look like. {"\blob":"HERE_COMES_THE_blob_VALUE"} Learn how to get FunCaptcha blob data
   */
  data?: string;

  /**
   * @type {string} proxy - proxy
   */
  proxy?: string;

  /**
   * @type {string} websiteURL - Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)
   */
  websiteURL: string;
}