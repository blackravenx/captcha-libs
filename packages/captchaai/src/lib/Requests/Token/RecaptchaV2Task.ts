import type { _IsTaskType } from "./../_BaseTaskRequest";

import type { ProxyRequiredTaskParams } from "../_BaseTaskRequest";

import type { RecaptchaV2TaskBaseParams } from "./Base/_RecaptchaV2TaskBase";

import { RecaptchaV2TaskBase } from "./Base/_RecaptchaV2TaskBase";

type RecaptchaV2TaskParams = ProxyRequiredTaskParams<RecaptchaV2TaskBaseParams>;

/**
 * Token-based method for automated solving of reCAPTCHA V2.
 * @extends {RecaptchaV2TaskBase}
 * @see {@link https://docs.captchaai.com}
 */
export class RecaptchaV2Task extends RecaptchaV2TaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isRecaptchaV2Task - Only used for correct method overloading intellisense
  */
  readonly _isRecaptchaV2Task: _IsTaskType["_isRecaptchaV2Task"] = true;

  /**
  * Create RecaptchaV2Task
  * @see {@link https://docs.captchaai.com}
  * @param {Object} params - RecaptchaV2TaskParams
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
  constructor (params: RecaptchaV2TaskParams) {
    super(params, "RecaptchaV2Task");
  }
}
