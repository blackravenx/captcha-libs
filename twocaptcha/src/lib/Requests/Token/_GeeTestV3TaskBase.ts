import {
  BaseTask, ProxyTypes, TaskTypes
} from "../_BaseTaskRequest";
import { GeeTestV3TaskParams } from "./_GeeTestTaskBase";

/**
 * Base class for geetest
 * @extends {BaseTask}
 * {@link https://2captcha.com/api-docs/geetest}
 */
export abstract class GeeTestV3TaskBase extends BaseTask implements GeeTestV3TaskParams {

  /**
    * @type {boolean} challenge - 	GeeTest challenge value.
   */
  challenge: string;

  /**
   * @type {string} gt - GeeTest gt value
   */
  gt: string;

  /**
   * @type {string} userAgent - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
   */
  userAgent?: string;

  /**
   * @type {string} websiteURL - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  websiteURL?: string;

  /**
   * @type {string} geetestApiServerSubdomain - Only for GeeTest V3. Custom GeeTest API domain, for example: api-na.geetest.com. Can be defined inside initGeetest call. Also you can check the domain used to load the scripts, the default domain is api.geetest.com.
   */
  geetestApiServerSubdomain?: string;
  version = 3;
  proxyAddress?: string;
  proxyLogin?: string;
  proxyPassword?: string;
  proxyPort?: number;
  proxyType?: ProxyTypes;

  /**
  * Create GeeTestV3TaskBase
  * {@link https://2captcha.com/api-docs/geetest}
  * @param {Object} params - GeeTestV3TaskBaseParams
  * @param {string} [params.gt] -	GeeTest gt value
  * @param {boolean}[params.challenge] - 	GeeTest challenge value.
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {string} [params.geetestApiServerSubdomain] - Only for GeeTest V3. Custom GeeTest API domain, for example: api-na.geetest.com. Can be defined inside initGeetest call. Also you can check the domain used to load the scripts, the default domain is api.geetest.com.
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  *
  */
  constructor({
    gt, websiteURL, challenge, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword, userAgent, geetestApiServerSubdomain
  }: GeeTestV3TaskParams, type: TaskTypes) {
    super({ type });
    this.gt = gt;
    this.websiteURL = websiteURL;
    this.challenge = challenge;
    this.userAgent = userAgent;
    this.geetestApiServerSubdomain = geetestApiServerSubdomain;
    this.proxyAddress = proxyAddress;
    this.proxyLogin = proxyLogin;
    this.proxyPassword = proxyPassword;
    this.proxyPort = proxyPort;
    this.proxyType = proxyType;
  }
}