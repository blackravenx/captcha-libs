
import type { AntiCloudflareTaskBaseParams } from "./_AntiCloudflareBase";
import { AntiCloudflareTaskBase } from "./_AntiCloudflareBase";

type AntiCloudflareChallengeTaskParams = AntiCloudflareTaskBaseParams;

/**
 * @classdesc AntiCloudflareChallengeTask
 * @class
 * @extends {AntiCloudflareTaskBase}
 * {@link https://docs.capsolver.com/guide/antibots/cloudflare_challenge.html}
 */
export class AntiCloudflareChallengeTask extends AntiCloudflareTaskBase {

  /**
   * Create AntiCloudflareChallengeTask
   * {@link https://docs.capsolver.com/guide/antibots/cloudflare_challenge.html}
   * @param {object} params -	AntiCloudflareChallengeTaskParams
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.websiteURL] - The address of the target page.
   */
  constructor(params: AntiCloudflareChallengeTaskParams) {
    super(params, "AntiCloudflareTask");
  }
}