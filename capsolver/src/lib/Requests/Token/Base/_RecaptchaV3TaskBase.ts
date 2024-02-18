import type {
  ProxyCredentials, TaskTypes
} from "../../_BaseTaskRequest";
import { BaseTask } from "../../_BaseTaskRequest";

export type RecaptchaV3TaskBaseParams = Partial<ProxyCredentials> & {
  anchor?: string;
  apiDomain?: string;
  cookies?: Array<Record<string, string>>;
  enterprisePayload?: Record<string, string>;
  minScore?: number;
  pageAction?: string;
  proxy?: string;
  reload?: string;
  userAgent?: string;
  websiteKey: string;
  websiteURL: string;
};

/**
 * @classdesc Base class for Recaptcha V3 task
 * @class
 * {@link https://docs.capsolver.com/guide/captcha/ReCaptchaV3.html}
 * @extends {BaseTask}
 */
export abstract class RecaptchaV3TaskBase extends BaseTask implements RecaptchaV3TaskBaseParams {

  /**
   * Create RecaptchaV3TaskBase
   * {@link https://docs.capsolver.com/guide/captcha/ReCaptchaV3.html}
   * @param {Object} params - RecaptchaV3TaskBaseParams
   * @param {string} [params.apiDomain] - Domain address from which to load reCAPTCHA Enterprise. For example: http://www.google.com/, http://www.recaptcha.net/. Don't use a parameter if you don't know why it's needed.
   * @param {Object=} [params.enterprisePayload] - Enterprise Payload
   * @param {Object=} [params.cookies] - cookies
   * @param {string} [params.websiteURL] - Web address of the website using recaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} [params.websiteKey] - The domain public key, rarely updated. (Ex: b989d9e8-0d14-41sda0-870f-97b5283ba67d)
   * @param {string=} [params.pageAction] - Widget action value. Website owner defines what user is doing on the page through this parameter. Default value: verify
   * @param {number=} [params.minScore] - Value from 0.1 to 0.9.
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.proxyAddress] - proxyAddress
   * @param {string} [params.proxyLogin] - proxyLogin
   * @param {string} [params.proxyPassword] - proxyPassword
   * @param {string} [params.proxyPort] - proxyPort
   * @param {string} [params.proxyType] - proxyType
   */
  constructor({
    apiDomain, cookies, websiteKey, websiteURL, pageAction, proxy, minScore, enterprisePayload, userAgent, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword
  }: RecaptchaV3TaskBaseParams, type: TaskTypes) {
    super({ type });
    this.apiDomain = apiDomain;
    this.cookies = cookies;
    this.websiteKey = websiteKey;
    this.websiteURL = websiteURL;
    this.pageAction = pageAction;
    this.proxy = proxy;
    this.minScore = minScore;
    this.enterprisePayload = enterprisePayload;
    this.userAgent = userAgent;
    this.proxyAddress = proxyAddress;
    this.proxyLogin = proxyLogin;
    this.proxyPort = proxyPort;
    this.proxyType = proxyType;
    this.proxyPassword = proxyPassword;
  }

  /**
   * Domain address from which to load reCAPTCHA Enterprise. For example: http://www.google.com/, http://www.recaptcha.net/. Don't use a parameter if you don't know why it's needed.
   */
  apiDomain?: string;

  /**
   * Cookies
   */
  cookies?: Record<string, string>[];

  /**
   * Enterprise Payload
   */
  enterprisePayload?: Record<string, string>;

  /**
  * @type {string} pageAction - Widget action value. Website owner defines what user is doing on the page through this parameter. Default value: verify Example:
  */
  pageAction?: string;

  /**
   * @type {string} proxy - proxy
   */
  proxy?: string;

  /**
   * @type {string} userAgent - Browser's User-Agent which is used in emulation. It is required that you use a signature of a modern browser, otherwise Google will ask you to "update your browser".
   */
  userAgent?: string;

  /**
   * @type {string} websiteKey - The domain public key, rarely updated. (Ex: b989d9e8-0d14-41sda0-870f-97b5283ba67d)
   */
  websiteKey: string;

  /**
   * @type {string} websiteKey - Web address of the website using hcaptcha, generally it's fixed value.
   */
  websiteURL: string;

  /**
   * @type {number} minScore - description Value from 0.1 to 0.9.
   */
  minScore?: number;
  proxyAddress?: string;
  proxyLogin?: string;
  proxyPassword?: string;
  proxyPort?: number;
  proxyType?: ProxyCredentials["proxyType"];
}

