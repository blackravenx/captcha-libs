import type { ProxyCredentials, ProxyTypes, TaskTypes } from "../../_BaseTaskRequest";

import { BaseTask } from "../../_BaseTaskRequest";

export type AmazonTaskBaseParams = Partial<ProxyCredentials> & {
  "captchaScript"?: string;
  "challengeScript"?: string;
  "context": string;
  "iv": string;
  "websiteKey": string;
  "websiteURL": string;
};

/**
 * Base class for AmazonTask
 * @extends {BaseTask}
 * @see {@link https://2captcha.com/api-docs/amazon-aws-waf-captcha}
 */
export abstract class AmazonTaskBase extends BaseTask implements AmazonTaskBaseParams {

  /**
   * @type {string} websiteURL - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  websiteURL: string;

  /**
   * @type {string} websiteKey - Value of key parameter you found on the page
   */
  websiteKey: string;

  /**
   * @type {string} iv - Value of iv parameter you found on the
   */
  iv: string;

  /**
   * @type {string} context - Value of context parameter you found on the page
   */
  context: string;

  /**
   * @type {string} challengeScript - The source URL of challenge.js script on the page
   */
  challengeScript?: string;

  /**
   * @type {string} captchaScript - The source URL of captcha.js script on the page
   */
  captchaScript?: string;

  proxyAddress?: string;

  proxyLogin?: string;

  proxyPassword?: string;

  proxyPort?: number;

  proxyType?: ProxyTypes;

  /**
  * AmazonTaskBase
  * @see {@link https://2captcha.com/api-docs/amazon-aws-waf-captcha}
  * @param {Object} params - AmazonTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - Value of key parameter you found on the page
  * @param {string} [params.iv] - Value of iv parameter you found on the
  * @param {string} [params.context] - Value of context parameter you found on the page
  * @param {string} [params.challengeScript] - The source URL of challenge.js script on the page
  * @param {string} [params.captchaScript] - The source URL of captcha.js script on the page
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor ({ websiteKey, websiteURL, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword, iv, challengeScript, captchaScript, context }: AmazonTaskBaseParams, type: TaskTypes) {
    super({ type });

    this.websiteKey = websiteKey;

    this.websiteURL = websiteURL;

    this.iv = iv;

    this.proxyAddress = proxyAddress;

    this.proxyLogin = proxyLogin;

    this.proxyPassword = proxyPassword;

    this.proxyPort = proxyPort;

    this.proxyType = proxyType;

    this.challengeScript = challengeScript;

    this.context = context;

    this.captchaScript = captchaScript;
  }

}
