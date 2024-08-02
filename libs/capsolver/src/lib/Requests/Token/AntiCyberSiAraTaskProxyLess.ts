
import type {
  ProxylessTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { AntiCyberSiAraTaskBaseParams } from "./Base/_AntiCyberSiAraBase";
import { AntiCyberSiAraTaskBase } from "./Base/_AntiCyberSiAraBase";

type AntiCyberSiAraTaskProxyLessParams = ProxylessTaskParams<AntiCyberSiAraTaskBaseParams>;

/**
 * @classdesc AntiCyberSiAraTaskProxyLess this task type don't require your own proxies.
 * @class
 * @extends {AntiCyberSiAraTaskBase}
 * {@link https://docs.capsolver.com/guide/captcha/CyberSiara.html}
 * @deprecated deleted from service support
 */
export class AntiCyberSiAraTaskProxyLess extends AntiCyberSiAraTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isAntiCyberSiAraTaskProxyLess - Only used for correct method overloading intellisense
  */
  readonly _isAntiCyberSiAraTaskProxyLess: _IsTaskType["_isAntiCyberSiAraTaskProxyLess"] = true;

  /**
   * Create AntiCyberSiAraTaskProxyLess
   * {@link https://docs.capsolver.com/guide/captcha/CyberSiara.html}
   * @param {object} params - AntiCyberSiAraTaskProxyLessParams
   * @param {string} [params.SlideMasterUrlId] - you can get MasterUrlId param form api/CyberSiara/GetCyberSiara endpoint
   * @param {string} [params.userAgent] - browser userAgent,you need submit your userAgent
   * @param {string} [params.websiteURL] - the current website home page url
   */
  constructor(params: AntiCyberSiAraTaskProxyLessParams) {
    super(params, "AntiCyberSiAraTaskProxyLess");
  }
}