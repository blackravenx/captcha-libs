import type {
  ProxylessTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { GeeTestV4TaskParams as _GeeTestV4TaskParams } from "./Base/_GeeTestTaskBase";
import { GeeTestV4TaskBase } from "./Base/_GeeTestV4TaskBase";

type GeeTestV4TaskProxylessParams = ProxylessTaskParams<_GeeTestV4TaskParams>;

/**
 * Token-based method to bypass GeeTest v4.
 * @extends {GeeTestV4TaskBase}
 * {@link https://2captcha.com/api-docs/geetest}
 */
export class GeeTestV4TaskProxyless extends GeeTestV4TaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isGeeTestTaskProxyless - Only used for correct method overloading intellisense
  */
  readonly _isGeeTestTaskProxyless: _IsTaskType["_isGeeTestTaskProxyless"] = true;

  /**
  * Create GeeTestV4TaskProxyless
  * {@link https://2captcha.com/api-docs/geetest}
  * @param {Object} params - GeeTestV4TaskProxylessParams
  * @param {object} [params.initParameters] - Required for GeeTest V4. Captcha parameters passed to initGeetest4 call, must contain captcha_id value
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  */
  constructor(params: GeeTestV4TaskProxylessParams) {
    super(params, "GeeTestTaskProxyless");
  }
}