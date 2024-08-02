
import type { _IsTaskType } from "../_BaseTaskRequest";
import type { AntiTurnstileTaskProxyLessBaseParams } from "./Base/_AntiTurnstileTaskProxyLessBase";
import { AntiTurnstileTaskProxyLessBase } from "./Base/_AntiTurnstileTaskProxyLessBase";

/**
 * @classdesc AntiTurnstileTaskProxyLess
 * @class
 * @extends {AntiTurnstileTaskProxyLessBase}
 * {@link https://docs.capsolver.com/guide/antibots/cloudflare_turnstile.html}
 */
export class AntiTurnstileTaskProxyLess extends AntiTurnstileTaskProxyLessBase implements _IsTaskType {

  /**
  * @type {boolean} _isAntiTurnstileTaskProxyLess - Only used for correct method overloading intellisense
  */
  readonly _isAntiTurnstileTaskProxyLess: _IsTaskType["_isAntiTurnstileTaskProxyLess"] = true;

  /**
   * Create AntiTurnstileTaskProxyLess
   * {@link https://docs.capsolver.com/guide/antibots/cloudflare_turnstile.html}
   * @param {object} params -	AntiCloudflareTaskParams
   * @param {string} [params.websiteURL] - The address of the target page.
   * @param {string} [params.websiteKey] - 	Turnstile website key.
   * @param {Object} [params.metadata] - Turnstile extra data. @see https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/
   * @param {string=} [params.metdata.action] - The value of the data-action attribute of the Turnstile element if it exists.
   * @param {string=} [params.metadata.cdata] - The value of the data-cdata attribute of the Turnstile element if it exists.
   */
  constructor({
    websiteURL, websiteKey, metadata
  }: AntiTurnstileTaskProxyLessBaseParams) {
    super({
      metadata,
      websiteKey,
      websiteURL
    }, "AntiTurnstileTaskProxyLess");
  }
}