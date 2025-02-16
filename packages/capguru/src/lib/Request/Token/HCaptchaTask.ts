import type { BaseParams, ProxyTypes, TaskSolutionTypes } from "../_BaseTaskRequest";

import { BaseTask } from "../_BaseTaskRequest";

export type HCaptchaParams = Omit<BaseParams, "method"> & {
  "cookies"?: string;
  "pageurl": string;
  "proxy"?: string;
  "proxyType"?: ProxyTypes;
  "sitekey": string;
  "userAgent"?: string;
};

/**
 * @classdesc HCaptcha Task
 * @class
 * @extends {Task}
 * @see {@link https://docs.cap.guru/en/apitoken/hcap.html}
 */
export class HCaptchaTask extends BaseTask implements HCaptchaParams, TaskSolutionTypes {

  //
  // Create HCaptchaTask
  // {@link https://docs.cap.guru/en/apitoken/hcap.html}
  // @param {HCaptchaParams} params - params
  // @param {string} [params.sitekey] - The value of the parameter k or data-sitekey that you found in the page code. For example 93d2dffa-6cad-4031-9c00-4741a03c569d
  // @param {string} [params.pageurl] - Full URL of the page where you are solving hCaptcha
  // For example http://learn.captcha.guru/ln/hcaptcha /
  // @param {string} [params.cookies] - Your cookies that will be used by the employee to solve the captcha.
  // @param {string} [params.userAgent] - We substitute your userAgent for the employee.
  // @param {string} [params.proxy] - Format: login:password@151.142.23.32:3128
  // @param {string} [params.proxyType] - Your proxy type: : HTTP, HTTPS, SOCKS4, SOCKS5.
  //
  constructor ({ sitekey, pageurl, proxy, proxyType, userAgent, cookies }: HCaptchaParams) {
    super({ "method": "hcaptcha" });

    this.sitekey = sitekey;

    this.pageurl = pageurl;

    this.proxy = proxy;

    this.proxyType = proxyType;

    this.userAgent = userAgent;

    this.cookies = cookies;
  }

  //
  // @type {string} sitekey - The value of the parameter k or data-sitekey that you found in the page code
  // For example 93d2dffa-6cad-4031-9c00-4741a03c569d
  //
  sitekey: string;

  //
  // @type {string} pageurl - Full URL of the page where you are solving hCaptcha
  // For example http://learn.captcha.guru/ln/hcaptcha/
  //
  pageurl: string;

  /**
   * @type {string} cookies - Your cookies that will be used by the employee to solve the captcha.
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
   * @type {boolean} isString - only used for correctly working method overloading intellisense
   */
  isString: TaskSolutionTypes["isString"] = true;
}
