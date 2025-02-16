import type { ProxyCredentials, ProxyTypes, TaskTypes } from "../../_BaseTaskRequest";

import { BaseTask } from "../../_BaseTaskRequest";

export type HCaptchaTaskBaseParams = Partial<ProxyCredentials> & {
  "enterprisePayload"?: Record<string, string>;
  "isInvisible"?: boolean;
  "websiteKey": string;
  "websiteURL": string;
};

/**
 * Base class for hcaptcha
 * @extends {BaseTask}
 * @see {@link https://2captcha.com/api-docs/hcaptcha}
 */
export abstract class HCaptchaTaskBase extends BaseTask implements HCaptchaTaskBaseParams {

  /**
   * @type {object} enterprisePayload - An object containing additional parameters like: rqdata, sentry, apiEndpoint, endpoint, reportapi, assethost, imghost
   */
  enterprisePayload?: Record<string, string>;

  /**
    * @type {boolean} isInvisible - Pass true for Invisible version of hcaptcha - a case when you don't see the checkbox, but the challenge appears. Mostly used with a callback function
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
   * @type {string} websiteKey - hCaptcha sitekey. Can be found inside data-sitekey property of the hCaptcha div element or inside sitekey parameter of the requests to hCaptcha API
   */
  websiteKey: string;

  proxyAddress?: string;

  proxyLogin?: string;

  proxyPassword?: string;

  proxyPort?: number;

  proxyType?: ProxyTypes;

  /**
  * HCaptchaTaskBase
  * @see {@link https://2captcha.com/api-docs/hcaptcha}
  * @param {Object} params - HCaptchaTaskBaseParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - hCaptcha sitekey. Can be found inside data-sitekey property of the hCaptcha div element or inside sitekey parameter of the requests to hCaptcha API
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {boolean}[params.isInvisible] - Pass true for Invisible version of hcaptcha - a case when you don't see the checkbox, but the challenge appears. Mostly used with a callback function
  * @param {object} [params.enterprisePayload] - An object containing additional parameters like: rqdata, sentry, apiEndpoint, endpoint, reportapi, assethost, imghost
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  *
  */
  constructor ({ websiteKey, websiteURL, isInvisible, enterprisePayload, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword }: HCaptchaTaskBaseParams, type: TaskTypes) {
    super({ type });

    this.websiteKey = websiteKey;

    this.websiteURL = websiteURL;

    this.isInvisible = isInvisible;

    this.enterprisePayload = enterprisePayload;

    this.proxyAddress = proxyAddress;

    this.proxyLogin = proxyLogin;

    this.proxyPassword = proxyPassword;

    this.proxyPort = proxyPort;

    this.proxyType = proxyType;
  }

}
