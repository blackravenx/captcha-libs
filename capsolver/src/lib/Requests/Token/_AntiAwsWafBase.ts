import type { TaskTypes } from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";

export type AntiAwsWafTaskBaseParams = {
  awsChallengeJS?: string;
  awsContext?: string;
  awsIv?: string;
  awsKey?: string;
  proxy?: string;
  websiteURL: string;
};

/**
 * @classdesc Base class for AntiAwsWafTask
 * @class
 * {@link https://docs.capsolver.com/guide/captcha/awsWaf.html}
 * @extends {BaseTask}
 */
export abstract class AntiAwsWafTaskBase extends BaseTask implements AntiAwsWafTaskBaseParams {

  /**
   * Create AntiAwsWafTaskBase
   * {@link https://docs.capsolver.com/guide/captcha/awsWaf.html}
   * @param {Object} params - AntiAwsWafTaskBaseParams
   * @param {string=} [params.awsChallengeJS] - When the status code returned by the websiteURL page is 202, you only need to pass in awsChallengeJs;
   * @param {string=} [params.awsContext] - When the status code returned by the websiteURL page is 405, you need to pass in awsContext
   * @param {string=} [params.awsIv] - When the status code returned by the websiteURL page is 405, you need to pass in awsIv
   * @param {string=} [params.awsKey] - When the status code returned by the websiteURL page is 405, you need to pass in awsKey
   * @param {string=} [params.proxy] - proxy
   * @param {string} [params.websiteURL] - The URL of the page that returns the captcha info
   */
  constructor({
    awsChallengeJS, awsContext, awsIv, awsKey, proxy, websiteURL
  }: AntiAwsWafTaskBaseParams, type: TaskTypes) {
    super({ type });
    this.awsChallengeJS = awsChallengeJS;
    this.awsContext = awsContext;
    this.awsIv = awsIv;
    this.awsKey = awsKey;
    this.websiteURL = websiteURL;
    this.proxy = proxy;
  }

  /**
   * @type {string=} awsChallengeJS - When the status code returned by the websiteURL page is 202, you only need to pass in awsChallengeJs;
   */
  awsChallengeJS?: string;

  /**
   * @type {string=} awsContext - When the status code returned by the websiteURL page is 405, you need to pass in awsContext
   */
  awsContext?: string;

  /**
   * @type {string=} awsIv - When the status code returned by the websiteURL page is 405, you need to pass in awsIv
   */
  awsIv?: string;

  /**
   * @type {string=} awsKey - When the status code returned by the websiteURL page is 405, you need to pass in awsKey
   */
  awsKey?: string;

  /**
   * @type {string=} proxy - proxy
   */
  proxy?: string;

  /**
   * @type {string} websiteURL - The URL of the page that returns the captcha info
   */
  websiteURL: string;
}