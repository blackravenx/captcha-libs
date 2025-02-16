import type { ProxylessTaskParams, _IsTaskType } from "../_BaseTaskRequest";

import type { GeeTestV3TaskBaseParams } from "./Base/_GeeTestV3TaskBase";

import { GeeTestV3TaskBase } from "./Base/_GeeTestV3TaskBase";

type GeeTestV3TaskProxyLessParams = ProxylessTaskParams<GeeTestV3TaskBaseParams>;

/**
 * @classdesc GeeTestTask V3 this using the server's built-in proxy
 * @class
 * @extends {BaseTask}
 * @implements {GeeTestTaskBaseParams}
 * @see {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
 */

export class GeeTestV3TaskProxyLess extends GeeTestV3TaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isGeeTestTaskProxyLess - Only used for correct method overloading intellisense
  */
  readonly _isGeeTestTaskProxyLess: _IsTaskType["_isGeeTestTaskProxyLess"] = true;

  /**
   * @classdesc GeeTestTask V3 this using the server's built-in proxy
  {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
   * @param {
   * @param {string} [params.gt] - required. The domain gt field.
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.proxyAddress] - proxyAddress
   * @param {string} [params.proxyLogin] - proxyLogin
   * @param {string} [params.proxyPassword] - proxyPassword
   * @param {number} [params.proxyPort] - proxyPort
   * @param {string} [params.proxyType] - proxyType
   * @param {string} [params.websiteURL] -required. Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)} params -	GeeTestTaskBaseParams
   * @param {string} [param.geetestApiServerSubdomain] - optional. 	Special api subdomain
   */
  constructor (params: GeeTestV3TaskProxyLessParams) {
    super(params, "GeeTestTaskProxyLess");
  }
}
