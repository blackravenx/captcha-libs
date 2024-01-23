import type { ProxyRequiredTaskParams } from "../_BaseTaskRequest";
import {
  GeeTestTaskBase, type GeeTestTaskBaseParams
} from "./_GeeTestTaskBase";

 type GeeTestTaskParams = ProxyRequiredTaskParams<Omit<GeeTestTaskBaseParams, "type">>;

/**
 * @classdesc GeeTestTask this task type require your own proxies.
 * @class
 * @extends {BaseTask}
 * @implements {GeeTestTaskBaseParams}
 * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
 */

export class GeeTestTask extends GeeTestTaskBase {

  /**
   * Create GeeTestTask this task type require your own proxies.
   * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
   * @param {object} params -	GeeTestTaskBaseParams
   * @param {string} [params.gt] - The domain gt field.
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.websiteURL] - Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [params.challenge] - If you need to solve Geetest V4 you must use this parameter, don't need if you need to solve GeetestV3
   * @param {string} [param.geetestApiServerSubdomain] - A special subdomain of funcaptcha.com, from which the JS captcha widget should be loaded. Most FunCaptcha installations work from shared domains.
   * @param {string} [params.data] - Additional parameter that may be required by FunCaptcha implementation. Use this property to send "blob" value as a stringified array. See example how it may look like. {"\blob":"HERE_COMES_THE_blob_VALUE"} Learn how to get FunCaptcha blob data
   * @param {string} [params.captchaId] - If you need to solve Geetest V4 you must use this parameter, don't need if you need to solve GeetestV3
   */
  constructor(params: GeeTestTaskParams) {
    super(params, "GeeTestTask");
  }
}