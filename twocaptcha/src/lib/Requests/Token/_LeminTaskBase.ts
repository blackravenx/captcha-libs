import {
  BaseTask, ProxyCredentials, ProxyTypes, TaskTypes
} from "../_BaseTaskRequest";

export type LeminTaskBaseParams = Partial<ProxyCredentials> & {
  captchaId: string;
  divId: string;
  leminApiServerSubdomain?: string;
  userAgent?: string;
  websiteURL: string;
};

/**
 * Base class for LeminTask
 * @extends {BaseTask}
 * {@link https://2captcha.com/api-docs/lemin}
 */
export abstract class LeminTaskBase extends BaseTask implements LeminTaskBaseParams {

  /**
   * @type {string} websiteURL - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  websiteURL: string;

  /**
   * @type {string} captchaId - Lemin captchaId value. Unique for a website.
   */
  captchaId: string;

  /**
   * @type {string} divId - The id of captcha parent div element
   */
  divId: string;

  /**
   * @type {string} leminApiServerSubdomain - API domain used to load the captcha scripts. Default: https://api.leminnow.com/
   */
  leminApiServerSubdomain?: string;

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
  * Create LeminTaskBase
  * {@link https://2captcha.com/api-docs/lemin}
  * @param {Object} params - LeminTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.captchaId] - Lemin captchaId value. Unique for a website.
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {string} [params.divId] - The id of captcha parent div element
  * @param {string} [params.leminApiServerSubdomain] - API domain used to load the captcha scripts. Default: https://api.leminnow.com/
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor({
    captchaId, websiteURL, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword, divId, leminApiServerSubdomain, userAgent
  }: LeminTaskBaseParams, type: TaskTypes) {
    super({ type });
    this.captchaId = captchaId;
    this.websiteURL = websiteURL;
    this.divId = divId;
    this.userAgent = userAgent;
    this.proxyAddress = proxyAddress;
    this.proxyLogin = proxyLogin;
    this.proxyPassword = proxyPassword;
    this.proxyPort = proxyPort;
    this.proxyType = proxyType;
    this.leminApiServerSubdomain = leminApiServerSubdomain;
  }

}