import type { TaskTypes } from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";

export type GeeTestTaskBaseParams = {
  captchaId?: string;
  challenge?: string;
  geetestApiServerSubdomain?: string;
  gt?: string;
  proxy?: string;
  userAgent?: string;
  websiteURL: string;
};

/**
 * @classdesc Base class for GeeTestTask
 * @class
 * @extends {BaseTask}
 * @implements {GeeTestTaskBaseParams}
 * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
 */

export abstract class GeeTestTaskBase extends BaseTask implements GeeTestTaskBaseParams {

  /**
   * Create GeeTestTask
   * {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
   * @param {object} params -	GeeTestTaskParams
   * @param {string} [params.gt] - The domain gt field.
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.websiteURL] - Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [params.challenge] - If you need to solve Geetest V4 you must use this parameter, don't need if you need to solve GeetestV3
   * @param {string} [param.geetestApiServerSubdomain] - Special api subdomain
   * @param {string} [params.captchaId] - If you need to solve Geetest V4 you must use this parameter, don't need if you need to solve GeetestV3
   * @param {string} [params.userAgent] - Browser userAgent
   */
  constructor({
    websiteURL, proxy, challenge, geetestApiServerSubdomain, gt, captchaId, userAgent
  }: GeeTestTaskBaseParams, type: TaskTypes) {
    super({ type });
    this.websiteURL = websiteURL;
    this.proxy = proxy;
    this.challenge = challenge;
    this.geetestApiServerSubdomain = geetestApiServerSubdomain;
    this.gt = gt;
    this.captchaId = captchaId;
    this.userAgent = userAgent;
  }

  /**
   * @type {string} gt - The domain gt field.
   */
  gt?: string;

  /**
   * @type {string} challenge - If you need to solve Geetest V4 you must use this parameter, don't need if you need to solve GeetestV3
   */
  challenge?: string;

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
  captchaId?: string;

  /**
   * @type {string} userAgent - Browser userAgent
   */
  userAgent?: string;
}