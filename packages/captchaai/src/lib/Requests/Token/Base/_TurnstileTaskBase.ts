import type { ProxyCredentials, ProxyTypes, TaskTypes } from "../../_BaseTaskRequest";

import { BaseTask } from "../../_BaseTaskRequest";

export type TurnstileTaskBaseParams = Partial<ProxyCredentials> & {
  "action"?: string;
  "data"?: string;
  "pagedata"?: string;
  "pageurl": string;
  "sitekey": string;
  "userAgent"?: string;
};

/**
 * Base class for TurnstileTask
 * @extends {BaseTask}
 * @see {@link https://docs.captchaai.com}
 */
export abstract class TurnstileTaskBase extends BaseTask implements TurnstileTaskBaseParams {

  /**
   * @type {string} pageurl - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  pageurl: string;

  /**
   * @type {string} sitekey - Turnstile sitekey. Can be found inside data-sitekey property of the Turnstile div element
   */
  sitekey: string;

  /**
   * @type {string} action - Required for Cloudflare Challenge pages. The value of action parameter of turnstile.render call
   */
  action?: string;

  /**
   * @type {string} data - Required for Cloudflare Challenge pages. The value of cData parameter of turnstile.render call
   */
  data?: string;

  /**
   * @type {string} pagedata - Required for Cloudflare Challenge pages. The value of chlPageData parameter of turnstile.render call
   */
  pagedata?: string;

  /**
   * @type {string} userAgent - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
   */
  userAgent?: string;

  proxyAddress?: string;

  proxyLogin?: string;

  proxyPassword?: string;

  proxyPort?: number;

  proxyType?: ProxyTypes;

  /**
  * TurnstileTaskBase
  * @see {@link https://docs.captchaai.com}
  * @param {Object} params - TurnstileTaskParams
  * @param {string} [params.pageurl] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.sitekey] - Turnstile sitekey. Can be found inside data-sitekey property of the Turnstile div element
  * @param {string} [params.action] - Required for Cloudflare Challenge pages. The value of action parameter of turnstile.render call
  * @param {string} [params.data] - Required for Cloudflare Challenge pages. The value of cData parameter of turnstile.render call
  * @param {string} [params.pagedata] - Required for Cloudflare Challenge pages. The value of chlPageData parameter of turnstile.render call
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor ({ sitekey, pageurl, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword, userAgent, pagedata, data, action }: TurnstileTaskBaseParams, type: TaskTypes) {
    super({ type }, "turnstile");

    this.sitekey = sitekey;

    this.pageurl = pageurl;

    this.proxyAddress = proxyAddress;

    this.proxyLogin = proxyLogin;

    this.proxyPassword = proxyPassword;

    this.proxyPort = proxyPort;

    this.proxyType = proxyType;

    this.userAgent = userAgent;

    this.action = action;

    this.pagedata = pagedata;

    this.data = data;
  }
}
