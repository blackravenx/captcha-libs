import type { ProxyCredentials, ProxyTypes, TaskTypes } from "../../_BaseTaskRequest";

import { BaseTask } from "../../_BaseTaskRequest";

export type GeetestV3TaskBaseParams = {
  "challenge": string;
  "geetestApiServerSubdomain"?: string;
  "gt": string;
};

export type GeetestV4TaskBaseParams = { "initParameters": Record<string, string> & { "captcha_id": string } };

export type GeetestCommonParams = {
  "userAgent"?: string;
  "websiteURL"?: string;
};

export type GeeTestTaskBaseParams = Partial<GeetestCommonParams & GeetestV4TaskBaseParams & ProxyCredentials> & { "version": 3 | 4 };

export type GeeTestV3TaskParams = GeetestCommonParams & GeetestV3TaskBaseParams & Partial<ProxyCredentials>;

export type GeeTestV4TaskParams = GeetestCommonParams & GeetestV4TaskBaseParams & Partial<ProxyCredentials>;

/**
 * Base class for geetest
 * @extends {BaseTask}
 * @see {@link https://2captcha.com/api-docs/geetest}
 */
export abstract class GeeTestTaskBase extends BaseTask implements GeeTestTaskBaseParams {

  /**
   * @type {object} initParameters - Required for GeeTest V4. Captcha parameters passed to initGeetest4 call, must contain captcha_id value, for example: {"captcha_id" : "e392e1d7fd421dc63325744d5a2b9c73"}
   */
  initParameters?: GeetestV4TaskBaseParams["initParameters"];

  /**
    * @type {boolean} challenge - 	GeeTest challenge value.
   */
  challenge?: string;

  /**
   * @type {string} userAgent - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
   */
  userAgent?: string;

  /**
   * @type {string} websiteURL - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  websiteURL?: string;

  /**
   * @type {string} gt - GeeTest gt value
   */
  gt?: string;

  /**
   * @type {string} geetestApiServerSubdomain - Only for GeeTest V3. Custom GeeTest API domain, for example: api-na.geetest.com. Can be defined inside initGeetest call. Also you can check the domain used to load the scripts, the default domain is api.geetest.com.
   */
  geetestApiServerSubdomain?: string;

  /**
   * @type {number} version - Should be set to 4 for GeeTest V4.
   */
  version: 3 | 4;

  proxyAddress?: string;

  proxyLogin?: string;

  proxyPassword?: string;

  proxyPort?: number;

  proxyType?: ProxyTypes;

  /**
  * GeeTestTaskBase
  * @see {@link https://2captcha.com/api-docs/geetest}
  * @param {Object} params - GeeTestTaskBaseParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.gt] -	GeeTest gt value
  * @param {boolean}[params.challenge] - 	GeeTest challenge value.
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {object} [params.initParameters] - Required for GeeTest V4. Captcha parameters passed to initGeetest4 call, must contain captcha_id value, for example: {"captcha_id" : "e392e1d7fd421dc63325744d5a2b9c73"}
  * @param {string} [params.geetestApiServerSubdomain] - Only for GeeTest V3. Custom GeeTest API domain, for example: api-na.geetest.com. Can be defined inside initGeetest call. Also you can check the domain used to load the scripts, the default domain is api.geetest.com.
  * @param {number} [params.version] - Should be set to 4 for GeeTest V4. GeeTest version: 3 or 4
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  *
  */
  constructor ({ websiteURL, userAgent, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword, ...versionSpecific }: GeeTestV3TaskParams | GeeTestV4TaskParams, type: TaskTypes) {
    super({ type });

    if ("initParameters" in versionSpecific) {
      this.initParameters = versionSpecific.initParameters;

      this.version = 4;
    } else {
      this.geetestApiServerSubdomain = versionSpecific.geetestApiServerSubdomain;

      this.challenge = versionSpecific.challenge;

      this.gt = versionSpecific.gt;

      this.version = 3;
    }

    this.websiteURL = websiteURL;

    this.userAgent = userAgent;

    this.proxyAddress = proxyAddress;

    this.proxyLogin = proxyLogin;

    this.proxyPassword = proxyPassword;

    this.proxyPort = proxyPort;

    this.proxyType = proxyType;
  }
}
