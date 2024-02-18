import type {
  ProxyCredentials, TaskTypes
} from "../../_BaseTaskRequest";
import { BaseTask } from "../../_BaseTaskRequest";

export type AntiCyberSiAraTaskBaseParams = Partial<ProxyCredentials> & {
  SlideMasterUrlId: string;
  proxy?: string;
  userAgent: string;
  websiteURL: string;
};

/**
 * @classdesc Base class for AntiCyberSiAraTaskBase
 * @class
 * {@link https://docs.capsolver.com/guide/captcha/CyberSiara.html}
 * @extends {BaseTask}
 */
export abstract class AntiCyberSiAraTaskBase extends BaseTask implements AntiCyberSiAraTaskBaseParams {

  /**
   * Create AntiCyberSiAraTaskBase
   * {@link https://docs.capsolver.com/guide/captcha/CyberSiara.html}
   * @param {Object} params - AntiCyberSiAraTaskBaseParams
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
  constructor({
    proxy, SlideMasterUrlId, userAgent, websiteURL, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword
  }: AntiCyberSiAraTaskBaseParams, type: TaskTypes) {
    super({ type });
    this.SlideMasterUrlId = SlideMasterUrlId;
    this.userAgent = userAgent;
    this.websiteURL = websiteURL;
    this.proxy = proxy;
    this.proxyAddress = proxyAddress;
    this.proxyLogin = proxyLogin;
    this.proxyPort = proxyPort;
    this.proxyType = proxyType;
    this.proxyPassword = proxyPassword;
  }

  /**
   * @type {string} SlideMasterUrlId - you can get MasterUrlId param form api/CyberSiara/GetCyberSiara endpoint
   */
  SlideMasterUrlId: string;

  /**
   * @type {string} userAgent - browser userAgent,you need submit your userAgent
   */
  userAgent: string;

  /**
   * @type {string=} proxy - proxy
   */
  proxy?: string;

  /**
   * @type {string} websiteURL - the current website home page url
   */
  websiteURL: string;
  proxyAddress?: string;
  proxyLogin?: string;
  proxyPassword?: string;
  proxyPort?: number;
  proxyType?: ProxyCredentials["proxyType"];
}