import type { TaskTypes } from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";

export type AntiCloudflareTaskBaseParams = {
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
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.websiteURL] - The address of the target page.
   */
  constructor({
    websiteURL, proxy
  }: AntiCloudflareTaskBaseParams, type: TaskTypes) {
    super({ type });
    this.websiteURL = websiteURL;
    this.proxy = proxy;
  }

  /**
   * @type {string} proxy - proxy
   */
  proxy?: string;

  /**
   * @type {string} websiteURL - The address of the target page.
   */
  websiteURL: string;
}