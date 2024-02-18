import type {
  ProxyRequiredTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type {
  GeeTestV3TaskParams, GeeTestV4TaskParams
} from "./Base/_GeeTestTaskBase";
import { GeeTestTaskBase } from "./Base/_GeeTestTaskBase";

type GeeTestTaskParams = ProxyRequiredTaskParams<GeeTestV3TaskParams | GeeTestV4TaskParams>;

/**
 * Token-based method to bypass GeeTest
 * @extends {GeeTestTaskBase}
 * {@link https://2captcha.com/api-docs/geetest}
 */
export class GeeTestTask extends GeeTestTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isGeeTestTask - Only used for correct method overloading intellisense
  */
  readonly _isGeeTestTask = true;

  /**
  * Create GeeTestTask
  * {@link https://2captcha.com/api-docs/geetest}
  * @param {Object} params - GeeTestTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.gt] -	GeeTest gt value
  * @param {boolean}[params.challenge] - 	GeeTest challenge value.
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {object} [params.initParameters] - Required for GeeTest V4. Captcha parameters passed to initGeetest4 call, must contain captcha_id value, for example: {"captcha_id" : "e392e1d7fd421dc63325744d5a2b9c73"}
  * @param {string} [params.geetestApiServerSubdomain] - Only for GeeTest V3. Custom GeeTest API domain, for example: api-na.geetest.com. Can be defined inside initGeetest call. Also you can check the domain used to load the scripts, the default domain is api.geetest.com.
  * @param {number} [params.version] - Should be set to 4 for GeeTest V4. GeeTest version: 3 or 4
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor(params: GeeTestTaskParams) {
    super(params, "GeeTestTask");
  }
}