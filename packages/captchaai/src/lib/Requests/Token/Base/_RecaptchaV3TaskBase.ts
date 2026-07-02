import type { TaskTypes } from "../../_BaseTaskRequest";

import { BaseTask } from "../../_BaseTaskRequest";

export type RecaptchaV3TaskBaseParams = {
  "action"?: string;
  "domain"?: string;
  "googlekey": string;
  "min_score"?: number;
  "pageurl": string;
  "version"?: string;
};

/**
 * Base class for reCAPTCHA V3
 * @extends {BaseTask}
 * @see {@link https://docs.captchaai.com}
 */
export abstract class RecaptchaV3TaskBase extends BaseTask implements RecaptchaV3TaskBaseParams {

  /**
   * @type {string} domain - Domain used to load the captcha: google.com or recaptcha.net. Default value: google.com
   */
  domain?: string;

  /**
   * @type {string} pageurl - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  pageurl: string;

  /**
   * @type {string} googlekey - reCAPTCHA sitekey. Can be found inside data-sitekey property of the reCAPTCHA div element or inside k parameter of the requests to reCAPTHCHA API
   */
  googlekey: string;

  /**
   * @type {string} version - reCAPTCHA version. Value is v3 for reCAPTCHA V3
   */
  version?: string;

  /**
   * @type {number} min_score - Required score value: 0.3, 0.7 or 0.9
   */
  min_score?: number;

  /**
   * @type {string} action - Action parameter value. The value is set by website owner inside data-action property of the reCAPTCHA div element or passed inside options object of execute method call, like grecaptcha.execute('googlekey'{ action: 'myAction' })
   */
  action?: string;

  /**
  * RecaptchaV3TaskBase
  * @see {@link https://docs.captchaai.com}
  * @param {Object} params - RecaptchaV3TaskBaseParams
  * @param {string} [params.pageurl] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.googlekey] - reCAPTCHA sitekey. Can be found inside data-sitekey property of the reCAPTCHA div element or inside k parameter of the requests to reCAPTHCHA API
  * @param {string} [params.domain] - Domain used to load the captcha: google.com or recaptcha.net. Default value: google.com
  * @param {string} [params.action] - Action parameter value. The value is set by website owner inside data-action property of the reCAPTCHA div element or passed inside options object of execute method call, like grecaptcha.execute('googlekey'{ action: 'myAction' })
  * @param {number} [params.min_score] - Required score value: 0.3, 0.7 or 0.9
  * @param {string} [params.version] - reCAPTCHA version. Value is v3 for reCAPTCHA V3
  */
  constructor ({ googlekey, pageurl, domain, min_score, action, version }: RecaptchaV3TaskBaseParams, type: TaskTypes) {
    super({ type }, "userrecaptcha");

    this.googlekey = googlekey;

    this.pageurl = pageurl;

    this.domain = domain;

    this.min_score = min_score;

    this.action = action;

    this.version = version;
  }

}
