import type {
  ProxylessTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import {
  GeeTestTaskBase, type GeeTestTaskBaseParams
} from "./_GeeTestTaskBase";

type GeeTestTaskProxyLessParams = ProxylessTaskParams<GeeTestTaskBaseParams>;

/**
 * @classdesc GeeTestTaskProxyLess this task type require your own proxies.
 * @class
 * @extends {BaseTask}
 * @implements {GeeTestTaskProxyLessBaseParams}
 * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
 */

export class GeeTestTaskProxyLess extends GeeTestTaskBase implements _IsTaskType {

  /**
 * @type {boolean} _isGeeTestTaskProxyLess - Only used for correct method overloading intellisense
 */
  readonly _isGeeTestTaskProxyLess = true;

  /**
   * Create GeeTestTaskProxyLess this task type require your own proxies.
   * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
   * @param {object} params -	GeeTestTaskProxyLessBaseParams
   * @param {string} [params.gt] - The domain gt field.
   * @param {string} [params.websiteURL] - Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [params.challenge] - If you need to solve Geetest V4 you must use this parameter, don't need if you need to solve GeetestV3
   * @param {string} [param.geetestApiServerSubdomain] - Special api subdomain
   * @param {string} [params.data] - Additional parameter that may be required by FunCaptcha implementation. Use this property to send "blob" value as a stringified array. See example how it may look like. {"\blob":"HERE_COMES_THE_blob_VALUE"} Learn how to get FunCaptcha blob data
   * @param {string} [params.captchaId] - If you need to solve Geetest V4 you must use this parameter, don't need if you need to solve GeetestV3
   */
  constructor(params: GeeTestTaskProxyLessParams) {
    super(params, "GeeTestTaskProxyLess");
  }
}