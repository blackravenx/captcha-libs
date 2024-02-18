import type {
  ProxylessTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { LeminTaskBaseParams } from "./Base/_LeminTaskBase";
import { LeminTaskBase } from "./Base/_LeminTaskBase";

type LeminTaskProxylessParams = ProxylessTaskParams<LeminTaskBaseParams>;

/**
 * Token-based method to bypass Lemin Puzzle CAPTCHA.
 * @extends {LeminTaskBase}
 * {@link https://2captcha.com/api-docs/lemin}
 */
export class LeminTaskProxyless extends LeminTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isLeminTaskProxyless - Only used for correct method overloading intellisense
  */
  readonly _isLeminTaskProxyless = true;

  /**
  * Create LeminTaskProxyless
  * {@link https://2captcha.com/api-docs/lemin}
  * @param {Object} params - LeminTaskProxylessParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.captchaId] - Lemin captchaId value. Unique for a website.
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {string} [params.divId] - The id of captcha parent div element
  * @param {string} [params.leminApiServerSubdomain] - API domain used to load the captcha scripts. Default: https://api.leminnow.com/
  */
  constructor(params: LeminTaskProxylessParams) {
    super(params, "LeminTaskProxyless");
  }
}