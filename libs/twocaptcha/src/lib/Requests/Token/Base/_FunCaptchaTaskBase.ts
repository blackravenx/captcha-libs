import type {
  ProxyCredentials, ProxyTypes, TaskTypes
} from "../../_BaseTaskRequest";
import { BaseTask } from "../../_BaseTaskRequest";

export type FunCaptchaTaskBaseParams = Partial<ProxyCredentials> & {
  data?: string;
  funcaptchaApiJSSubdomain?: string;
  userAgent?: string;
  websitePublicKey: string;
  websiteURL: string;
};

/**
 * Base class for FunCaptcha
 * @extends {BaseTask}
 * {@link https://2captcha.com/api-docs/arkoselabs-funcaptcha}
 */
export abstract class FunCaptchaTaskBase extends BaseTask implements FunCaptchaTaskBaseParams {

  /**
   * @type {string} websiteURL - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  websiteURL: string;

  /**
   * @type {string} websitePublicKey - ArkoseLabs CAPTCHA public key. The public key can be found in the value of the data-pkey parameter of the div element FunCaptcha, or you can find an element named (name) fc-token and from its value cut out the key that is specified after pk.
   */
  websitePublicKey: string;

  /**
   * @type {string} funcaptchaApiJSSubdomain - Custom subdomain used to load the captcha widget, like: sample-api.arkoselabs.com
   */
  funcaptchaApiJSSubdomain?: string;

  /**
   * @type {string} data - Additional data payload object converted to a string with JSON.stringify
   */
  data?: string;

  /**
   * @type {string} userAgent - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
   */
  userAgent?: string;
  proxyAddress?: string;
  proxyLogin?: string;
  proxyPassword?: string;
  proxyPort?: number;
  proxyType?: ProxyTypes;

  /**
  * FunCaptchaTaskBase
  * {@link https://2captcha.com/api-docs/arkoselabs-funcaptcha}
  * @param {Object} params - FunCaptchaTaskBaseParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websitePublicKey] - ArkoseLabs CAPTCHA public key. The public key can be found in the value of the data-pkey parameter of the div element FunCaptcha, or you can find an element named (name) fc-token and from its value cut out the key that is specified after pk.
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {string} [params.data] - Additional data payload object converted to a string with JSON.stringify
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor({
    websitePublicKey, websiteURL, userAgent, funcaptchaApiJSSubdomain, data, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword
  }: FunCaptchaTaskBaseParams, type: TaskTypes) {
    super({ type });
    this.websitePublicKey = websitePublicKey;
    this.websiteURL = websiteURL;
    this.proxyAddress = proxyAddress;
    this.proxyLogin = proxyLogin;
    this.proxyPassword = proxyPassword;
    this.proxyPort = proxyPort;
    this.proxyType = proxyType;
    this.funcaptchaApiJSSubdomain = funcaptchaApiJSSubdomain;
    this.userAgent = userAgent;
    this.data = data;
  }

}