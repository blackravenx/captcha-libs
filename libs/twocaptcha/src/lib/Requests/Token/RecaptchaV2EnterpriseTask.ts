import type {
  ProxyRequiredTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { RecaptchaV2TaskBaseParams } from "./Base/_RecaptchaV2TaskBase";
import { RecaptchaV2TaskBase } from "./Base/_RecaptchaV2TaskBase";

export interface _RecaptchaV2EnterpriseTaskParams {
  enterprisePayload?: Record<string, string>;
}

type RecaptchaV2EnterpriseTaskParams = _RecaptchaV2EnterpriseTaskParams & ProxyRequiredTaskParams<RecaptchaV2TaskBaseParams>;

/**
 * Token-based method for automated solving of reCAPTCHA V2.
 * @extends {RecaptchaV2TaskBase}
 * {@link https://2captcha.com/api-docs/recaptcha-v2-enterprise}
 */
export class RecaptchaV2EnterpriseTask extends RecaptchaV2TaskBase implements _RecaptchaV2EnterpriseTaskParams, _IsTaskType {

  /**
  * @type {boolean} _isRecaptchaV2EnterpriseTask - Only used for correct method overloading intellisense
  */
  readonly _isRecaptchaV2EnterpriseTask: _IsTaskType["_isRecaptchaV2EnterpriseTask"] = true;

  /**
   * @type {string} enterprisePayload - Additional parameters passed to grecaptcha.enterprise.render call. For example, there can be an object containing s value
   */
  enterprisePayload?: Record<string, string>;

  /**
  * Create RecaptchaV2EnterpriseTask
  * {@link https://2captcha.com/api-docs/recaptcha-v2-enterprise}
  * @param {Object} params - RecaptchaV2EnterpriseTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - reCAPTCHA sitekey. Can be found inside data-sitekey property of the reCAPTCHA div element or inside k parameter of the requests to reCAPTHCHA API. You can also use the script to find the value
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {boolean}[params.isInvisible] - Pass true for Invisible version of reCAPTCHA - a case when you don't see the checkbox, but the challenge appears. Mostly used with a callback function
  * @param {string} [params.recaptchaDataSValue] - The value of data-s parameter. Can be required to bypass the captcha on Google services
  * @param {string} [params.enterprisePayload] - Additional parameters passed to grecaptcha.enterprise.render call. For example, there can be an object containing s value
  * @param {string} [params.apiDomain] - Domain used to load the captcha: google.com or recaptcha.net. Default value: google.com
  * @param {string} [params.cookies] - Your cookies will be set in a browser of our worker. Suitable for captcha on Google services. The format is: key1=val1; key2=val2
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  *
  */
  constructor({
    enterprisePayload, ...params
  }: RecaptchaV2EnterpriseTaskParams) {
    super(params, "RecaptchaV2EnterpriseTask");
    this.enterprisePayload = enterprisePayload;
  }
}