
import type { ProxylessTaskParams } from "../_BaseTaskRequest";
import type { AntiCyberSiAraTaskBaseParams } from "./_AntiCyberSiAraBase";
import { AntiCyberSiAraTaskBase } from "./_AntiCyberSiAraBase";

type AntiCyberSiAraTaskProxyLessParams = ProxylessTaskParams<Omit<AntiCyberSiAraTaskBaseParams, "type">>;

/**
 * @classdesc AntiCyberSiAraTaskProxyLess this task type don't require your own proxies.
 * @class
 * @extends {AntiCyberSiAraTaskBase}
 * {@link https://docs.capsolver.com/guide/captcha/CyberSiara.html}
 */
export class AntiCyberSiAraTaskProxyLess extends AntiCyberSiAraTaskBase {

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