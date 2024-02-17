import {
  BaseTask, ProxyCredentials, ProxyTypes, TaskTypes
} from "../_BaseTaskRequest";

export type RecaptchaV2TaskBaseParams = Partial<ProxyCredentials> & {
  apiDomain?: string;
  cookies?: string;
  isInvisible?: boolean;
  recaptchaDataSValue?: string;
  userAgent?: string;
  websiteKey: string;
  websiteURL: string;
};

/**
 * Base class for Recaptcha V2
 * @extends {BaseTask}
 * {@link https://2captcha.com/api-docs/recaptcha-v2}
 */
export abstract class RecaptchaV2TaskBase extends BaseTask implements RecaptchaV2TaskBaseParams {

  /**
   * @type {string} cookies - Your cookies will be set in a browser of our worker. Suitable for captcha on Google services. The format is: key1=val1; key2=val2
   */
  cookies?: string;

  /**
   * @type {string} apiDomain - Domain used to load the captcha: google.com or recaptcha.net. Default value: google.com
   */
  apiDomain?: string;

  /**
   * @type {string} recaptchaDataSValue - The value of data-s parameter. Can be required to bypass the captcha on Google services
   */
  recaptchaDataSValue?: string;

  /**
    * @type {boolean} isInvisible - Pass true for Invisible version of reCAPTCHA - a case when you don't see the checkbox, but the challenge appears. Mostly used with a callback function
   */
  isInvisible?: boolean;

  /**
   * @type {string} userAgent - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
   */
  userAgent?: string;

  /**
   * @type {string} websiteURL - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  websiteURL: string;

  /**
   * @type {string} websiteKey - reCAPTCHA sitekey. Can be found inside data-sitekey property of the reCAPTCHA div element or inside k parameter of the requests to reCAPTHCHA API. You can also use the script to find the value
   */
  websiteKey: string;
  proxyAddress?: string;
  proxyLogin?: string;
  proxyPassword?: string;
  proxyPort?: number;
  proxyType?: ProxyTypes;

  /**
  * Create RecaptchaV2TaskBase
  * {@link https://2captcha.com/api-docs/recaptcha-v2}
  * @param {Object} params - RecaptchaV2TaskBaseParams
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
  constructor({
    websiteKey, websiteURL, userAgent, isInvisible, recaptchaDataSValue, apiDomain, cookies, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword
  }: RecaptchaV2TaskBaseParams, type: TaskTypes) {
    super({ type });
    this.websiteKey = websiteKey;
    this.websiteURL = websiteURL;
    this.userAgent = userAgent;
    this.isInvisible = isInvisible;
    this.recaptchaDataSValue = recaptchaDataSValue;
    this.apiDomain = apiDomain;
    this.cookies = cookies;
    this.proxyAddress = proxyAddress;
    this.proxyLogin = proxyLogin;
    this.proxyPassword = proxyPassword;
    this.proxyPort = proxyPort;
    this.proxyType = proxyType;
  }
}