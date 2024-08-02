import type {
  ProxyRequiredTaskParams, ProxyTypes, TaskTypes
} from "../../_BaseTaskRequest";
import { BaseTask } from "../../_BaseTaskRequest";

 type _DataDomeSliderTaskBaseParams = {
   captchaUrl: string;
   userAgent?: string;
   websiteURL: string;
 };

export type DataDomeSliderTaskBaseParams = ProxyRequiredTaskParams<_DataDomeSliderTaskBaseParams>;

/**
 * Base class for DataDomeSliderTask
 * @extends {BaseTask}
 * {@link https://2captcha.com/api-docs/datadome-slider-captcha}
 */
export abstract class DataDomeSliderTaskBase extends BaseTask implements DataDomeSliderTaskBaseParams {

  /**
   * @type {string} websiteURL - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
   */
  websiteURL: string;

  /**
   * @type {string} captchaUrl - The value of the src parameter for the iframe element containing the captcha on the page.
   */
  captchaUrl: string;

  /**
   * @type {string} userAgent - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents. It is important to use the supported User-Agent values. @see https://2captcha.com/api-docs/datadome-slider-captcha
   */
  userAgent?: string;
  proxyAddress: string;
  proxyLogin?: string;
  proxyPassword?: string;
  proxyPort: number;
  proxyType: ProxyTypes;

  /**
  * DataDomeSliderTaskBase
  * {@link https://2captcha.com/api-docs/datadome-slider-captcha}
  * @param {Object} params - DataDomeSliderTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.captchaUrl] - The value of the src parameter for the iframe element containing the captcha on the page.
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents. It is important to use the supported User-Agent values. @see https://2captcha.com/api-docs/datadome-slider-captcha
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor({
    captchaUrl, websiteURL, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword, userAgent
  }: DataDomeSliderTaskBaseParams, type: TaskTypes) {
    super({ type });
    this.captchaUrl = captchaUrl;
    this.websiteURL = websiteURL;
    this.proxyAddress = proxyAddress;
    this.proxyLogin = proxyLogin;
    this.proxyPassword = proxyPassword;
    this.proxyPort = proxyPort;
    this.proxyType = proxyType;
    this.userAgent = userAgent;
  }
}