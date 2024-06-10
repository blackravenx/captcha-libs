import type { _IsTaskType } from "../_BaseTaskRequest";
import {
  BaseTask, type BaseParams
} from "../_BaseTaskRequest";

export enum NumericOptions {
  none=0,
  onlyNumbers=1,
  onlyLetters=2,
  numbersOrLetters=3,
  numbersAndLetters=4
}

type ImageToTextParams = Omit<BaseParams, "type"> & {
  body: string;
  case?: boolean;
  comment?: string;
  imgInstructions?: string;
  math?: boolean;
  maxLength?: number;
  minLength?: number;
  numeric?: NumericOptions;
  phrase?: boolean;
};

/**
 * Normal CAPTCHA is an image that contains distored but human-readable text. To solve the captcha user have to type the text from the image.
 * @extends {BaseTask}
 * {@link https://2captcha.com/api-docs/normal-captcha}
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
   * @type {string} comment - A comment will be shown to workers to help them to solve the captcha properly
   */
  comment?: string;

  /**
   * @type {string} imgInstructions - An optional image with instruction that will be shown to workers. Image should be encoded into Base64 format.
   */
  imgInstructions?: string;

  /**
   * @type {string} math - Captcha requires calculation
   */
  math?: boolean;

  /**
   * @type {number} maxLength - defines maximal answer length
   */
  maxLength?: number;

  /**
   * @type {number} maxLength - defines minimal answer length
   */
  minLength?: number;

  /**
   * @type {number} maxLength - Numeric preference
   */
  numeric?: NumericOptions;

  /**
   * @type {number} maxLength - The answer should contain at least two words separated by space.
   */
  phrase?: boolean;

  /**
  * @type {boolean} _isImageToTextTask - Only used for correct method overloading intellisense
  */
  readonly _isImageToTextTask: _IsTaskType["_isImageToTextTask"] = true;

  /**
  * Create ImageToTextTask
  * {@link https://2captcha.com/api-docs/normal-captcha}
  * @param {Object} params - ImageToTextParams
  * @param {string} [params.body] - 	Image encoded into Base64 format. Data-URI format (containing data:content/type prefix) is also supported
  * @param {boolean=} [params.case] - Case sensitive or not
  * @param {string=} [params.comment] - A comment will be shown to workers to help them to solve the captcha properly
  * @param {string=} [params.imgInstructions] - An optional image with instruction that will be shown to workers. Image should be encoded into Base64 format.
  * @param {boolean=} [params.math] - captcha requires calculation
  * @param {number=} [params.maxLength] - defines maximal answer length
  * @param {number=} [params.minLength] - defines minimal answer length
  * @param {NumericOptions=} [params.numeric] - Numeric preference
  * @param {boolean=} [params.phrase] - The answer should contain at least two words separated by space.
  */
  constructor({
    body, case: _case, comment, imgInstructions, math, maxLength, minLength, numeric, phrase
  }: ImageToTextParams) {
    super({ type: "ImageToTextTask" });
    this.body = body;
    this.case = _case;
    this.comment = comment;
    this.imgInstructions = imgInstructions;
    this.math = math;
    this.maxLength = maxLength;
    this.minLength = minLength;
    this.numeric = numeric;
    this.phrase = phrase;
  }
}