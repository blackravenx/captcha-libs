import {
  BaseTask, ProxyCredentials, ProxyTypes, TaskTypes
} from "../_BaseTaskRequest";

export type TurnstileTaskBaseParams = Partial<ProxyCredentials> & {
  action?: string;
  data?: string;
  pagedata?: string;
  userAgent: string;
  websiteKey: string;
  websiteURL: string;
};

/**
 * Base class for TurnstileTask
 * @extends {BaseTask}
 * {@link https://2captcha.com/api-docs/cloudflare-turnstile}
 */
export abstract class TurnstileTaskBase extends BaseTask implements TurnstileTaskBaseParams {

  /**
   * @type {string} websiteURL - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  websiteURL: string;

  /**
   * @type {string} websiteKey - Turnstile sitekey. Can be found inside data-sitekey property of the Turnstile div element
   */
  websiteKey: string;

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
  userAgent: string;
  proxyAddress?: string;
  proxyLogin?: string;
  proxyPassword?: string;
  proxyPort?: number;
  proxyType?: ProxyTypes;

  /**
  * Create TurnstileTaskBase
  * {@link https://2captcha.com/api-docs/cloudflare-turnstile}
  * @param {Object} params - TurnstileTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - Turnstile sitekey. Can be found inside data-sitekey property of the Turnstile div element
  * @param {string} [params.actions] - Required for Cloudflare Challenge pages. The value of action parameter of turnstile.render call
  * @param {string} [params.data] - Required for Cloudflare Challenge pages. The value of cData parameter of turnstile.render call
  * @param {string} [params.pagedata] - Required for Cloudflare Challenge pages. The value of chlPageData parameter of turnstile.render call
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor({
    websiteKey, websiteURL, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword, userAgent, pagedata, data, action
  }: TurnstileTaskBaseParams, type: TaskTypes) {
    super({ type });
    this.websiteKey = websiteKey;
    this.websiteURL = websiteURL;
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