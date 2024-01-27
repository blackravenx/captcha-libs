import type { TaskTypes } from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";

export type GeeTestV4TaskBaseParams = {
  captchaId: string;
  geetestApiServerSubdomain?: string;
  proxy?: string;
  userAgent?: string;
  websiteURL: string;
};

/**
 * @classdesc Base class for GeeTestTask
 * @class
 * @extends {BaseTask}
 * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
 */

export abstract class GeeTestV4TaskBase extends BaseTask implements GeeTestV4TaskBaseParams {

  /**
   * GeeTestTask V4 this task type require your own proxies.
   * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
   * @param {object} params -	GeeTestTaskBaseParams
   * @param {string} [params.gt] - required. The domain gt field.
   * @param {string} [params.captchaId] - required. If you need to solve Geetest V4 you must use this parameter.
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.websiteURL] -required. Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [param.geetestApiServerSubdomain] - optional. Special api subdomain
   * @param {string} [param.userAgent] - Browser userAgent
   */
  constructor({
    websiteURL, proxy, geetestApiServerSubdomain, userAgent, captchaId
  }: GeeTestV4TaskBaseParams, type: TaskTypes) {
    super({ type });
    this.websiteURL = websiteURL;
    this.proxy = proxy;
    this.geetestApiServerSubdomain = geetestApiServerSubdomain;
    this.userAgent = userAgent;
    this.captchaId = captchaId;
  }

  /**
   * @type {string} geetestApiServerSubdomain - Special api subdomain
   */
  geetestApiServerSubdomain?: string;

  /**
   * @type {string} proxy - proxy
   */
  proxy?: string;

  /**
   * @type {string} websiteURL - Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)
   */
  websiteURL: string;

  /**
   * @type {string} captchaId - If you need to solve Geetest V4 you must use this parameter, don't need if you need to solve GeetestV3
   */
  captchaId: string;

  /**
   * @type {string} userAgent - Browser userAgent
   */
  userAgent?: string;
}