import type {
  ProxyCredentials, ProxyTypes, TaskTypes
} from "../../_BaseTaskRequest";
import { BaseTask } from "../../_BaseTaskRequest";

export type TencentTaskBaseParams = Partial<ProxyCredentials> & {
  appId: string;
  websiteURL: string;
};

/**
 * Base class for TencentTask
 * @extends {BaseTask}
 * {@link https://2captcha.com/api-docs/tencent}
 */
export abstract class TencentTaskBase extends BaseTask implements TencentTaskBaseParams {

  /**
   * @type {string} websiteURL - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  websiteURL: string;

  /**
   * @type {string} appId - The TencentTask sitekey value found in the page code.
   */
  appId: string;
  proxyAddress?: string;
  proxyLogin?: string;
  proxyPassword?: string;
  proxyPort?: number;
  proxyType?: ProxyTypes;
  proxy?: string;

  /**
  * TencentTaskBase
  * {@link https://2captcha.com/api-docs/tencent}
  * @param {Object} params - TencentTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.appId] - The TencentTask sitekey value found in the page code.
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor({
    appId, websiteURL, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword
  }: TencentTaskBaseParams, type: TaskTypes) {
    super({ type });
    this.appId = appId;
    this.websiteURL = websiteURL;
    this.proxyAddress = proxyAddress;
    this.proxyLogin = proxyLogin;
    this.proxyPassword = proxyPassword;
    this.proxyPort = proxyPort;
    this.proxyType = proxyType;
  }
}