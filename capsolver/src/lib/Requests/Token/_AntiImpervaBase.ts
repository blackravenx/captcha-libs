import type { TaskTypes } from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";

export type AntiImpervaTaskBaseParams = {
  proxy?: string;
  reese84?: boolean;
  reeseScriptUrl?: string;
  reeseToken?: string;
  userAgent: string;
  utmvc?: boolean;
  websiteUrl: string;
};

/**
 * @classdesc Base class for AntiImperva task
 * @class
 * @extends {BaseTask}
 * {@link https://docs.capsolver.com/guide/antibots/imperva.html}
 */
export abstract class AntiImpervaTaskBase extends BaseTask implements AntiImpervaTaskBaseParams {

  /**
   * Create AntiImpervaTaskBase
   * {@link https://docs.capsolver.com/guide/antibots/imperva.html}
   * @param {object} params -	AntiImpervaTaskBaseParams
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.websiteUrl] -	The website url
   * @param {string} [params.userAgent] - browser userAgent
   * @param {boolean} [params.utmvc] - if type is AntiImpervaTask,you need submit it. Default: false
   * @param {boolean} [params.reese84=false] - if cookie contains incap_see_xxx,nlbi_xxx,visid_inap_xxx,mean is true. Default = false
   * @param {string} [params.reeseScriptUrl] - The URL typically has several dashes (-) and random words
   * @param {string} [params.reeseToken] - If your reeseToken has expired, you can send current reeseToken to obtain a new
   */
  constructor({
    websiteUrl, userAgent, utmvc = false, reese84 = false, reeseScriptUrl, reeseToken, proxy
  }: AntiImpervaTaskBaseParams, type: TaskTypes) {
    super({ type });
    this.websiteUrl = websiteUrl;
    this.userAgent = userAgent;
    this.utmvc = utmvc;
    this.reese84 = reese84;
    this.reeseScriptUrl = reeseScriptUrl;
    this.reeseToken = reeseToken;
    this.proxy = proxy;
  }

  /**
   * @type {string} websiteUrl -	The website url
   */
  websiteUrl: string;

  /**
   * @type {string} userAgent - browser userAgent
   */
  userAgent: string;

  /**
   * proxy
   */
  proxy?: string;

  /**
   * @type {boolean=} utmvc - if type is AntiImpervaTask,you need submit it
   */
  utmvc?: boolean;

  /**
   * @type {boolean=} [reese84=false] - if cookie contains incap_see_xxx,nlbi_xxx,visid_inap_xxx,mean is true
   */
  reese84?: boolean;

  /**
   * @type {string=} reeseScriptUrl - The URL typically has several dashes (-) and random words
   */
  reeseScriptUrl?: string;

  /**
   * @type {string=} reeseToken - If your reeseToken has expired, you can send current reeseToken to obtain a new reeseToken.
   */
  reeseToken?: string;
}