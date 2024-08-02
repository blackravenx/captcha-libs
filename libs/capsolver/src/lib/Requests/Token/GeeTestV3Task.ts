import type {
  ProxyRequiredTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { GeeTestV3TaskBaseParams } from "./Base/_GeeTestV3TaskBase";
import { GeeTestV3TaskBase } from "./Base/_GeeTestV3TaskBase";

type GeeTestV3TaskParams = ProxyRequiredTaskParams<GeeTestV3TaskBaseParams>;

/**
 * @classdesc GeeTestTask V3 this task type require your own proxies.
 * @class
 * @extends {BaseTask}
 * @implements {GeeTestTaskBaseParams}
 * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
 */

export class GeeTestV3Task extends GeeTestV3TaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isGeeTestTask - Only used for correct method overloading intellisense
  */
  readonly _isGeeTestTask: _IsTaskType["_isGeeTestTask"] = true;

  /**
   * Create GeeTestTask V3, this task type require your own proxies.
   * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
   * @param {object} params -	GeeTestTaskBaseParams
   * @param {string} [params.gt] - required. The domain gt field.
   * @param {string} [params.challenge] - required. If you need to solve Geetest V3 you must use this parameter
   * @param {string} [params.websiteURL] -required. Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [param.geetestApiServerSubdomain] - optional. Special api subdomain
   * @param {string} [param.userAgent] - Browser userAgent
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.proxyAddress] - proxyAddress
   * @param {string} [params.proxyLogin] - proxyLogin
   * @param {string} [params.proxyPassword] - proxyPassword
   * @param {number} [params.proxyPort] - proxyPort
   * @param {string} [params.proxyType] - proxyType
   */
  constructor(params: GeeTestV3TaskParams) {
    super(params, "GeeTestTask");
  }
}
