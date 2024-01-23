import type { ProxyRequiredTaskParams } from "../_BaseTaskRequest";
import {
  GeeTestTaskBase, type GeeTestTaskBaseParams
} from "./_GeeTestTaskBase";

type GeeTestV3TaskParams = ProxyRequiredTaskParams<Omit<GeeTestTaskBaseParams, "captchaId" | "type">> & {
  challenge: string;
  gt: string;
};

/**
 * @classdesc GeeTestTask V3 this task type require your own proxies.
 * @class
 * @extends {BaseTask}
 * @implements {GeeTestTaskBaseParams}
 * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
 */

export class GeeTestV3Task extends GeeTestTaskBase {

  /**
   * @classdesc GeeTestTask V3 this task type require your own proxies.
   * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
   * @param {object} params -	GeeTestTaskBaseParams
   * @param {string} [params.gt] - required. The domain gt field.
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.websiteURL] -required. Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [param.geetestApiServerSubdomain] - optional. Special api subdomain
   * @param {string} [param.userAgent] - Browser userAgent
   */
  constructor(params: GeeTestV3TaskParams) {
    super(params, "GeeTestTask");
  }
}
