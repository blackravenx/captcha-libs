import {
  BaseTask, ProxyCredentials, TaskTypes
} from "../_BaseTaskRequest";

export type RecaptchaV3TaskBaseParams = {
  apiDomain?: string;
  isEnterprise?: boolean;
  minScore: number;
  pageAction?: string;
  websiteKey: string;
  websiteURL: string;
};

/**
 * Base class for Recaptcha V3
 * @extends {BaseTask}
 * {@link https://2captcha.com/api-docs/recaptcha-v3}
 */
export abstract class RecaptchaV3TaskBase extends BaseTask implements RecaptchaV3TaskBaseParams {

  /**
   * @type {string} apiDomain - Domain used to load the captcha: google.com or recaptcha.net. Default value: google.com
   */
  apiDomain?: string;

  /**
   * @type {string} websiteURL - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  websiteURL: string;

  /**
   * @type {string} websiteKey - reCAPTCHA sitekey. Can be found inside data-sitekey property of the reCAPTCHA div element or inside k parameter of the requests to reCAPTHCHA API. You can also use the script to find the value
   */
  websiteKey: string;

  /**
   * @type {number} minScore - Required score value:
   */
  minScore: number;

  /**
   * @type {string} pageAction - Action parameter value. The value is set by website owner inside data-action property of the reCAPTCHA div element or passed inside options object of execute method call, like grecaptcha.execute('websiteKey'{ action: 'myAction' })
   */
  pageAction?: string;

  /**
    * @type {boolean} isEnterprise - Pass true for Enterprise version of reCAPTCHA. You can identify it by enterprise.js script used instead of api.js or by grecaptcha.enterprise.execute call used instead of grecaptcha.execute
   */
  isEnterprise?: boolean;

  /**
  * Create RecaptchaV3TaskBase
  * {@link https://2captcha.com/api-docs/recaptcha-v3}
  * @param {Object} params - RecaptchaV3TaskBaseParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - reCAPTCHA sitekey. Can be found inside data-sitekey property of the reCAPTCHA div element or inside k parameter of the requests to reCAPTHCHA API. You can also use the script to find the value
  *
  * @param {string} [params.apiDomain] - Domain used to load the captcha: google.com or recaptcha.net. Default value: google.com
  * @param {string} [params.pageAction] - Action parameter value. The value is set by website owner inside data-action property of the reCAPTCHA div element or passed inside options object of execute method call, like grecaptcha.execute('websiteKey'{ action: 'myAction' })
  * @param {number} [params.minScore] - Required score value
  * @param {boolean} [params.isEnterprise] - Pass true for Enterprise version of reCAPTCHA. You can identify it by enterprise.js script used instead of api.js or by grecaptcha.enterprise.execute call used instead of grecaptcha.execute
  */
  constructor({
    websiteKey, websiteURL, apiDomain, minScore, pageAction, isEnterprise
  }: RecaptchaV3TaskBaseParams, type: TaskTypes) {
    super({ type });
    this.websiteKey = websiteKey;
    this.websiteURL = websiteURL;
    this.apiDomain = apiDomain;
    this.minScore = minScore;
    this.pageAction = pageAction;
    this.isEnterprise = isEnterprise;
  }

}