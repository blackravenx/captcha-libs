import type { ProxyCredentials, ProxyTypes, TaskTypes } from "../../_BaseTaskRequest";

import { BaseTask } from "../../_BaseTaskRequest";

export type MtCaptchaTaskBaseParams = Partial<ProxyCredentials> & {
  "websiteKey": string;
  "websiteURL": string;
};

/**
 * Base class for MtCaptchaTask
 * @extends {BaseTask}
 * @see {@link https://2captcha.com/api-docs/mtcaptcha}
 */
export abstract class MtCaptchaTaskBase extends BaseTask implements MtCaptchaTaskBaseParams {

  /**
   * @type {string} websiteURL - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  websiteURL: string;

  /**
   * @type {string} websiteKey - The MTCaptcha sitekey value found in the page code.
   */
  websiteKey: string;

  proxyAddress?: string;

  proxyLogin?: string;

  proxyPassword?: string;

  proxyPort?: number;

  proxyType?: ProxyTypes;

  proxy?: string;

  /**
  * MtCaptchaTaskBase
  * @see {@link https://2captcha.com/api-docs/mtcaptcha}
  * @param {Object} params - MtCaptchaTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - The MTCaptcha sitekey value found in the page code.
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor ({ websiteKey, websiteURL, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword }: MtCaptchaTaskBaseParams, type: TaskTypes) {
    super({ type });

    this.websiteKey = websiteKey;

    this.websiteURL = websiteURL;

    this.proxyAddress = proxyAddress;

    this.proxyLogin = proxyLogin;

    this.proxyPassword = proxyPassword;

    this.proxyPort = proxyPort;

    this.proxyType = proxyType;
  }

}
