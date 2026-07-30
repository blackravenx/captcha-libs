import type { ProxyCredentials, TaskTypes } from "../../_BaseTaskRequest";

import { BaseTask } from "../../_BaseTaskRequest";

export type RecaptchaV2TaskBaseParams = Partial<ProxyCredentials> & {
  "apiDomain"?: string;
  // @deprecated
  "cookies"?: Array<Record<string, string>>;
  "enterprisePayload"?: Record<string, string>;
  "isInvisible"?: boolean;
  "pageAction"?: string;
  "isSession"?: boolean;
  // @deprecated
  "userAgent"?: string;
  "websiteKey": string;
  "websiteURL": string;
  "recaptchaDataSValue"?: string
};

/**
 * @classdesc Base class for Recaptcha V2 task
 * @class
 * @see {@link https://docs.capsolver.com/en/guide/captcha/ReCaptchaV2}
 * @extends {BaseTask}
 */
export abstract class RecaptchaV2TaskBase extends BaseTask implements RecaptchaV2TaskBaseParams {

  /**
   * Create RecaptchaV2TaskBase
   * @see {@link https://docs.capsolver.com/en/guide/captcha/ReCaptchaV2}
   * @param {object} params - RecaptchaV2TaskBaseParams
   * @param {string} params.apiDomain - Domain address from which to load reCAPTCHA Enterprise. For example: http://www.google.com/, http://www.recaptcha.net/. Don't use a parameter if you don't know why it's needed.
   * @param {object=} params.enterprisePayload - For ReCaptchaV2 enterprise version, if there is an s parameter in the payload of the /anchor endpoint, please submit its value
   * @param {string} params.websiteURL - Web address of the website using recaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} params.websiteKey - The domain public key, rarely updated. (Ex: b989d9e8-0d14-41sda0-870f-97b5283ba67d)
   * @param {string=} params.pageAction - For ReCaptchaV2, if there is an sa parameter in the payload of the /anchor endpoint, please submit its value
   * @param {boolean=} params.isInvisible - Pass true if there is no “I’m not a robot” checkbox but the challenge will still appear, usually required in v2 invisible mode.
   * @param {boolean} [params.isSession] - Session mode, when enabled, will return a recaptcha-ca-t value, which is used as a cookie. It usually appears in v3. Note: Some websites require a recaptcha-ca-e value, which usually appears in v2. If this value is present, it will be automatically returned without any additional parameter settings.
   * @param {string=} [params.recaptchaDataSValue] - For ReCaptchaV2 normal version, if there is an s parameter in the payload of the /anchor endpoint, please submit its value
   * @param {string=} params.proxy - proxy
   * @param {string} [params.proxyAddress] - proxyAddress
   * @param {string} [params.proxyLogin] - proxyLogin
   * @param {string} [params.proxyPassword] - proxyPassword
   * @param {number} [params.proxyPort] - proxyPort
   * @param {string} [params.proxyType] - proxyType
   */
  constructor ({ apiDomain, cookies, isInvisible = false, websiteKey, websiteURL, pageAction, enterprisePayload, userAgent, isSession, proxyAddress, proxyLogin, proxyPassword, proxyPort, proxyType, proxy, recaptchaDataSValue }: RecaptchaV2TaskBaseParams, type: TaskTypes) {
    super({ type });

    this.apiDomain = apiDomain;

    this.cookies = cookies;

    this.websiteKey = websiteKey;

    this.websiteURL = websiteURL;

    this.pageAction = pageAction;

    this.isInvisible = isInvisible;

    this.enterprisePayload = enterprisePayload;

    this.userAgent = userAgent;

    this.isSession = isSession;

    this.proxy = proxy;

    this.proxyAddress = proxyAddress;

    this.proxyLogin = proxyLogin;

    this.proxyPort = proxyPort;

    this.proxyType = proxyType;

    this.proxyPassword = proxyPassword;

    this.recaptchaDataSValue = recaptchaDataSValue;
  }

  /**
   * @type {string} apiDomain - apiDomain - Domain address from which to load reCAPTCHA Enterprise. For example: http://www.google.com/, http://www.recaptcha.net/. Don't use a parameter if you don't know why it's needed.
   */
  apiDomain?: string;

  /**
   * @deprecated @type {object} cookies - cookies
   */
  cookies?: Record<string, string>[];

  /**
   * @type {Object} enterprisePayload - For ReCaptchaV2 enterprise version, if there is an s parameter in the payload of the /anchor endpoint, please submit its value
   */
  enterprisePayload?: Record<string, string>;

  /**
   * @type {boolean} isInvisible - Pass true if there is no “I’m not a robot” checkbox but the challenge will still appear, usually required in v2 invisible mode.
   */
  isInvisible?: boolean;

  /**
   * @type {string} pageAction - For ReCaptchaV2, if there is an sa parameter in the payload of the /anchor endpoint, please submit its value
   */
  pageAction?: string;

  /**
   * @type {string} proxy - proxy
   */
  proxy?: string;

  /**
   * @deprecated
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

  /**
   * @type {boolean} isSession -Session mode, when enabled, will return a recaptcha-ca-t value, which is used as a cookie. It usually appears in v3.
    Note: Some websites require a recaptcha-ca-e value, which usually appears in v2. If this value is present, it will be automatically returned without any additional parameter settings.
   */
  isSession?: boolean;

  /**
   * @type {string} recaptchaDataSValue - For ReCaptchaV2 normal version, if there is an s parameter in the payload of the /anchor endpoint, please submit its value
   */
  recaptchaDataSValue?: string;
  
  proxyAddress?: string;

  proxyLogin?: string;

  proxyPassword?: string;

  proxyPort?: number;

  proxyType?: ProxyCredentials["proxyType"];
}
