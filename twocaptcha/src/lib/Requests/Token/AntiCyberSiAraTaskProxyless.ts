import {
  ProxylessTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import {
  AntiCyberSiAraTaskBase, AntiCyberSiAraTaskBaseParams
} from "./_AntiCyberSiAraTaskBase";

type AntiCyberSiAraTaskProxylessParams = ProxylessTaskParams<AntiCyberSiAraTaskBaseParams>;

/**
 * Token-based method for automated solving of CyberSiARA.
 * @extends {AntiCyberSiAraTaskBase}
 * {@link https://2captcha.com/api-docs/anti-cyber-siara}
 */
export class AntiCyberSiAraTaskProxyless extends AntiCyberSiAraTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isAntiCyberSiAraTaskProxyless - Only used for correct method overloading intellisense
  */
  readonly _isAntiCyberSiAraTaskProxyless = true;

  /**
  * Create AntiCyberSiAraTaskProxyless
  * {@link https://2captcha.com/api-docs/anti-cyber-siara}
  * @param {Object} params - CapyTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.SlideMasterUrlId] - The value of the MasterUrlId parameter obtained from the request to the endpoint API/CyberSiara/GetCyberSiara.
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents
  */
  constructor(params: AntiCyberSiAraTaskProxylessParams) {
    super(params, "AntiCyberSiAraTaskProxyless");
  }
}