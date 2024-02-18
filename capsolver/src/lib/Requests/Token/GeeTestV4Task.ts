import type {
  ProxyRequiredTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { GeeTestV4TaskBaseParams } from "./Base/_GeeTestV4TaskBase";
import { GeeTestV4TaskBase } from "./Base/_GeeTestV4TaskBase";

type GeeTestV4TaskParams = ProxyRequiredTaskParams<GeeTestV4TaskBaseParams>;

/**
 * @classdesc GeeTestTask V4 this task type require your own proxies.
 * @class
 * @extends {GeeTestTaskBase}
 * @implements {GeeTestTaskBaseParams}
 * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
 */

export class GeeTestV4Task extends GeeTestV4TaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isGeeTestTask - Only used for correct method overloading intellisense
  */
  readonly _isGeeTestTask: _IsTaskType["_isGeeTestTask"] = true;

  /**
   * @classdesc GeeTestTask V4 this task type require your own proxies.
   * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
   * @param {object} params -	GeeTestTaskBaseParams
   * @param {string} [params.captchaId] - required. captchaId
   * @param {string} [params.websiteURL] -required. Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [param.geetestApiServerSubdomain] - optional. A special subdomain of funcaptcha.com, from which the JS captcha widget should be loaded. Most FunCaptcha installations work from shared domains.
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.proxyAddress] - proxyAddress
   * @param {string} [params.proxyLogin] - proxyLogin
   * @param {string} [params.proxyPassword] - proxyPassword
   * @param {number} [params.proxyPort] - proxyPort
   * @param {string} [params.proxyType] - proxyType
   */
  constructor(params: GeeTestV4TaskParams) {
    super(params, "GeeTestTask");
  }
}
