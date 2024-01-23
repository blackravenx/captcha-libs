import type { TaskTypes } from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";

export type HCaptchaBaseTaskParams = {
  enterprisePayload?: Record<string, string>;
  isInvisible?: boolean;
  proxy?: string;
  userAgent?: string;
  websiteKey: string;
  websiteURL: string;
};

/**
 * @classdesc Base class for HCaptcha task
 * @class
 * {@link https://docs.capsolver.com/guide/captcha/HCaptcha.html}
 * @extends {BaseTask}
 * @implements {HCaptchaBaseTaskParams}
 */
export abstract class HCaptchaTaskBase extends BaseTask implements HCaptchaBaseTaskParams {

  /**
   * Create HCaptchaTaskBase
   * {@link https://docs.capsolver.com/guide/captcha/HCaptcha.html}
   * @param {Object} params - HCaptchaBaseTaskParams
   * @param {Object=} params.enterprisePayload - Enterprise Payload
   * @param {string=} params.proxy - proxy
   * @param {string} params.websiteURL - Web address of the website using recaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} params.websiteKey - The domain public key, rarely updated. (Ex: b989d9e8-0d14-41sda0-870f-97b5283ba67d)
   * @param {boolean=} params.isInvisible - if recaptcha don't have pageAction, reload request body content flag have "fi"
   * @param {string} [params.userAgent] - Browser's User-Agent which is used in emulation. It is required that you use a signature of a modern browser, otherwise Google will ask you to "update your browser".
   */
  constructor({
    isInvisible = false, websiteKey, websiteURL, proxy, enterprisePayload, userAgent
  }: HCaptchaBaseTaskParams, type: TaskTypes) {
    super({ type });
    this.websiteKey = websiteKey;
    this.websiteURL = websiteURL;
    this.proxy = proxy;
    this.isInvisible = isInvisible;
    this.enterprisePayload = enterprisePayload;
    this.userAgent = userAgent;
  }

  /**
   * @type {Object} enterprisePayload - Enterprise Payload
   */
  enterprisePayload?: Record<string, string>;

  /**
   * @type {boolean} isInvisible - if recaptcha don't have pageAction, reload request body content flag have "fi"
   */
  isInvisible?: boolean;

  /**
   * @type {string} proxy - proxy
   */
  proxy?: string;

  /**
   * @type {string} userAgent - Browser's User-Agent which is used in emulation. It is required that you use a signature of a modern browser, otherwise Google will ask you to "update your browser"
   */
  userAgent?: string;

  /**
   * @type {string} websiteKey - The domain public key, rarely updated. (Ex: b989d9e8-0d14-41sda0-870f-97b5283ba67d)
   */
  websiteKey: string;

  /**
   * @type {string} websiteURL - Web address of the website using recaptcha, generally it's fixed value. (Ex: https://google.com)
   */
  websiteURL: string;
}