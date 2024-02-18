import type {
  ProxyRequiredTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { GeeTestV3TaskParams as _GeeTestV3TaskParams } from "./Base/_GeeTestTaskBase";
import { GeeTestV3TaskBase } from "./Base/_GeeTestV3TaskBase";

type GeeTestV3TaskParams = ProxyRequiredTaskParams<_GeeTestV3TaskParams>;

/**
 * Token-based method to bypass GeeTest v3.
 * @extends {GeeTestV3TaskBase}
 * {@link https://2captcha.com/api-docs/geetest}
 */
export class GeeTestV3Task extends GeeTestV3TaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isGeeTestTask - Only used for correct method overloading intellisense
  */
  readonly _isGeeTestTask = true;

  /**
  * Create GeeTestV3Task
  * {@link https://2captcha.com/api-docs/geetest}
  * @param {Object} params - GeeTestV3TaskBaseParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.gt] -	GeeTest gt value
  * @param {boolean}[params.challenge] - 	GeeTest challenge value.
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {string} [params.geetestApiServerSubdomain] - Only for GeeTest V3. Custom GeeTest API domain, for example: api-na.geetest.com. Can be defined inside initGeetest call. Also you can check the domain used to load the scripts, the default domain is api.geetest.com.
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor(params: GeeTestV3TaskParams) {
    super(params, "GeeTestTask");
  }
}