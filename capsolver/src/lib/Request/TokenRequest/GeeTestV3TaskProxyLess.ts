import type { ProxylessTaskParams } from "../_BaseTaskRequest";
import {
  GeeTestV3TaskBase, GeeTestV3TaskBaseParams
} from "./_GeeTestV3TaskBase";

type GeeTestV3TaskProxyLessParams = ProxylessTaskParams<GeeTestV3TaskBaseParams>;

/**
 * @classdesc GeeTestTask V3 this using the server's built-in proxy
 * @class
 * @extends {BaseTask}
 * @implements {GeeTestTaskBaseParams}
 * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
 */

export class GeeTestV3TaskProxyLess extends GeeTestV3TaskBase {

  /**
   * @classdesc GeeTestTask V3 this using the server's built-in proxy
  {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
   * @param {
   * @param {string} [params.gt] - required. The domain gt field.
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.websiteURL] -required. Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)} params -	GeeTestTaskBaseParams
   * @param {string} [param.geetestApiServerSubdomain] - optional. 	Special api subdomain
   */
  constructor(params: GeeTestV3TaskProxyLessParams) {
    super(params, "GeeTestTaskProxyLess");
  }
}
