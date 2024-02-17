
import { _IsTaskType } from "../_BaseTaskRequest";
import {
  AntiCloudflareTaskBase, type AntiCloudflareTaskBaseParams
} from "./_AntiCloudflareBase";

type AntiCloudflareTurnstileTaskTypes = "challenge" | "turnstile";

export type AntiCloudflareTurnstileTaskMetadata = {
  action?: string;
  cdata?: string;
  type: AntiCloudflareTurnstileTaskTypes;
};

export type AntiCloudflareTurnstileTaskParams = AntiCloudflareTaskBaseParams & {
  metadata: AntiCloudflareTurnstileTaskMetadata;
  websiteKey: string;
};

/**
 * @classdesc AntiCloudflareTurnstileTask
 * @class
 * @extends {AntiCloudflareTaskBase}
 * {@link https://docs.capsolver.com/guide/antibots/cloudflare_turnstile.html}
 */
export class AntiCloudflareTurnstileTask extends AntiCloudflareTaskBase implements AntiCloudflareTurnstileTaskParams, _IsTaskType {

  /**
 * @type {boolean} _isAntiCloudflareTask - Only used for correct method overloading intellisense
 */
  readonly _isAntiCloudflareTask = true;

  /**
   * Create AntiCloudflareTurnstileTask
   * {@link https://docs.capsolver.com/guide/antibots/cloudflare_turnstile.html}
   * @param {Object} params - AntiCloudflareTurnstileTaskParams
   * @param {string} [params.websiteURL] - The address of the target page.
   * @param {string=} [params.websiteKey] - Turnstile website key.
   * @param {object} [params.metadata] - Turnstile extra data {@link https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/}
   * @param {string} [params.metadata.type] - challenge or turnstile fixed value, default: "turnstile"
   * @param {string} [params.metadata.cdata] - The value of the data-cdata attribute of the Turnstile element if it exists.
   * @param {string} [params.proxy] - proxy
   */
  constructor({
    websiteURL, proxy, metadata, websiteKey
  }: AntiCloudflareTurnstileTaskParams) {
    const {
      action, type = "turnstile", cdata
    } = metadata || { type: "turnstile" };

    super({
      proxy,
      websiteURL
    }, "AntiCloudflareTask");
    this.websiteKey = websiteKey;
    this.metadata = {
      action,
      cdata,
      type
    };
  }
  websiteKey: string;

  /**
   * @type {object} [type.metadata] - Turnstile extra data {@link https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/}
   * @type {string} [type.metadata.type] - challenge or turnstile fixed value.
   * @type {string} [type.proxy] - proxy
   * @type {string} [type.websiteURL] - The URL of the page that returns the captcha info
   */
  metadata: AntiCloudflareTurnstileTaskMetadata;
}