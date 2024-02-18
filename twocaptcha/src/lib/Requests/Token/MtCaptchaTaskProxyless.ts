import type {
  ProxylessTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { CapyTaskBaseParams } from "./Base/_CapyTaskBase";
import { CapyTaskBase } from "./Base/_CapyTaskBase";

type MtCaptchaTaskProxylessParams = ProxylessTaskParams<CapyTaskBaseParams>;

/**
 * Token-based method for automated solving of Capy Puzzle Captcha.
 * @extends {CapyTaskBase}
 * {@link https://2captcha.com/api-docs/mtcaptcha}
 */
export class MtCaptchaTaskProxyless extends CapyTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isMtCaptchaTaskProxyless - Only used for correct method overloading intellisense
  */
  readonly _isMtCaptchaTaskProxyless = true;

  /**
  * Create MtCaptchaTaskProxyless
  * {@link https://2captcha.com/api-docs/mtcaptcha}
  * @param {Object} params - MtCaptchaTaskProxylessParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - The MTCaptcha sitekey value found in the page code.
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  */
  constructor(params: MtCaptchaTaskProxylessParams) {
    super(params, "MtCaptchaTaskProxyless");
  }
}