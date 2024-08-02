
import type { TaskSolutionTypes } from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";

export type TurnstileTaskParams = {
  pageurl: string;
  sitekey: string;
};

/**
 * @classdesc TurnstileTask Solution
 * @class
 * @extends {BaseTask}
 * {@link https://docs.cap.guru/en/apitoken/turnstile.html}
 */
export class TurnstileTask extends BaseTask implements TurnstileTaskParams, TaskSolutionTypes {

  /**
   * Create TurnstileTaskTask
   * {@link https://docs.cap.guru/en/apitoken/turnstile.html}
   * @param {TurnstileTaskParams} params - params
   * @param {string} [params.sitekey] - The value of the data-sitekey parameter you found in the page code
For example 1x00000000000000000000AA
   * @param {string} [params.pageurl] - URL of the page you are solving Cloudflare Turnstile
For example https://react-turnstile.vercel.app/basic
   */
  constructor({
    pageurl, sitekey
  }: TurnstileTaskParams) {
    super({ method: "turnstile" });
    this.sitekey = sitekey;
    this.pageurl = pageurl;
  }

  /**
   * @type {string} pageurl - URL of the page you are solving Cloudflare Turnstile
For example https://react-turnstile.vercel.app/basic
   */
  pageurl: string;

  /**
   * @type {string} sitekey - The value of the data-sitekey parameter you found in the page code
For example 1x00000000000000000000AA
   */
  sitekey: string;

  /**
   * @type {boolean} isString - only used for correctly working method overloading intellisense
   */
  isString: TaskSolutionTypes["isString"] = true;
}

