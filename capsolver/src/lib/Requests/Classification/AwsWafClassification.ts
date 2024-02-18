import type { _IsTaskType } from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";

interface AwsWafClassificationParams {
  images: Array<string>;
  question: string;
  websiteKey?: string;
  websiteURL?: string;
}

/**
 * @classdesc AWS WAF Images Recognize
 * @class
 * @extends {BaseTask}
 * {@link https://docs.capsolver.com/guide/recognition/AwsWafClassification.html}
 */
export class AwsWafClassification extends BaseTask implements AwsWafClassificationParams, _IsTaskType {

  /**
  * @type {boolean} _isAwsWafClassification - Only used for correct method overloading intellisense
  */
  readonly _isAwsWafClassification: _IsTaskType["_isAwsWafClassification"] = true;

  /**
   * Create AwsWafClassification
   * {@link https://docs.capsolver.com/guide/recognition/AwsWafClassification.html}
   * @param {object} params -	AwsWafClassificationParams
   * @param {string} [params.question] - For full names of questions, please refer to the following list of questions.
   * @param {string[]} [params.images] - base64 image string
   * @param {string=} [params.websiteKey] - Website key to improve accuracy
   * @param {string=} [params.websiteURL] - Page source url to improve accuracy
   */
  constructor({
    websiteKey, question, websiteURL, images
  }: AwsWafClassificationParams) {
    super({ type: "AwsWafClassification" });
    this.images = images;
    this.websiteKey = websiteKey;
    this.websiteURL = websiteURL;
    this.question = question;
  }

  /**
   * @type {string} question - For full names of questions, please refer to the following list of questions.
   */
  question: string;

  /**
   * @type {string[]} images - base64 image string
   */
  images: Array<string>;

  /**
   * @type {string=} websiteKey - Website key to improve accuracy
   */
  websiteKey?: string;

  /**
   *
   * @type {string=} websiteURL - Page source url to improve accuracy
   */
  websiteURL?: string;
}