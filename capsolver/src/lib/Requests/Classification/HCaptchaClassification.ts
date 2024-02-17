import {
  BaseTask, type BaseParams, _IsTaskType
} from "../_BaseTaskRequest";

type HCaptchaClassificationParams = Omit<BaseParams, "_endpoint" | "type"> & {
  queries: Array<string>;
  question: string;
  websiteKey?: string;
  websiteURL?: string;
};

/**
 * @classdesc HCaptcha Images Recognize
 * @class
 * @extends {BaseTask}
 * {@link https://docs.capsolver.com/guide/recognition/HCaptchaClassification.html}
 */
export class HCaptchaClassification extends BaseTask implements HCaptchaClassificationParams, _IsTaskType {
  readonly _isHCaptchaClassification = true;

  /**
   * Create HCaptchaClassification
   * {@link https://docs.capsolver.com/guide/recognition/HCaptchaClassification.html}
   * @param {Object} params - ImageToTextParams
   * @param {string} [params.question] - English is supported only. Please convert other languages by yourself
   * @param {string} [params.queries] - Base64 encoded image, do not include "data:image/***; base64," Assembles the picture as a list: [base64,base64,base64...]
   * @param {string} [params.websiteKey] - Website key to improve accuracy
   * @param {string} [params.websiteURL] - Page source url to improve accuracy
   */
  constructor({
    queries, question, websiteKey, websiteURL
  }: HCaptchaClassificationParams) {
    super({ type: "HCaptchaClassification" });
    this.queries = queries;
    this.question = question;
    this.websiteURL = websiteURL;
    this.websiteKey = websiteKey;
  }

  /**
   * @type {string} question - English is supported only. Please convert other languages by yourself
   */
  question: string;

  /**
   * @type {string} queries - Base64 encoded image, do not include "data:image/***; base64,"
Assembles the picture as a list: [base64,base64,base64...]
   */
  queries: string[];

  /**
   * @type {string} websiteKey - Website key to improve accuracy
   */
  websiteKey?: string;

  /**
   * @type {string} websiteURL - 	Page source url to improve accuracy
   */
  websiteURL?: string;
}
