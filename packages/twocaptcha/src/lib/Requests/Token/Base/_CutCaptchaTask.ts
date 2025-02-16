import type { ProxyCredentials, ProxyTypes, TaskTypes } from "../../_BaseTaskRequest";

import { BaseTask } from "../../_BaseTaskRequest";

export type CutCaptchaTaskBaseParams = Partial<ProxyCredentials> & {
  "apiKey": string;
  "miseryKey": string;
  "websiteURL": string;
};

/**
 * Base class for CutCaptchaTask
 * @extends {BaseTask}
 * @see {@link https://2captcha.com/api-docs/cutcaptcha}
 */
export abstract class CutCaptchaTaskBase extends BaseTask implements CutCaptchaTaskBaseParams {

  /**
   * @type {string} websiteURL - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  websiteURL: string;

  /**
   * @type {string} miseryKey - The value of CUTCAPTCHA_MISERY_KEY variable defined on page.
   */
  miseryKey: string;

  /**
   * @type {string} apiKey - The value of data-apikey attribute of iframe's body. Also the name of javascript file included on the page
   */
  apiKey: string;

  proxyAddress?: string;

  proxyLogin?: string;

  proxyPassword?: string;

  proxyPort?: number;

  proxyType?: ProxyTypes;

  /**
  * CutCaptchaTaskBase
  * @see {@link https://2captcha.com/api-docs/cutcaptcha}
  * @param {Object} params - CutCaptchaTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.miseryKey] - The value of CUTCAPTCHA_MISERY_KEY variable defined on page.
  * @param {string} [params.apiKey] - The value of data-apikey attribute of iframe's body. Also the name of javascript file included on the page
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor ({ miseryKey, websiteURL, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword, apiKey }: CutCaptchaTaskBaseParams, type: TaskTypes) {
    super({ type });

    this.miseryKey = miseryKey;

    this.websiteURL = websiteURL;

    this.proxyAddress = proxyAddress;

    this.proxyLogin = proxyLogin;

    this.proxyPassword = proxyPassword;

    this.proxyPort = proxyPort;

    this.proxyType = proxyType;

    this.apiKey = apiKey;
  }
}
