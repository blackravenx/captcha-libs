
import type { AntiCloudflareTaskBaseParams } from "./_AntiCloudflareBase";
import { AntiCloudflareTaskBase } from "./_AntiCloudflareBase";

type AntiCloudflareTaskChallengeParams = AntiCloudflareTaskBaseParams;

/**
 * @classdesc AntiCloudflareTaskChallenge
 * @class
 * @extends {AntiCloudflareTaskBase}
 * {@link https://docs.capsolver.com/guide/antibots/cloudflare_challenge.html}
 */
export class AntiCloudflareTaskChallenge extends AntiCloudflareTaskBase {

  /**
   * Create AntiCloudflareTaskChallenge
   * {@link https://docs.capsolver.com/guide/antibots/cloudflare_challenge.html}
   * @param {object} params -	AntiCloudflareTaskChallengeParams
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.websiteURL] - The address of the target page.
   */
  constructor(params: AntiCloudflareTaskChallengeParams) {
    super(params, "AntiCloudflareTask");
  }
}