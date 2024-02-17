
import type {
  ProxylessTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { AntiImpervaTaskBaseParams } from "./_AntiImpervaBase";
import { AntiImpervaTaskBase } from "./_AntiImpervaBase";

type AntiImpervaTaskProxyLessParams = ProxylessTaskParams<Omit<AntiImpervaTaskBaseParams, "_endpoint" | "type">>;

/**
 * @classdesc AntiImpervaTaskProxyLess this task type require your own proxies.
 * @class
 * @extends {AntiImpervaTaskBase}
 * {@link https://docs.capsolver.com/guide/antibots/imperva.html}
 */
export class AntiImpervaTaskProxyLess extends AntiImpervaTaskBase implements _IsTaskType {

  /**
 * @type {boolean} _isAntiImpervaTaskProxyLess - Only used for correct method overloading intellisense
 */
  readonly _isAntiImpervaTaskProxyLess = true;

  /**
   * Create AntiImpervaTaskProxyLess
   * {@link https://docs.capsolver.com/guide/antibots/imperva.html}
   * @param {object} params -	AntiImpervaTaskProxyLessParams
   * @param {string} [params.websiteUrl] -	The website url
   * @param {string} [params.userAgent] - browser userAgent
   * @param {string} [params.utmvc] - if type is AntiImpervaTask,you need submit it
   * @param {boolean} [params.reese84=false] - if cookie contains incap_see_xxx,nlbi_xxx,visid_inap_xxx,mean is true
   * @param {string} [params.reeseScriptUrl] - The URL typically has several dashes (-) and random words
   * @param {string} [params.reeseToken] - If your reeseToken has expired, you can send current reeseToken to obtain a new
   */
  constructor(params: AntiImpervaTaskProxyLessParams) {
    super(params, "AntiImpervaTaskProxyLess");
  }
}