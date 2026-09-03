import type { ProxyCredentials, TaskTypes } from "../../_BaseTaskRequest";

import { BaseTask } from "../../_BaseTaskRequest";

export type AntiCloudflareTaskBaseParams = Partial<ProxyCredentials> & {
  "websiteURL": string;
  "userAgent"?: string;
  "html"?: string;
};

type Type = Extract<TaskTypes, "AntiCloudflareTask">;

/**
 * @classdesc Base class for AntiCloudflareTask
 * @class
 * @extends {BaseTask}
 * @see {@link https://docs.capsolver.com/guide/antibots/cloudflare_challenge.html}
 */

export abstract class AntiCloudflareTaskBase extends BaseTask implements AntiCloudflareTaskBaseParams {

  /**
   * Create AntiCloudflareTask
   * @see {@link https://docs.capsolver.com/guide/antibots/cloudflare_challenge.html}
   * @param {object} params -	AntiCloudflareTaskParams
   * @param {string} [params.websiteURL] - The address of the target page.
   * @param {string=} [params.userAgent] - The user-agent you used to request the target website. Only Chrome’s userAgent is supported.
   * @param {string=} [params.html] - The response of requesting the target website, it usually contains “Just a moment…” and status code is 403. we need this html for some websites, please be sure to use your sticky proxy to dynamically scrape the HTML every time.
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.proxyAddress] - proxyAddress
   * @param {string} [params.proxyLogin] - proxyLogin
   * @param {string} [params.proxyPassword] - proxyPassword
   * @param {number} [params.proxyPort] - proxyPort
   * @param {string} [params.proxyType] - proxyType
   */
  constructor ({ websiteURL, userAgent, html, proxy, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword }: AntiCloudflareTaskBaseParams, type: Type) {
    super({ type });

    this.websiteURL = websiteURL;

    this.userAgent = userAgent;

    this.html = html;

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

  /**
   * @type {string} websiteURL - The user-agent you used to request the target website. Only Chrome’s userAgent is supported.
   */
  userAgent?: string;

  /**
   * @type {string=} html - The response of requesting the target website, it usually contains “Just a moment…” and status code is 403. we need this html for some websites, please be sure to use your sticky proxy to dynamically scrape the HTML every time.
   */
  html?: string;

  proxyAddress?: string;

  proxyLogin?: string;

  proxyPassword?: string;

  proxyPort?: number;

  proxyType?: ProxyCredentials["proxyType"];
}
