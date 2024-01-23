import type { ProxyRequiredTaskParams } from "../_BaseTaskRequest";
import {
  GeeTestTaskBase, type GeeTestTaskBaseParams
} from "./_GeeTestTaskBase";

type GeeTestV4TaskParams = ProxyRequiredTaskParams<Omit<GeeTestTaskBaseParams, "challenge" | "gt" | "type">> & {
  captchaId: string;
};

/**
 * @classdesc GeeTestTask V4 this task type require your own proxies.
 * @class
 * @extends {GeeTestTaskBase}
 * @implements {GeeTestTaskBaseParams}
 * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
 */

export class GeeTestV4Task extends GeeTestTaskBase {

  /**
   * @classdesc GeeTestTask V4 this task type require your own proxies.
   * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
   * @param {object} params -	GeeTestTaskBaseParams
   * @param {string} [params.gt] - required. The domain gt field.
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.websiteURL] -required. Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [param.geetestApiServerSubdomain] - optional. A special subdomain of funcaptcha.com, from which the JS captcha widget should be loaded. Most FunCaptcha installations work from shared domains.
   */
  constructor(params: GeeTestV4TaskParams) {
    super(params, "GeeTestTask");
  }
}
