import type { ProxyRequiredTaskParams, _IsTaskType } from "../_BaseTaskRequest";

import type { AntiCyberSiAraTaskBaseParams } from "./Base/_AntiCyberSiAraBase";

import { AntiCyberSiAraTaskBase } from "./Base/_AntiCyberSiAraBase";

type AntiCyberSiAraTaskParams = ProxyRequiredTaskParams<AntiCyberSiAraTaskBaseParams>;

/**
 * @classdesc AntiCyberSiAraTask this task type require your own proxies.
 * @class
 * @deprecated deleted from service support
 * @extends {AntiCyberSiAraTaskBase}
 * @see {@link https://docs.capsolver.com/guide/captcha/CyberSiara.html}
 */
export class AntiCyberSiAraTask extends AntiCyberSiAraTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isAntiCyberSiAraTask - Only used for correct method overloading intellisense
  */
  readonly _isAntiCyberSiAraTask: _IsTaskType["_isAntiCyberSiAraTask"] = true;

  /**
   * Create AntiCyberSiAraTask this task type require your own proxies.
   * @see {@link https://docs.capsolver.com/guide/captcha/CyberSiara.html}
   * @param {Object} params - AntiCyberSiAraTaskParams
   * @param {string} [params.SlideMasterUrlId] - you can get MasterUrlId param form api/CyberSiara/GetCyberSiara endpoint
   * @param {string} [params.userAgent] - browser userAgent,you need submit your userAgent
   * @param {string} [params.websiteURL] - the current website home page url
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.proxyAddress] - proxyAddress
   * @param {string} [params.proxyLogin] - proxyLogin
   * @param {string} [params.proxyPassword] - proxyPassword
   * @param {string} [params.proxyPort] - proxyPort
   * @param {string} [params.proxyType] - proxyType
   */
  constructor (params: AntiCyberSiAraTaskParams) {
    super(params, "AntiCyberSiAraTask");
  }
}
