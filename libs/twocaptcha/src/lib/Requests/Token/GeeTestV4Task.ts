import type {
  ProxyRequiredTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { GeeTestV4TaskParams as _GeeTestV4TaskParams } from "./Base/_GeeTestTaskBase";
import { GeeTestV4TaskBase } from "./Base/_GeeTestV4TaskBase";

type GeeTestV4TaskParams = ProxyRequiredTaskParams<_GeeTestV4TaskParams>;

/**
 * Token-based method to bypass GeeTest v4.
 * @extends {GeeTestV4TaskBase}
 * {@link https://2captcha.com/api-docs/geetest}
 */
export class GeeTestV4Task extends GeeTestV4TaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isGeeTestTask - Only used for correct method overloading intellisense
  */
  readonly _isGeeTestTask: _IsTaskType["_isGeeTestTask"] = true;

  /**
  * Create GeeTestV4Task
  * {@link https://2captcha.com/api-docs/geetest}
  * @param {Object} params - GeeTestV4TaskParams
  * @param {object} [params.initParameters] - Required for GeeTest V4. Captcha parameters passed to initGeetest4 call, must contain captcha_id value
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor(params: GeeTestV4TaskParams) {
    super(params, "GeeTestTask");
  }
}