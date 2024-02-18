import type { _IsTaskType } from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";

type CoordinatesTaskParams = {
  body: string;
  comment?: string;
  imgInstructions?: string;
};

/**
 * The method can be used to bypass tasks where you need to click on some points of an image.
 * @extends {BaseTask}
 * {@link https://2captcha.com/api-docs/coordinates}
 */
export class CoordinatesTask extends BaseTask implements _IsTaskType, CoordinatesTaskParams {

  /**
  * @type {string} comment - A comment will be shown to workers to help them to solve the captcha properly
  */
  comment?: string;

  /**
   * @type {string} body - Image encoded into Base64 format. Data-URI format (containing data:content/type prefix) is also supported
   */
  body: string;

  /**
   * @type {string} imgInstructions - An optional image with instruction that will be shown to workers. Image should be encoded into Base64 format. Max file size: 100 kB
   */
  imgInstructions?: string;

  /**
  * @type {boolean} _isCoordinatesTask - Only used for correct method overloading intellisense
  */
  readonly _isCoordinatesTask = true;

  /**
  * Create CoordinatesTask
  * {@link https://2captcha.com/api-docs/coordinates}
  * @param {Object} params - CoordinatesTaskParams
  * @param {string} [params.body] - Image encoded into Base64 format. Data-URI format (containing data:content/type prefix) is also supported
  * @param {string=} [params.comment] - A comment will be shown to workers to help them to solve the captcha properly
  * @param {string} [params.imgInstructions] - An optional image with instruction that will be shown to workers. Image should be encoded into Base64 format. Max file size: 100 kB
  */
  constructor({
    body, comment, imgInstructions
  }: CoordinatesTaskParams) {
    super({ type: "CoordinatesTask" });
    this.body = body;
    this.comment = comment;
    this.imgInstructions = imgInstructions;
  }
}