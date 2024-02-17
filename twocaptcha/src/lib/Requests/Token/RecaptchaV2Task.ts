import { _IsTaskType } from "./../_BaseTaskRequest";
import { ProxyRequiredTaskParams } from "../_BaseTaskRequest";
import {
  RecaptchaV2TaskBase, RecaptchaV2TaskBaseParams
} from "./_RecaptchaV2TaskBase";

type RecaptchaV2TaskParams = ProxyRequiredTaskParams<RecaptchaV2TaskBaseParams>;

/**
 * Token-based method for automated solving of reCAPTCHA V2.
 * @extends {RecaptchaV2TaskBase}
 * {@link https://2captcha.com/api-docs/recaptcha-v2}
 */
export class RecaptchaV2Task extends RecaptchaV2TaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isRecaptchaV2Task - Only used for correct method overloading intellisense
  */
  readonly _isRecaptchaV2Task = true;

  /**
  * Create RecaptchaV2Task
  * {@link https://2captcha.com/api-docs/recaptcha-v2}
  * @param {Object} params - RecaptchaV2TaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - reCAPTCHA sitekey. Can be found inside data-sitekey property of the reCAPTCHA div element or inside k parameter of the requests to reCAPTHCHA API. You can also use the script to find the value
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {boolean}[params.isInvisible] - Pass true for Invisible version of reCAPTCHA - a case when you don't see the checkbox, but the challenge appears. Mostly used with a callback function
  * @param {string} [params.recaptchaDataSValue] - The value of data-s parameter. Can be required to bypass the captcha on Google services
  * @param {string} [params.apiDomain] - Domain used to load the captcha: google.com or recaptcha.net. Default value: google.com
  * @param {string} [params.cookies] - Your cookies will be set in a browser of our worker. Suitable for captcha on Google services. The format is: key1=val1; key2=val2
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  *
  */
  constructor(params: RecaptchaV2TaskParams) {
    super(params, "RecaptchaV2Task");
  }
}