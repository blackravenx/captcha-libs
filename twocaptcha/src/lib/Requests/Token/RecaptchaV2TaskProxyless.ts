import {
  ProxyCredentials, ProxylessTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import { RecaptchaV2TaskBase } from "./_RecaptchaV2TaskBase";
import { RecaptchaV2TaskBaseParams } from "./_RecaptchaV2TaskBase";

type RecaptchaV2TaskProxylessParams = ProxylessTaskParams<RecaptchaV2TaskBaseParams>;

/**
 * Token-based method for automated solving of reCAPTCHA V2.
 * @extends {RecaptchaV2TaskProxylessBase}
 * {@link https://2captcha.com/api-docs/recaptcha-v2}
 */
export class RecaptchaV2TaskProxyless extends RecaptchaV2TaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isRecaptchaV2TaskProxyless - Only used for correct method overloading intellisense
  */
  readonly _isRecaptchaV2TaskProxyless = true;

  /**
  * Create RecaptchaV2TaskProxyless
  * {@link https://2captcha.com/api-docs/recaptcha-v2}
  * @param {Object} params - RecaptchaV2TaskProxylessParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - reCAPTCHA sitekey. Can be found inside data-sitekey property of the reCAPTCHA div element or inside k parameter of the requests to reCAPTHCHA API. You can also use the script to find the value
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {boolean}[params.isInvisible] - Pass true for Invisible version of reCAPTCHA - a case when you don't see the checkbox, but the challenge appears. Mostly used with a callback function
  * @param {string} [params.recaptchaDataSValue] - The value of data-s parameter. Can be required to bypass the captcha on Google services
  * @param {string} [params.apiDomain] - Domain used to load the captcha: google.com or recaptcha.net. Default value: google.com
  * @param {string} [params.cookies] - Your cookies will be set in a browser of our worker. Suitable for captcha on Google services. The format is: key1=val1; key2=val2
  */
  constructor(params: RecaptchaV2TaskProxylessParams) {
    super(params, "RecaptchaV2TaskProxyless");
  }
}
