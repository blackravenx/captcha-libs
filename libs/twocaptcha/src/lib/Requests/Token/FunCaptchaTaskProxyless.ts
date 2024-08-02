import type {
  ProxylessTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { FunCaptchaTaskBaseParams } from "./Base/_FunCaptchaTaskBase";
import { FunCaptchaTaskBase } from "./Base/_FunCaptchaTaskBase";

type FunCaptchaTaskProxylessParams = ProxylessTaskParams<FunCaptchaTaskBaseParams>;

/**
 * Token-based method for automated solving of ArkoseLabs CAPTCHA (previously FunCaptcha).
 * @extends {FunCaptchaTaskBase}
 * {@link https://2captcha.com/api-docs/arkoselabs-funcaptcha}
 */
export class FunCaptchaTaskProxyless extends FunCaptchaTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isFunCaptchaTaskProxyless - Only used for correct method overloading intellisense
  */
  readonly _isFunCaptchaTaskProxyless: _IsTaskType["_isFunCaptchaTaskProxyless"] = true;

  /**
  * Create FunCaptchaTaskProxyless
  * {@link https://2captcha.com/api-docs/arkoselabs-funcaptcha}
  * @param {Object} params - FunCaptchaTaskBaseParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websitePublicKey] - ArkoseLabs CAPTCHA public key. The public key can be found in the value of the data-pkey parameter of the div element FunCaptcha, or you can find an element named (name) fc-token and from its value cut out the key that is specified after pk.
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {string} [params.data] - Additional data payload object converted to a string with JSON.stringify
  * @param {string} [params.websitePublicKey] - ArkoseLabs CAPTCHA public key. The public key can be found in the value of the data-pkey parameter of the div element FunCaptcha, or you can find an element named (name) fc-token and from its value cut out the key that is specified after pk.
  */
  constructor(params: FunCaptchaTaskProxylessParams) {
    super(params, "FunCaptchaTaskProxyless");
  }
}