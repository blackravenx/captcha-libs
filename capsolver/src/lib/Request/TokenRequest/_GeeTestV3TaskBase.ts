import type { TaskTypes } from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";

export type GeeTestV3TaskBaseParams = {
  challenge: string;
  geetestApiServerSubdomain?: string;
  gt: string;
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

export abstract class GeeTestV3TaskBase extends BaseTask implements GeeTestV3TaskBaseParams {

  /**
   * GeeTestTask V3 this task type require your own proxies.
   * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
   * @param {object} params -	GeeTestTaskBaseParams
   * @param {string} [params.gt] - required. The domain gt field.
   * @param {string} [params.challenge] - required. If you need to solve Geetest V3 you must use this parameter
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.websiteURL] -required. Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [param.geetestApiServerSubdomain] - optional. Special api subdomain
   * @param {string} [param.userAgent] - Browser userAgent
   */
  constructor({
    websiteURL, proxy, challenge, geetestApiServerSubdomain, gt, userAgent
  }: GeeTestV3TaskBaseParams, type: TaskTypes) {
    super({ type });
    this.websiteURL = websiteURL;
    this.proxy = proxy;
    this.challenge = challenge;
    this.geetestApiServerSubdomain = geetestApiServerSubdomain;
    this.gt = gt;
    this.userAgent = userAgent;
  }

  /**
   * @type {string} gt - The domain gt field.
   */
  gt: string;

  /**
   * @type {string} challenge - If you need to solve Geetest V4 you must use this parameter, don't need if you need to solve GeetestV3
   */
  challenge: string;

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
   * @type {string} userAgent - Browser userAgent
   */
  userAgent?: string;
}