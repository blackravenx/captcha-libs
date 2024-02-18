import type { _IsTaskType } from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";

type GridTaskParams = {
  body: string;
  columns?: number;
  comment?: string;
  imgInstructions?: string;
  rows?: number;
};

type GridTaskParamsCommentParams = GridTaskParams & { comment: string };

type GridTaskParamsImgInstructionsParams = GridTaskParams & { imgInstructions: string };

/**
 * The method can be used to bypass tasks where a grid is applied to an image and you need to click on grid tiles, like reCAPTCHA or hCaptcha images.
 * @extends {BaseTask}
 * {@link https://2captcha.com/api-docs/grid}
 */
export class GridTask extends BaseTask implements _IsTaskType, GridTaskParams {

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
   * @type {number} rows - 	Number of grid rows
   */
  rows?: number;

  /**
   * @type {number} columns -	Number of grid columns
   */
  columns?: number;

  /**
  * @type {boolean} _isGridTask - Only used for correct method overloading intellisense
  */
  readonly _isGridTask = true;

  /**
  * Create GridTask
  * {@link https://2captcha.com/api-docs/grid}
  * @param {Object} params - GridTaskParams
  * @param {string} [params.body] - Image encoded into Base64 format. Data-URI format (containing data:content/type prefix) is also supported
  * @param {string=} [params.comment] - A comment will be shown to workers to help them to solve the captcha properly
  * @param {string} [params.imgInstructions] - An optional image with instruction that will be shown to workers. Image should be encoded into Base64 format. Max file size: 100 kB
  * @param {number} [params.rows] - Number of grid rows
  * @param {number} [params.columns] - Number of grid columns
  */
  constructor({
    body, comment, imgInstructions, columns, rows
  }: GridTaskParamsCommentParams | GridTaskParamsImgInstructionsParams) {
    super({ type: "GridTask" });
    this.body = body;
    this.comment = comment;
    this.imgInstructions = imgInstructions;
    this.rows = rows;
    this.columns = columns;
  }
}