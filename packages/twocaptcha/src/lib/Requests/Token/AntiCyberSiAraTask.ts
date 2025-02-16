import type { ProxyRequiredTaskParams, _IsTaskType } from "../_BaseTaskRequest";

import type { AntiCyberSiAraTaskBaseParams } from "./Base/_AntiCyberSiAraTaskBase";

import { AntiCyberSiAraTaskBase } from "./Base/_AntiCyberSiAraTaskBase";

type AntiCyberSiAraTaskParams = ProxyRequiredTaskParams<AntiCyberSiAraTaskBaseParams>;

/**
 * Token-based method for automated solving of CyberSiARA.
 * @extends {AntiCyberSiAraTaskBase}
 * @see {@link https://2captcha.com/api-docs/anti-cyber-siara}
 */
export class AntiCyberSiAraTask extends AntiCyberSiAraTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isAntiCyberSiAraTask - Only used for correct method overloading intellisense
  */
  readonly _isAntiCyberSiAraTask: _IsTaskType["_isAntiCyberSiAraTask"] = true;

  /**
  * Create AntiCyberSiAraTask
  * @see {@link https://2captcha.com/api-docs/anti-cyber-siara}
  * @param {Object} params - CapyTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.SlideMasterUrlId] - The value of the MasterUrlId parameter obtained from the request to the endpoint API/CyberSiara/GetCyberSiara.
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor (params: AntiCyberSiAraTaskParams) {
    super(params, "AntiCyberSiAraTask");
  }
}
