import type { _IsTaskType } from "../_BaseTaskRequest";

import type { AntiCloudflareTaskBaseParams } from "./Base/_AntiCloudflareBase";

import { AntiCloudflareTaskBase } from "./Base/_AntiCloudflareBase";

type AntiCloudflareTaskParams = AntiCloudflareTaskBaseParams;

/**
 * @classdesc AntiCloudflareTask
 * @class
 * @extends {AntiCloudflareTaskBase}
 * @see {@link https://docs.capsolver.com/guide/antibots/cloudflare_challenge.html}
 */
export class AntiCloudflareTask extends AntiCloudflareTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isAntiCloudflareTask - Only used for correct method overloading intellisense
  */
  readonly _isAntiCloudflareTask: _IsTaskType["_isAntiCloudflareTask"] = true;

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
  constructor (params: AntiCloudflareTaskParams) {
    super(params, "AntiCloudflareTask");
  }
}
