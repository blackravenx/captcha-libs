import type { ProxyCredentials, TaskTypes } from "../../_BaseTaskRequest";

import { BaseTask } from "../../_BaseTaskRequest";

export type GeeTestV4TaskBaseParams = Partial<ProxyCredentials> & {
  "captchaId": string;
  "geetestApiServerSubdomain"?: string;
  "proxy"?: string;
  "userAgent"?: string;
  "websiteURL": string;
};

/**
 * @classdesc Base class for GeeTestTask
 * @class
 * @extends {BaseTask}
 * @see {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
 */

export abstract class GeeTestV4TaskBase extends BaseTask implements GeeTestV4TaskBaseParams {

  /**
   * GeeTestTask V4 this task type require your own proxies.
   * @see {@link https://docs.capsolver.com/guide/captcha/Geetest.html}
   * @param {object} params -	GeeTestTaskBaseParams
   * @param {string} [params.gt] - required. The domain gt field.
   * @param {string} [params.captchaId] - required. If you need to solve Geetest V4 you must use this parameter.
   * @param {string} [params.websiteURL] -required. Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [param.geetestApiServerSubdomain] - optional. Special api subdomain
   * @param {string} [param.userAgent] - Browser userAgent
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.proxyAddress] - proxyAddress
   * @param {string} [params.proxyLogin] - proxyLogin
   * @param {string} [params.proxyPassword] - proxyPassword
   * @param {number} [params.proxyPort] - proxyPort
   * @param {string} [params.proxyType] - proxyType
   */
  constructor ({ websiteURL, proxy, geetestApiServerSubdomain, userAgent, captchaId, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword }: GeeTestV4TaskBaseParams, type: TaskTypes) {
    super({ type });

    this.websiteURL = websiteURL;

    this.proxy = proxy;

    this.geetestApiServerSubdomain = geetestApiServerSubdomain;

    this.userAgent = userAgent;

    this.captchaId = captchaId;

    this.proxyAddress = proxyAddress;

    this.proxyLogin = proxyLogin;

    this.proxyPort = proxyPort;

    this.proxyType = proxyType;

    this.proxyPassword = proxyPassword;
  }

  /**
   * @type {string} geetestApiServerSubdomain - Special api subdomain
   */
  geetestApiServerSubdomain?: string;

  /**
   * @type {string} proxy - proxy
   */
  proxy?: string;

  /**
   * @type {string} websiteURL - Web address of the website using funcaptcha, generally it's fixed value. (Ex: https://google.com)
   */
  websiteURL: string;

  /**
   * @type {string} captchaId - If you need to solve Geetest V4 you must use this parameter, don't need if you need to solve GeetestV3
   */
  captchaId: string;

  /**
   * @type {string} userAgent - Browser userAgent
   */
  userAgent?: string;

  proxyAddress?: string;

  proxyLogin?: string;

  proxyPassword?: string;

  proxyPort?: number;

  proxyType?: ProxyCredentials["proxyType"];
}
