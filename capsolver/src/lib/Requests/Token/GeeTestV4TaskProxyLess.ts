import type {
  ProxylessTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import {
  GeeTestV4TaskBase, GeeTestV4TaskBaseParams
} from "./_GeeTestV4TaskBase";

type GeeTestV4TaskProxyLessParams = ProxylessTaskParams<GeeTestV4TaskBaseParams>;

/**
 * @classdesc GeeTestTask V4 this task type require your own proxies.
 * @class
 * @extends {GeeTestTaskBase}
 * @implements {GeeTestTaskBaseParams}
 * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
 */

export class GeeTestV4TaskProxyLess extends GeeTestV4TaskBase implements _IsTaskType {

  /**
 * @type {boolean} _isGeeTestTaskProxyLess - Only used for correct method overloading intellisense
 */
  readonly _isGeeTestTaskProxyLess = true;

  /**
   * @classdesc GeeTestTask V4 this task type require your own proxies.
   * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
   * @param {object} params -	GeeTestTaskBaseParams
   * @param {string} [params.captchaId] - required. captchaId
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.websiteURL] -required. Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [param.geetestApiServerSubdomain] - optional. A special subdomain of funcaptcha.com, from which the JS captcha widget should be loaded. Most FunCaptcha installations work from shared domains.
   */
  constructor(params: GeeTestV4TaskProxyLessParams) {
    super(params, "GeeTestTaskProxyLess");
  }
}
