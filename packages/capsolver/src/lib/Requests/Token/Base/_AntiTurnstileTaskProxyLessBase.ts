import type { TaskTypes } from "../../_BaseTaskRequest";

import { BaseTask } from "../../_BaseTaskRequest";

interface AntiTurnstileMetaData {
  "action"?: string;
  "cdata"?: string;
}

export type AntiTurnstileTaskProxyLessBaseParams = {
  "metadata"?: AntiTurnstileMetaData;
  "websiteKey": string;
  "websiteURL": string;
};

/**
 * @classdesc Base class for AntiTurnstileTaskProxyLess
 * @class
 * @extends {BaseTask}
 * @see {@link https://docs.capsolver.com/en/guide/captcha/cloudflare_turnstile/}
 */

export abstract class AntiTurnstileTaskProxyLessBase extends BaseTask implements AntiTurnstileTaskProxyLessBaseParams {

  /**
   * Create AntiTurnstileTaskProxyLess
   * @see {@link https://docs.capsolver.com/en/guide/captcha/cloudflare_turnstile/}
   * @param {object} params -	AntiTurnstileTaskProxyLessBaseParams
   * @param {string} [params.websiteURL] - The address of the target page.
   * @param {string} [params.websiteKey] - 	Turnstile website key.
   * @param {Object} [params.metadata] - Turnstile extra data. @see https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/
   * @param {string=} [params.metdata.action] - The value of the data-action attribute of the Turnstile element if it exists.
   * @param {string=} [params.metadata.cdata] - The value of the data-cdata attribute of the Turnstile element if it exists.
   */
  constructor ({ websiteURL, websiteKey, metadata }: AntiTurnstileTaskProxyLessBaseParams, type: TaskTypes) {
    super({ type });

    this.websiteURL = websiteURL;

    this.metadata = metadata;

    this.websiteKey = websiteKey;
  }

  /**
   * @type {string} websiteKey - 	Turnstile website key.
   */
  websiteKey: string;

  /**
   * @type {Object} metadata - Turnstile extra data. @see https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/
   * @type {string=?} [metdata.action] - The value of the data-action attribute of the Turnstile element if it exists.
   * @type {string=?} [metadata.cdata] - The value of the data-cdata attribute of the Turnstile element if it exists.
   */
  metadata?: {
    "action"?: string | undefined;
    "cdata"?: string | undefined;
  } | undefined;

  /**
   * @type {string} websiteURL - The address of the target page.
   */
  websiteURL: string;

}
