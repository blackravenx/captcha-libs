import type { TaskTypes } from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";

export type MtCaptchaTaskBaseParams = {
  proxy?: string;
  websiteKey: string;
  websiteURL: string;
};

/**
 * @classdesc Base class for MtCaptcha
 * @class
 * @extends {MtCaptchaTaskBase}
 * {@link https://docs.capsolver.com/guide/captcha/MtCaptcha.html}
 */
export abstract class MtCaptchaTaskBase extends BaseTask implements MtCaptchaTaskBaseParams {

  /**
   * Create MtCaptchaTaskBase
   * {@link https://docs.capsolver.com/guide/captcha/MtCaptcha.html}
   * @param {object} params -	MtCaptchaTaskBaseParams
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.websiteURL] -	The website url
   * @param {string} [params.websiteKey] - The domain public key, rarely updated. (Ex: sk=MTPublic-xxx public key)
   */
  constructor({
    websiteKey, websiteURL, proxy
  }: MtCaptchaTaskBaseParams, type: TaskTypes) {
    super({ type });
    this.websiteKey = websiteKey;
    this.websiteURL = websiteURL;
    this.proxy = proxy;
  }

  /**
   * @type {string} proxy - proxy
   */
  proxy?: string;

  /**
   * @type {string} websiteKey - The domain public key, rarely updated. (Ex: sk=MTPublic-xxx public key)
   */
  websiteKey: string;

  /**
   * @type {string} websiteURL -  Web address of the website using hcaptcha, generally it's fixed value. (Ex: https://google.com)
   */
  websiteURL: string;
}