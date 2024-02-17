import {
  BaseTask, ProxyCredentials, ProxyTypes, TaskTypes
} from "../_BaseTaskRequest";

export type CapyTaskBaseParams = Partial<ProxyCredentials> & {
  userAgent?: string;
  websiteKey: string;
  websiteURL: string;
};

/**
 * Base class for CapyTask
 * @extends {BaseTask}
 * {@link https://2captcha.com/api-docs/capy-puzzle-captcha}
 */
export abstract class CapyTaskBase extends BaseTask implements CapyTaskBaseParams {

  /**
   * @type {string} websiteURL - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  websiteURL: string;

  /**
   * @type {string} websiteKey - Capy Puzzle Captcha captchakey.
   */
  websiteKey: string;

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
  * Create CapyTaskBase
  * {@link https://2captcha.com/api-docs/capy-puzzle-captcha}
  * @param {Object} params - CapyTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - Capy Puzzle Captcha captchakey.
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor({
    websiteKey, websiteURL, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword, userAgent
  }: CapyTaskBaseParams, type: TaskTypes) {
    super({ type });
    this.websiteKey = websiteKey;
    this.websiteURL = websiteURL;
    this.proxyAddress = proxyAddress;
    this.proxyLogin = proxyLogin;
    this.proxyPassword = proxyPassword;
    this.proxyPort = proxyPort;
    this.proxyType = proxyType;
    this.userAgent = userAgent;
  }
}