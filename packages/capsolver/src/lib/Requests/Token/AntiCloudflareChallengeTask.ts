import type { _IsTaskType } from "../_BaseTaskRequest";

import type { AntiCloudflareTaskBaseParams } from "./Base/_AntiCloudflareBase";

import { AntiCloudflareTaskBase } from "./Base/_AntiCloudflareBase";

type AntiCloudflareChallengeTaskParams = AntiCloudflareTaskBaseParams;

/**
 * @classdesc AntiCloudflareChallengeTask
 * @class
 * @extends {AntiCloudflareTaskBase}
 * @see {@link https://docs.capsolver.com/guide/antibots/cloudflare_challenge.html}
 */
export class AntiCloudflareChallengeTask extends AntiCloudflareTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isAntiCloudflareTask - Only used for correct method overloading intellisense
  */
  readonly _isAntiCloudflareTask: _IsTaskType["_isAntiCloudflareTask"] = true;

  /**
   * Create AntiCloudflareChallengeTask
   * @see {@link https://docs.capsolver.com/guide/antibots/cloudflare_challenge.html}
   * @param {object} params -	AntiCloudflareChallengeTaskParams
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.proxyAddress] - proxyAddress
   * @param {string} [params.proxyLogin] - proxyLogin
   * @param {string} [params.proxyPassword] - proxyPassword
   * @param {number} [params.proxyPort] - proxyPort
   * @param {string} [params.proxyType] - proxyType
   * @param {string} [params.websiteURL] - The address of the target page.
   */
  constructor (params: AntiCloudflareChallengeTaskParams) {
    super(params, "AntiCloudflareTask");
  }
}
