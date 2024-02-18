
import type {
  ProxyRequiredTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { AntiImpervaTaskBaseParams } from "./Base/_AntiImpervaBase";
import { AntiImpervaTaskBase } from "./Base/_AntiImpervaBase";

type AntiImpervaTaskParams = ProxyRequiredTaskParams<AntiImpervaTaskBaseParams>;

/**
 * @classdesc AntiImpervaTask this task type require your own proxies.
 * @class
 * @extends {AntiImpervaTaskBase}
 * {@link https://docs.capsolver.com/guide/antibots/imperva.html}
 */
export class AntiImpervaTask extends AntiImpervaTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isAntiImpervaTask - Only used for correct method overloading intellisense
  */
  readonly _isAntiImpervaTask: _IsTaskType["_isAntiImpervaTask"] = true;

  /**
   * Create AntiImpervaTask
   * {@link https://docs.capsolver.com/guide/antibots/imperva.html}
   * @param {object} params -	AntiImpervaTaskParams
   * @param {string} [params.websiteUrl] -	The website url
   * @param {string} [params.userAgent] - browser userAgent
   * @param {boolean} [params.utmvc] - if type is AntiImpervaTask,you need submit it. Default = false
   * @param {boolean} [params.reese84=false] - if cookie contains incap_see_xxx,nlbi_xxx,visid_inap_xxx,mean is true. Default = false
   * @param {string} [params.reeseScriptUrl] - The URL typically has several dashes (-) and random words
   * @param {string} [params.reeseToken] - If your reeseToken has expired, you can send current reeseToken to obtain a new
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.proxyAddress] - proxyAddress
   * @param {string} [params.proxyLogin] - proxyLogin
   * @param {string} [params.proxyPassword] - proxyPassword
   * @param {number} [params.proxyPort] - proxyPort
   * @param {string} [params.proxyType] - proxyType
   */
  constructor(params: AntiImpervaTaskParams) {
    super(params, "AntiImpervaTask");
  }
}