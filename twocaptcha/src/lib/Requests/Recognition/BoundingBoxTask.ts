import {
  BaseTask, _IsTaskType
} from "../_BaseTaskRequest";

interface BoundingBoxTaskParams {
  body: string;
  comment?: string;
  imgInstructions?: string;
}

type BoundingBoxTaskCommentParam = BoundingBoxTaskParams & {
  comment: string;
};

type BoundingBoxTaskImgInstructionsParam = BoundingBoxTaskParams & {
  imgInstructions: string;
};

/**
 * The method can be used to solve tasks where you need to select a specific object or draw a box around an object shown on an image.
 * @extends {BaseTask}
 * {@link https://2captcha.com/api-docs/bounding-box}
 */
export class BoundingBoxTask extends BaseTask implements _IsTaskType, BoundingBoxTaskParams {

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
  * @type {boolean} _isBoundingBoxTask - Only used for correct method overloading intellisense
  */
  readonly _isBoundingBoxTask = true;

  /**
  * Create BoundingBoxTask
  * {@link https://2captcha.com/api-docs/bounding-box}
  * @param {Object} params - BoundingBoxTaskParams
  * @param {string} [params.body] - Image encoded into Base64 format. Data-URI format (containing data:content/type prefix) is also supported
  * @param {string=} [params.comment] - A comment will be shown to workers to help them to solve the captcha properly
  * @type {string=} [params.imgInstructions] - An optional image with instruction that will be shown to workers. Image should be encoded into Base64 format. Max file size: 100 kB
  */
  constructor({
    body, comment, imgInstructions
  }: BoundingBoxTaskCommentParam | BoundingBoxTaskImgInstructionsParam) {
    super({ type: "BoundingBoxTask" });
    this.body = body;
    this.comment = comment;
    this.imgInstructions = imgInstructions;
  }
}