import type { ProxyCredentials, TaskTypes } from "../../_BaseTaskRequest";

import { BaseTask } from "../../_BaseTaskRequest";

export type MtCaptchaTaskBaseParams = Partial<ProxyCredentials> & {
  "proxy"?: string;
  "websiteKey": string;
  "websiteURL": string;
};

/**
 * @classdesc Base class for MtCaptcha
 * @class
 * @extends {MtCaptchaTaskBase}
 * @see {@link https://docs.capsolver.com/guide/captcha/MtCaptcha.html}
 */
export abstract class MtCaptchaTaskBase extends BaseTask implements MtCaptchaTaskBaseParams {

  /**
   * Create MtCaptchaTaskBase
   * @see {@link https://docs.capsolver.com/guide/captcha/MtCaptcha.html}
   * @param {object} params -	MtCaptchaTaskBaseParams
   * @param {string} [params.websiteURL] -	The website url
   * @param {string} [params.websiteKey] - The domain public key, rarely updated. (Ex: sk=MTPublic-xxx public key)
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.proxyAddress] - proxyAddress
   * @param {string} [params.proxyLogin] - proxyLogin
   * @param {string} [params.proxyPassword] - proxyPassword
   * @param {number} [params.proxyPort] - proxyPort
   * @param {string} [params.proxyType] - proxyType
   */
  constructor ({ websiteKey, websiteURL, proxy, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword }: MtCaptchaTaskBaseParams, type: TaskTypes) {
    super({ type });

    this.websiteKey = websiteKey;

    this.websiteURL = websiteURL;

    this.proxy = proxy;

    this.proxyAddress = proxyAddress;

    this.proxyLogin = proxyLogin;

    this.proxyPort = proxyPort;

    this.proxyType = proxyType;

    this.proxyPassword = proxyPassword;
  }

  /**
   * @type {string} proxy - proxy
   */
  proxy?: string;

  /**
   * @type {string} websiteKey - The domain public key, rarely updated. (Ex: sk=MTPublic-xxx public key)
   */
  websiteKey: string;

  /**
   * @type {string} websiteURL -  Web address of the website using hcaptcha, generally it's fixed value. (Ex: https://google.com)
   */
  websiteURL: string;

  proxyAddress?: string;

  proxyLogin?: string;

  proxyPassword?: string;

  proxyPort?: number;

  proxyType?: ProxyCredentials["proxyType"];
}
