import type { BaseParams, ProxyTypes, TaskSolutionTypes } from "../_BaseTaskRequest";

import { BaseTask } from "../_BaseTaskRequest";

type ReCaptchaVersions = "v2" | "v3";

export type ReCaptchaBaseParams = Omit<BaseParams, "method"> & {
  "cookies"?: string;
  "data-s"?: string;
  "googlekey": string;
  "pageurl": string;
  "proxy"?: string;
  "proxyType"?: ProxyTypes;
  "userAgent"?: string;
  "version"?: ReCaptchaVersions;
};

/**
 * @classdesc ReCaptchaBase task
 * @class
 * @extends {BaseTask}
 */
export abstract class ReCaptchaBaseTask extends BaseTask implements ReCaptchaBaseParams, TaskSolutionTypes {

  /**
   * Create ReCaptchaBaseTask
   * @param {ReCaptchaBaseParams} params - params
   * @param {string} [params.googlekey] - The value of the parameter k or data-sitekey that you found in the page code. For example 6le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-
   * @param {string} [params.pageurl] - Full URL of the page where you are solving reCAPTCHA
   * @param {string} [params.data-s] - The value of the data-s parameter found on the page. Relevant for Google search
   * @param {string} [params.cookies] - 	Your cookies that will be used by the employee to solve the captcha.
   * @param {string} [params.userAgent] - We substitute your userAgent for the employee.
   * @param {string} [params.proxy] - Format: login:password@151.142.23.32:3128
   * @param {string} [params.proxyType] - Your proxy type: : HTTP, HTTPS, SOCKS4, SOCKS5.
   */
  constructor ({ googlekey, pageurl, proxy, proxyType, userAgent, cookies, "data-s": dataS, version }: ReCaptchaBaseParams) {
    super({ "method": "userrecaptcha" });

    this.googlekey = googlekey;

    this.pageurl = pageurl;

    this["data-s"] = dataS;

    this.proxy = proxy;

    this.proxyType = proxyType;

    this.userAgent = userAgent;

    this.cookies = cookies;

    this.version = version;
  }

  //
  // @type {string} googlekey - The value of the parameter k or data-sitekey that you found in the page code
  // For example 6le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-
  //
  googlekey: string;

  //
  // @type {string} pageurl - Full URL of the page where you are solving reCAPTCHA Base
  // For example https://www.google.com/recaptcha/api2/demo
  //
  pageurl: string;

  /**
   * @type {string} data-s - The value of the data-s parameter found on the page. Relevant for Google search and other Google services.
   */
  "data-s"?: string;

  /**
   * @type {string} cookies - 	Your cookies that will be used by the employee to solve the captcha.
   */
  cookies?: string;

  /**
   * @type {string} userAgent - We substitute your userAgent for the employee.
   */
  userAgent?: string;

  //
  // @type {string} proxy - Format: login:password@151.142.23.32:3128
  // More information about the proxy [here] (/en/api/proxy).
  //
  proxy?: string;

  /**
   * @type {string} proxyType - Your proxy type: : HTTP, HTTPS, SOCKS4, SOCKS5.
   */
  proxyType?: ProxyTypes;

  /**
   * @type {number} version - Recaptcha version
   */
  version?: ReCaptchaVersions;

  /**
   * @type {boolean} isString - only used for correctly working method overloading intellisense
   */
  isString: TaskSolutionTypes["isString"] = true;
}
