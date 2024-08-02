import type {
  ProxylessTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { CapyTaskBaseParams } from "./Base/_CapyTaskBase";
import { CapyTaskBase } from "./Base/_CapyTaskBase";

type CapyTaskProxylessParams = ProxylessTaskParams<CapyTaskBaseParams>;

/**
 * Token-based method for automated solving of Capy Puzzle Captcha.
 * @extends {CapyTaskBase}
 * {@link https://2captcha.com/api-docs/capy-puzzle-captcha}
 */
export class CapyTaskProxyless extends CapyTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isCapyTaskProxyless - Only used for correct method overloading intellisense
  */
  readonly _isCapyTaskProxyless: _IsTaskType["_isCapyTaskProxyless"] = true;

  /**
  * Create CapyTaskProxyless
  * {@link https://2captcha.com/api-docs/capy-puzzle-captcha}
  * @param {Object} params - CapyTaskProxylessParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - Capy Puzzle Captcha captchakey.
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  */
  constructor(params: CapyTaskProxylessParams) {
    super(params, "CapyTaskProxyless");
  }
}