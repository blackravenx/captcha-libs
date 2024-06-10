import type {
  ProxyTypes, TaskTypes
} from "../../_BaseTaskRequest";
import { BaseTask } from "../../_BaseTaskRequest";
import type { GeeTestV4TaskParams } from "./_GeeTestTaskBase";

/**
 * Base class for geetest
 * @extends {BaseTask}
 * {@link https://2captcha.com/api-docs/geetest}
 */
export abstract class GeeTestV4TaskBase extends BaseTask implements GeeTestV4TaskParams {

  /**
   * @type {object} initParameters - Required for GeeTest V4. Captcha parameters passed to initGeetest4 call, must contain captcha_id value
   */
  initParameters: GeeTestV4TaskParams["initParameters"];

  /**
   * @type {string} userAgent - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
   */
  userAgent?: string;

  /**
   * @type {string} websiteURL - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  websiteURL?: string;
  version = 4;
  proxyAddress?: string;
  proxyLogin?: string;
  proxyPassword?: string;
  proxyPort?: number;
  proxyType?: ProxyTypes;

  /**
  * GeeTestV4TaskBase
  * {@link https://2captcha.com/api-docs/geetest}
  * @param {Object} params - GeeTestV4TaskParams
  * @param {object} [params.initParameters] - Required for GeeTest V4. Captcha parameters passed to initGeetest4 call, must contain captcha_id value
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor({
    websiteURL, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword, userAgent, initParameters
  }: GeeTestV4TaskParams, type: TaskTypes) {
    super({ type });
    this.websiteURL = websiteURL;
    this.initParameters = initParameters;
    this.userAgent = userAgent;
    this.proxyAddress = proxyAddress;
    this.proxyLogin = proxyLogin;
    this.proxyPassword = proxyPassword;
    this.proxyPort = proxyPort;
    this.proxyType = proxyType;
  }
}