import type { _IsTaskType } from "../_BaseTaskRequest";

import { BaseTask } from "../_BaseTaskRequest";

interface HCaptchaClassificationParams {
  "queries": Array<string>;
  "question": string;
  "websiteKey"?: string;
  "websiteURL"?: string;
}

/**
 * @classdesc HCaptcha Images Recognize
 * @class
 * @deprecated deleted from service support
 * @extends {BaseTask}
 * @see {@link https://docs.capsolver.com/guide/recognition/HCaptchaClassification.html}
 */
export class HCaptchaClassification extends BaseTask implements HCaptchaClassificationParams, _IsTaskType {

  /**
  * @type {boolean} _isHCaptchaClassification - Only used for correct method overloading intellisense
  */
  readonly _isHCaptchaClassification: _IsTaskType["_isHCaptchaClassification"] = true;

  /**
   * Create HCaptchaClassification
   * @see {@link https://docs.capsolver.com/guide/recognition/HCaptchaClassification.html}
   * @param {Object} params - ImageToTextParams
   * @param {string} [params.question] - English is supported only. Please convert other languages by yourself
   * @param {string} [params.queries] - Base64 encoded image, do not include "data:image/***; base64," Assembles the picture as a list: [base64,base64,base64...]
   * @param {string} [params.websiteKey] - Website key to improve accuracy
   * @param {string} [params.websiteURL] - Page source url to improve accuracy
   */
  constructor ({ queries, question, websiteKey, websiteURL }: HCaptchaClassificationParams) {
    super({ "type": "HCaptchaClassification" });

    this.queries = queries;

    this.question = question;

    this.websiteURL = websiteURL;

    this.websiteKey = websiteKey;
  }

  /**
   * @type {string} question - English is supported only. Please convert other languages by yourself
   */
  question: string;

  //
  // @type {string} queries - Base64 encoded image, do not include "data:image/***; base64,"
  // Assembles the picture as a list: [base64,base64,base64...]
  //
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
