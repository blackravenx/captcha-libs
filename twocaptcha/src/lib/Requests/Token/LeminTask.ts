import type {
  ProxyRequiredTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { LeminTaskBaseParams } from "./Base/_LeminTaskBase";
import { LeminTaskBase } from "./Base/_LeminTaskBase";

type LeminTaskParams = ProxyRequiredTaskParams<LeminTaskBaseParams>;

/**
 * Token-based method to bypass Lemin Puzzle CAPTCHA.
 * @extends {LeminTaskBase}
 * {@link https://2captcha.com/api-docs/lemin}
 */
export class LeminTask extends LeminTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isLeminTask - Only used for correct method overloading intellisense
  */
  readonly _isLeminTask = true;

  /**
  * Create LeminTask
  * {@link https://2captcha.com/api-docs/lemin}
  * @param {Object} params - LeminTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.captchaId] - Lemin captchaId value. Unique for a website.
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {string} [params.divId] - The id of captcha parent div element
  * @param {string} [params.leminApiServerSubdomain] - API domain used to load the captcha scripts. Default: https://api.leminnow.com/
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor(params: LeminTaskParams) {
    super(params, "LeminTask");
  }
}