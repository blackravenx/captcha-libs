import type {
  ProxyCredentials, TaskTypes
} from "../../_BaseTaskRequest";
import { BaseTask } from "../../_BaseTaskRequest";

export type AntiCloudflareTaskBaseParams = Partial<ProxyCredentials> & {
  proxy?: string;
  websiteURL: string;
};

/**
 * @classdesc Base class for AntiCloudflareTask
 * @class
 * @extends {BaseTask}
 * {@link https://docs.capsolver.com/guide/antibots/cloudflare_challenge.html}
 */

export abstract class AntiCloudflareTaskBase extends BaseTask implements AntiCloudflareTaskBaseParams {

  /**
   * Create AntiCloudflareTask
   * {@link https://docs.capsolver.com/guide/antibots/cloudflare_challenge.html}
   * @param {object} params -	AntiCloudflareTaskParams
   * @param {string} [params.websiteURL] - The address of the target page.
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.proxyAddress] - proxyAddress
   * @param {string} [params.proxyLogin] - proxyLogin
   * @param {string} [params.proxyPassword] - proxyPassword
   * @param {number} [params.proxyPort] - proxyPort
   * @param {string} [params.proxyType] - proxyType
   */
  constructor({
    websiteURL, proxy, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword
  }: AntiCloudflareTaskBaseParams, type: TaskTypes) {
    super({ type });
    this.websiteURL = websiteURL;
    this.proxy = proxy;
    this.proxyAddress = proxyAddress;
    this.proxyLogin = proxyLogin;
    this.proxyPort = proxyPort;
    this.proxyType = proxyType;
    this.proxyPassword = proxyPassword;
  }

  /**
   * @type {string} proxy - proxy
   */
  proxy?: string;

  /**
   * @type {string} websiteURL - The address of the target page.
   */
  websiteURL: string;
  proxyAddress?: string;
  proxyLogin?: string;
  proxyPassword?: string;
  proxyPort?: number;
  proxyType?: ProxyCredentials["proxyType"];
}