import type { ProxyCredentials, ProxyTypes, TaskTypes } from "../../_BaseTaskRequest";

import { BaseTask } from "../../_BaseTaskRequest";

export type RecaptchaV2TaskBaseParams = Partial<ProxyCredentials> & {
  "cookies"?: string;
  "domain"?: string;
  "googlekey": string;
  "invisible"?: boolean;
  "pageurl": string;
  "userAgent"?: string;
};

/**
 * Base class for reCAPTCHA V2
 * @extends {BaseTask}
 * @see {@link https://docs.captchaai.com}
 */
export abstract class RecaptchaV2TaskBase extends BaseTask implements RecaptchaV2TaskBaseParams {

  /**
   * @type {string} cookies - Your cookies will be set in a browser of our worker. The format is: key1=val1; key2=val2
   */
  cookies?: string;

  /**
   * @type {string} domain - Domain used to load the captcha: google.com or recaptcha.net. Default value: google.com
   */
  domain?: string;

  /**
    * @type {boolean} invisible - Pass true for Invisible version of reCAPTCHA - a case when you don't see the checkbox, but the challenge appears. Mostly used with a callback function
   */
  invisible?: boolean;

  /**
   * @type {string} userAgent - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
   */
  userAgent?: string;

  /**
   * @type {string} pageurl - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  pageurl: string;

  /**
   * @type {string} googlekey - reCAPTCHA sitekey. Can be found inside data-sitekey property of the reCAPTCHA div element or inside k parameter of the requests to reCAPTHCHA API
   */
  googlekey: string;

  proxyAddress?: string;

  proxyLogin?: string;

  proxyPassword?: string;

  proxyPort?: number;

  proxyType?: ProxyTypes;

  /**
  * RecaptchaV2TaskBase
  * @see {@link https://docs.captchaai.com}
  * @param {Object} params - RecaptchaV2TaskBaseParams
  * @param {string} [params.pageurl] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.googlekey] - reCAPTCHA sitekey. Can be found inside data-sitekey property of the reCAPTCHA div element or inside k parameter of the requests to reCAPTHCHA API
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {boolean}[params.invisible] - Pass true for Invisible version of reCAPTCHA - a case when you don't see the checkbox, but the challenge appears. Mostly used with a callback function
  * @param {string} [params.domain] - Domain used to load the captcha: google.com or recaptcha.net. Default value: google.com
  * @param {string} [params.cookies] - Your cookies will be set in a browser of our worker. The format is: key1=val1; key2=val2
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  *
  */
  constructor ({ googlekey, pageurl, userAgent, invisible, domain, cookies, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword }: RecaptchaV2TaskBaseParams, type: TaskTypes) {
    super({ type }, "userrecaptcha");

    this.googlekey = googlekey;

    this.pageurl = pageurl;

    this.userAgent = userAgent;

    this.invisible = invisible;

    this.domain = domain;

    this.cookies = cookies;

    this.proxyAddress = proxyAddress;

    this.proxyLogin = proxyLogin;

    this.proxyPassword = proxyPassword;

    this.proxyPort = proxyPort;

    this.proxyType = proxyType;
  }
}
