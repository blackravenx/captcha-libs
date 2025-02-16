import type { _IsTaskType } from "../_BaseTaskRequest";

import { BaseTask } from "../_BaseTaskRequest";

interface FunCaptchaClassificationParams {
  "images": string;
  "module"?: string;
  "question": string;
  "websiteKey"?: string;
  "websiteURL"?: string;
}

/**
 * @classdesc FunCaptcha Images Recognize
 * @class
 * @extends {BaseTask}
 * @see {@link https://docs.capsolver.com/guide/recognition/FunCaptchaClassification.html}
 * @deprecated deleted from service support
 */
export class FunCaptchaClassification extends BaseTask implements FunCaptchaClassificationParams, _IsTaskType {

  /**
  * @type {boolean} _isFunCaptchaClassification - Only used for correct method overloading intellisense
  */
  readonly _isFunCaptchaClassification: _IsTaskType["_isFunCaptchaClassification"] = true;

  /**
   * Create FunCaptchaClassification
   * @see {@link https://docs.capsolver.com/guide/recognition/FunCaptchaClassification.html}
   * @param {Object} params - ImageToTextParams
   * @param {string} [params.question] - Question name. this param value from API response game_variant field. Exmaple: maze,maze2,flockCompass,3d_rollball_animals
   * @param {string} [params.images] - Base64 encoded image, can be a screenshot (pass only the hexagonal image, do not pass the rest of the content)
   * @param {string} [params.module] - module name {@see https://docs.capsolver.com/guide/recognition/FunCaptchaClassification.html}
   * @param {string} [params.websiteURL] - Page source url to improve accuracy
   * @param {string} [params.websiteKey] - 	Website key to improve accuracy
   */
  constructor ({ images, module, question, websiteKey, websiteURL }: FunCaptchaClassificationParams) {
    super({ "type": "FunCaptchaClassification" });

    this.images = images;

    this.module = module;

    this.question = question;

    this.websiteKey = websiteKey;

    this.websiteURL = websiteURL;
  }

  /**
   * @type {string} question - Question name. this param value from API response game_variant field. Exmaple: maze,maze2,flockCompass,3d_rollball_animals
   */
  question: string;

  /**
   * @type {string} images - Base64 encoded image, can be a screenshot (pass only the hexagonal image, do not pass the rest of the content)
   */
  images: string;

  /**
   * @type {string} module - module name
   * @see {@link https://docs.capsolver.com/guide/recognition/FunCaptchaClassification.html}
   */
  module?: string;

  /**
   * @type {string} websiteURL - Page source url to improve accuracy
   */
  websiteURL?: string;

  /**
   * @type {string} websiteKey - 	Website key to improve accuracy
   */
  websiteKey?: string;
}
