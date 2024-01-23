
import type { ProxyRequiredTaskParams } from "../_BaseTaskRequest";
import type { AntiCyberSiAraTaskBaseParams } from "./_AntiCyberSiAraBase";
import { AntiCyberSiAraTaskBase } from "./_AntiCyberSiAraBase";

type AntiCyberSiAraTaskParams = ProxyRequiredTaskParams<Omit<AntiCyberSiAraTaskBaseParams, "type">>;

/**
 * @classdesc AntiCyberSiAraTask this task type require your own proxies.
 * @class
 * @extends {AntiCyberSiAraTaskBase}
 * {@link https://docs.capsolver.com/guide/captcha/CyberSiara.html}
 */
export class AntiCyberSiAraTask extends AntiCyberSiAraTaskBase {

  /**
   * Create AntiCyberSiAraTask this task type require your own proxies.
   * {@link https://docs.capsolver.com/guide/captcha/CyberSiara.html}
   * @param {Object} params - AntiCyberSiAraTaskParams
   * @param {string} [params.SlideMasterUrlId] - you can get MasterUrlId param form api/CyberSiara/GetCyberSiara endpoint
   * @param {string} [params.userAgent] - browser userAgent,you need submit your userAgent
   * @param {string} [params.websiteURL] - the current website home page url
   * @param {string=} [params.proxy] - proxy
   */
  constructor(params: AntiCyberSiAraTaskParams) {
    super(params, "AntiCyberSiAraTask");
  }
}