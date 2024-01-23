
import {
  AntiCloudflareTaskBase, type AntiCloudflareTaskBaseParams
} from "./_AntiCloudflareBase";

type AntiCloudflareTaskTurnstileTypes = "challenge" | "turnstile";

type AntiCloudflareTaskTurnstileMetadata = {
  action?: string;
  cdata?: string;
  type: AntiCloudflareTaskTurnstileTypes;
};

type AntiCloudflareTaskTurnstileParams = Omit<AntiCloudflareTaskBaseParams, "type"> & {
  metadata?: AntiCloudflareTaskTurnstileMetadata;
};

/**
 * @classdesc AntiCloudflareTaskTurnstile
 * @class
 * @extends {AntiCloudflareTaskBase}
 * {@link https://docs.capsolver.com/guide/antibots/cloudflare_turnstile.html}
 */
export class AntiCloudflareTaskTurnstile extends AntiCloudflareTaskBase implements AntiCloudflareTaskTurnstileParams {

  /**
   * Create AntiCloudflareTaskTurnstile
   * {@link https://docs.capsolver.com/guide/antibots/cloudflare_turnstile.html}
   * @param {Object} params - AntiCloudflareTaskTurnstileParams
   * @param {string} [params.websiteURL] - The address of the target page.
   * @param {string=} [params.websiteKey] - Turnstile website key.
   * @param {object} [params.metadata] - Turnstile extra data {@link https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/}
   * @param {string} [params.metadata.type] - challenge or turnstile fixed value, default: "turnstile"
   * @param {string} [params.metadata.cdata] - The value of the data-cdata attribute of the Turnstile element if it exists.
   * @param {string} [params.proxy] - proxy
   */
  constructor({
    websiteURL, proxy, metadata
  }: AntiCloudflareTaskTurnstileParams) {
    const {
      action, type = "turnstile", cdata
    } = metadata || { type: "turnstile" };

    super({
      proxy,
      websiteURL
    }, "AntiCloudflareTask");
    this.metadata = {
      action,
      cdata,
      type
    };
  }

  /**
   * @type {object} [type.metadata] - Turnstile extra data {@link https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/}
   * @type {string} [type.metadata.type] - challenge or turnstile fixed value.
   * @type {string} [type.proxy] - proxy
   * @type {string} [type.websiteURL] - The URL of the page that returns the captcha info
   */
  metadata: AntiCloudflareTaskTurnstileMetadata;
}