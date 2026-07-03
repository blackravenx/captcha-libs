import type { _IsTaskType } from "../_BaseTaskRequest";

import { BaseTask, type BaseParams } from "../_BaseTaskRequest";

export enum NumericOptions {
  "none" = 0,
  "onlyNumbers" = 1,
  "onlyLetters" = 2,
  "numbersOrLetters" = 3,
  "numbersAndLetters" = 4
}

type ImageToTextParams = Omit<BaseParams, "type"> & {
  "body": string;
  "case"?: boolean;
  "math"?: boolean;
  "maxLength"?: number;
  "minLength"?: number;
  "numeric"?: NumericOptions;
  "phrase"?: boolean;
};

/**
 * Normal CAPTCHA is an image that contains distored but human-readable text. To solve the captcha user have to type the text from the image.
 * @extends {BaseTask}
 * @see {@link https://docs.captchaai.com}
 */
export class ImageToTextTask extends BaseTask implements _IsTaskType, ImageToTextParams {

  /**
   * @type {string} body - Image encoded into Base64 format. Data-URI format (containing data:content/type prefix) is also supported
   */
  body: string;

  /**
   * @type {string} case - Case sensitive or not
   */
  case?: boolean;

  /**
   * @type {string} math - Captcha requires calculation
   */
  math?: boolean;

  /**
   * @type {number} maxLength - defines maximal answer length
   */
  maxLength?: number;

  /**
   * @type {number} minLength - defines minimal answer length
   */
  minLength?: number;

  /**
   * @type {NumericOptions} numeric - Numeric preference
   */
  numeric?: NumericOptions;

  /**
   * @type {boolean} phrase - The answer should contain at least two words separated by space.
   */
  phrase?: boolean;

  /**
  * @type {boolean} _isImageToTextTask - Only used for correct method overloading intellisense
  */
  readonly _isImageToTextTask: _IsTaskType["_isImageToTextTask"] = true;

  /**
  * Create ImageToTextTask
  * @see {@link https://docs.captchaai.com}
  * @param {Object} params - ImageToTextParams
  * @param {string} [params.body] - 	Image encoded into Base64 format. Data-URI format (containing data:content/type prefix) is also supported
  * @param {boolean=} [params.case] - Case sensitive or not
  * @param {boolean=} [params.math] - captcha requires calculation
  * @param {number=} [params.maxLength] - defines maximal answer length
  * @param {number=} [params.minLength] - defines minimal answer length
  * @param {NumericOptions=} [params.numeric] - Numeric preference
  * @param {boolean=} [params.phrase] - The answer should contain at least two words separated by space.
  */
  constructor ({ body, "case": _case, math, maxLength, minLength, numeric, phrase }: ImageToTextParams) {
    super({ "type": "ImageToTextTask" }, "base64");

    this.body = body;

    this.case = _case;

    this.math = math;

    this.maxLength = maxLength;

    this.minLength = minLength;

    this.numeric = numeric;

    this.phrase = phrase;
  }
}
