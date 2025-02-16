import type { _IsTaskType } from "../_BaseTaskRequest";

import { BaseTask } from "../_BaseTaskRequest";

interface DrawAroundTaskParams {
  "body": string;
  "comment"?: string;
  "imgInstructions"?: string;
}

type DrawAroundTaskCommentParam = DrawAroundTaskParams & { "comment": string };

type DrawAroundTaskImgInstructionsParam = DrawAroundTaskParams & { "imgInstructions": string };

/**
 * The method can be used to bypass tasks where you need to draw a line around a specific object shown on an image.
 * @extends {BaseTask}
 * @see {@link https://2captcha.com/api-docs/draw-around}
 */
export class DrawAroundTask extends BaseTask implements _IsTaskType, DrawAroundTaskParams {

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
  * @type {boolean} _isDrawAroundTask - Only used for correct method overloading intellisense
  */
  readonly _isDrawAroundTask: _IsTaskType["_isDrawAroundTask"] = true;

  /**
  * Create DrawAroundTask
  * @see {@link https://2captcha.com/api-docs/draw-around}
  * @param {Object} params - DrawAroundTaskParams
  * @param {string} [params.body] - Image encoded into Base64 format. Data-URI format (containing data:content/type prefix) is also supported
  * @param {string=} [params.comment] - A comment will be shown to workers to help them to solve the captcha properly
  * @type {string} [params.imgInstructions] - An optional image with instruction that will be shown to workers. Image should be encoded into Base64 format. Max file size: 100 kB
  */
  constructor ({ body, comment, imgInstructions }: DrawAroundTaskCommentParam | DrawAroundTaskImgInstructionsParam) {
    super({ "type": "DrawAroundTask" });

    this.body = body;

    this.comment = comment;

    this.imgInstructions = imgInstructions;
  }
}
