import {
  ProxyRequiredTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import {
  CapyTaskBase, CapyTaskBaseParams
} from "./_CapyTaskBase";

type CapyTaskParams = ProxyRequiredTaskParams<CapyTaskBaseParams>;

/**
 * Token-based method for automated solving of Capy Puzzle Captcha.
 * @extends {CapyTaskBase}
 * {@link https://2captcha.com/api-docs/capy-puzzle-captcha}
 */
export class CapyTask extends CapyTaskBase implements _IsTaskType {

  /**
   * @type {boolean} _isCapyTask - Only used for correct method overloading intellisense
  */
  readonly _isCapyTask = true;

  /**
  * Create CapyTask
  * {@link https://2captcha.com/api-docs/capy-puzzle-captcha}
  * @param {Object} params - CapyTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - Capy Puzzle Captcha captchakey.
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor(params: CapyTaskParams) {
    super(params, "CapyTask");
  }
}