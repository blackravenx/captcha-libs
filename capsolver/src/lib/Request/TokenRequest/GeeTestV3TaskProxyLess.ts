import type { ProxylessTaskParams } from "../_BaseTaskRequest";
import {
  GeeTestTaskBase, type GeeTestTaskBaseParams
} from "./_GeeTestTaskBase";

type GeeTestV3TaskProxyLessParams = ProxylessTaskParams<Omit<GeeTestTaskBaseParams, "captchaId" | "type">> & {
  challenge: string;
};

/**
 * @classdesc GeeTestTask V3 this using the server's built-in proxy
 * @class
 * @extends {BaseTask}
 * @implements {GeeTestTaskBaseParams}
 * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
 */

export class GeeTestV3TaskProxyLess extends GeeTestTaskBase {

  /**
   * @classdesc GeeTestTask V3 this using the server's built-in proxy
   * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
   * @param {object} params -	GeeTestTaskBaseParams
   * @param {string} [params.gt] - required. The domain gt field.
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.websiteURL] -required. Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [param.geetestApiServerSubdomain] - optional. 	Special api subdomain
   * @param {string} userAgent - Browser userAgent
   */
  constructor(params: GeeTestV3TaskProxyLessParams) {
    super(params, "GeeTestTaskProxyLess");
  }
}
