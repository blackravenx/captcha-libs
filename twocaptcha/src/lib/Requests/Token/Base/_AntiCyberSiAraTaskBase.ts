import type {
  ProxyCredentials, ProxyTypes, TaskTypes
} from "../../_BaseTaskRequest";
import { BaseTask } from "../../_BaseTaskRequest";

export type AntiCyberSiAraTaskBaseParams = Partial<ProxyCredentials> & {
  SlideMasterUrlId: string;
  userAgent: string;
  websiteURL: string;
};

/**
 * Base class for AntiCyberSiAraTaskBase
 * @extends {BaseTask}
 * {@link https://2captcha.com/api-docs/anti-cyber-siara}
 */
export abstract class AntiCyberSiAraTaskBase extends BaseTask implements AntiCyberSiAraTaskBaseParams {

  /**
   * @type {string} websiteURL - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  websiteURL: string;

  /**
   * @type {string} SlideMasterUrlId - The value of the MasterUrlId parameter obtained from the request to the endpoint API/CyberSiara/GetCyberSiara.
   */
  SlideMasterUrlId: string;

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
  * Create AntiCyberSiAraTaskBase
  * {@link https://2captcha.com/api-docs/anti-cyber-siara}
  * @param {Object} params - CapyTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.SlideMasterUrlId] - The value of the MasterUrlId parameter obtained from the request to the endpoint API/CyberSiara/GetCyberSiara.
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor({
    SlideMasterUrlId, websiteURL, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword, userAgent
  }: AntiCyberSiAraTaskBaseParams, type: TaskTypes) {
    super({ type });
    this.SlideMasterUrlId = SlideMasterUrlId;
    this.websiteURL = websiteURL;
    this.proxyAddress = proxyAddress;
    this.proxyLogin = proxyLogin;
    this.proxyPassword = proxyPassword;
    this.proxyPort = proxyPort;
    this.proxyType = proxyType;
    this.userAgent = userAgent;
  }
}