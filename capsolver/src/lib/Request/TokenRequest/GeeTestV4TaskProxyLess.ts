import type { ProxylessTaskParams } from "../_BaseTaskRequest";
import {
  GeeTestTaskBase, type GeeTestTaskBaseParams
} from "./_GeeTestTaskBase";

type GeeTestV4TaskProxyLessParams = ProxylessTaskParams<Omit<GeeTestTaskBaseParams, "challenge" | "gt" | "type">> & {
  captchaId: string;
};

/**
 * @classdesc GeeTestTask V4 this task type require your own proxies.
 * @class
 * @extends {GeeTestTaskBase}
 * @implements {GeeTestTaskBaseParams}
 * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
 */

export class GeeTestV4TaskProxyLess extends GeeTestTaskBase {

  /**
   * @classdesc GeeTestTask V4 this task type require your own proxies.
   * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
   * @param {object} params -	GeeTestTaskBaseParams
   * @param {string} [params.gt] - required. The domain gt field.
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.websiteURL] -required. Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [param.geetestApiServerSubdomain] - optional. A special subdomain of funcaptcha.com, from which the JS captcha widget should be loaded. Most FunCaptcha installations work from shared domains.
   */
  constructor(params: GeeTestV4TaskProxyLessParams) {
    super(params, "GeeTestTaskProxyLess");
  }
}
