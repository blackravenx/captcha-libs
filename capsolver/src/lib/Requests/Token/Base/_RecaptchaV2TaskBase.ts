import type {
  ProxyCredentials, TaskTypes
} from "../../_BaseTaskRequest";
import { BaseTask } from "../../_BaseTaskRequest";

export type RecaptchaV2TaskBaseParams = Partial<ProxyCredentials> & {
  apiDomain?: string;
  cookies?: Array<Record<string, string>>;
  enterprisePayload?: Record<string, string>;
  isInvisible?: boolean;
  pageAction?: string;
  proxy?: string;
  userAgent?: string;
  websiteKey: string;
  websiteURL: string;
};

/**
 * @classdesc Base class for Recaptcha V2 task
 * @class
 * {@link https://docs.capsolver.com/guide/captcha/ReCaptchaV2.html}
 * @extends {BaseTask}
 */
export abstract class RecaptchaV2TaskBase extends BaseTask implements RecaptchaV2TaskBaseParams {

  /**
   * Create RecaptchaV2TaskBase
   * {@link https://docs.capsolver.com/guide/captcha/ReCaptchaV2.html}
   * @param {Object} params - RecaptchaV2TaskBaseParams
   * @param {string} params.apiDomain - Domain address from which to load reCAPTCHA Enterprise. For example: http://www.google.com/, http://www.recaptcha.net/. Don't use a parameter if you don't know why it's needed.
   * @param {Object=} params.enterprisePayload - Enterprise Payload
   * @param {Object=} params.cookies - cookies
   * @param {string} params.websiteURL - Web address of the website using recaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} params.websiteKey - The domain public key, rarely updated. (Ex: b989d9e8-0d14-41sda0-870f-97b5283ba67d)
   * @param {string=} params.pageAction - some site in anchor endpoint have sa param ,it's action value
   * @param {boolean=} params.isInvisible - if recaptcha don't have pageAction, reload request body content flag have "fi"
   * @param {string} [params.userAgent] - Browser's User-Agent which is used in emulation. It is required that you use a signature of a modern browser, otherwise Google will ask you to "update your browser".
   * @param {string=} params.proxy - proxy
   * @param {string} [params.proxyAddress] - proxyAddress
   * @param {string} [params.proxyLogin] - proxyLogin
   * @param {string} [params.proxyPassword] - proxyPassword
   * @param {number} [params.proxyPort] - proxyPort
   * @param {string} [params.proxyType] - proxyType
   */
  constructor({
    apiDomain, cookies, isInvisible = false, websiteKey, websiteURL, pageAction, enterprisePayload, userAgent, ...proxyObject
  }: RecaptchaV2TaskBaseParams, type: TaskTypes) {
    super({ type });
    this.apiDomain = apiDomain;
    this.cookies = cookies;
    this.websiteKey = websiteKey;
    this.websiteURL = websiteURL;
    this.pageAction = pageAction;
    this.isInvisible = isInvisible;
    this.enterprisePayload = enterprisePayload;
    this.userAgent = userAgent;

    this.proxy = proxyObject.proxy;
    this.proxyAddress = proxyObject.proxyAddress;
    this.proxyLogin = proxyObject.proxyLogin;
    this.proxyPort = proxyObject.proxyPort;
    this.proxyType = proxyObject.proxyType;
    this.proxyPassword = proxyObject.proxyPassword;
  }

  /**
   * @type {string} apiDomain - apiDomain - Domain address from which to load reCAPTCHA Enterprise. For example: http://www.google.com/, http://www.recaptcha.net/. Don't use a parameter if you don't know why it's needed.
   */
  apiDomain?: string;

  /**
   * @type {object} cookies - cookies
   */
  cookies?: Record<string, string>[];

  /**
   * @type {Object} enterprisePayload - Enterprise Payload
   */
  enterprisePayload?: Record<string, string>;

  /**
   * @type {boolean} isInvisible - if recaptcha don't have pageAction, reload request body content flag have "fi"
   */
  isInvisible?: boolean;

  /**
   * @type {string} pageAction - some site in anchor endpoint have sa param ,it's action value
   */
  pageAction?: string;

  /**
   * @type {string} proxy - proxy
   */
  proxy?: string;

  /**
   * @type {string} userAgent - Browser's User-Agent which is used in emulation. It is required that you use a signature of a modern browser, otherwise Google will ask you to "update your browser"
   */
  userAgent?: string;

  /**
   * @type {string} websiteKey - The domain public key, rarely updated. (Ex: b989d9e8-0d14-41sda0-870f-97b5283ba67d)
   */
  websiteKey: string;

  /**
   * @type {string} websiteURL - Web address of the website using recaptcha, generally it's fixed value. (Ex: https://google.com)
   */
  websiteURL: string;
  proxyAddress?: string;
  proxyLogin?: string;
  proxyPassword?: string;
  proxyPort?: number;
  proxyType?: ProxyCredentials["proxyType"];
}