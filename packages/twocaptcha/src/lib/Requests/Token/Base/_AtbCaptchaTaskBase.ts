import type { ProxyCredentials, ProxyTypes, TaskTypes } from "../../_BaseTaskRequest";

import { BaseTask } from "../../_BaseTaskRequest";

export type AtbCaptchaTaskBaseParams = Partial<ProxyCredentials> & {
  "apiServer": string;
  "appId": string;
  "websiteURL": string;
};

/**
 * Base class for AtbCaptchaTask
 * @extends {BaseTask}
 * @see {@link https://2captcha.com/api-docs/atb-captcha}
 */
export abstract class AtbCaptchaTaskBase extends BaseTask implements AtbCaptchaTaskBaseParams {

  /**
   * @type {string} websiteURL - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  websiteURL: string;

  /**
   * @type {string} appId - The value of appId parameter in the website source code.
   */
  appId: string;

  /**
   * @type {string} apiServer - The value of apiServer parameter in the website source code.
   */
  apiServer: string;

  proxyAddress?: string;

  proxyLogin?: string;

  proxyPassword?: string;

  proxyPort?: number;

  proxyType?: ProxyTypes;

  proxy?: string;

  /**
  * AtbCaptchaTaskBase
  * @see {@link https://2captcha.com/api-docs/atb-captcha}
  * @param {Object} params - AtbCaptchaTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.appId] - The value of appId parameter in the website source code.
  * @param {string} [params.apiServer] - The value of apiServer parameter in the website source code.
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor ({ appId, websiteURL, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword, apiServer }: AtbCaptchaTaskBaseParams, type: TaskTypes) {
    super({ type });

    this.appId = appId;

    this.websiteURL = websiteURL;

    this.proxyAddress = proxyAddress;

    this.proxyLogin = proxyLogin;

    this.proxyPassword = proxyPassword;

    this.proxyPort = proxyPort;

    this.proxyType = proxyType;

    this.apiServer = apiServer;
  }

}
