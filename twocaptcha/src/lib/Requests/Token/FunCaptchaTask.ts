import type {
  ProxyRequiredTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { FunCaptchaTaskBaseParams } from "./Base/_FunCaptchaTaskBase";
import { FunCaptchaTaskBase } from "./Base/_FunCaptchaTaskBase";

type FunCaptchaTaskParams = ProxyRequiredTaskParams<FunCaptchaTaskBaseParams>;

/**
 * Token-based method for automated solving of ArkoseLabs CAPTCHA (previously FunCaptcha).
 * @extends {FunCaptchaTaskBase}
 * {@link https://2captcha.com/api-docs/arkoselabs-funcaptcha}
 */
export class FunCaptchaTask extends FunCaptchaTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isFunCaptchaTask - Only used for correct method overloading intellisense
  */
  readonly _isFunCaptchaTask: _IsTaskType["_isFunCaptchaTask"] = true;

  /**
  * Create FunCaptchaTask
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
  constructor(params: FunCaptchaTaskParams) {
    super(params, "FunCaptchaTask");
  }
}