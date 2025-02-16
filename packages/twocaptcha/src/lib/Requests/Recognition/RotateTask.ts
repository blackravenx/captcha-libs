import type { _IsTaskType } from "../_BaseTaskRequest";

import { BaseTask, type BaseParams } from "../_BaseTaskRequest";

type RotateTaskParams = Omit<BaseParams, "type"> & {
  "angle"?: number;
  "body": string;
  "comment"?: string;
  "imgInstructions"?: string;
};

/**
 * The method is used to solve captchas where you need to rotate an object to place it properly. Returns the required rotation angle.
 * @extends {BaseTask}
 * @see {@link https://2captcha.com/api-docs/rotate}
 */
export class RotateTask extends BaseTask implements _IsTaskType, RotateTaskParams {

  /**
  * @type {string} comment - A comment will be shown to workers to help them to solve the captcha properly
  */
  comment?: string;

  /**
   * @type {string} body - Image encoded into Base64 format. Data-URI format (containing data:content/type prefix) is also supported
   */
  body: string;

  /**
   * @type {number} angle - One step rotation angle. You can count how many steps are required to rotate the image 360 degrees and then divide 360 by this count to get the angle value
   */
  angle?: number;

  /**
   * @type {string} imgInstructions - An optional image with instruction that will be shown to workers. Image should be encoded into Base64 format. Max file size: 100 kB
   */
  imgInstructions?: string;

  /**
  * @type {boolean} _isRotateTask - Only used for correct method overloading intellisense
  */
  readonly _isRotateTask: _IsTaskType["_isRotateTask"] = true;

  /**
  * Create RotateTask
  * @see {@link https://2captcha.com/api-docs/rotate}
  * @param {Object} params - RotateTaskParams
  * @param {string} [params.body] - Image encoded into Base64 format. Data-URI format (containing data:content/type prefix) is also supported
  * @param {string=} [params.comment] - A comment will be shown to workers to help them to solve the captcha properly
  * @param {string=} [params.angle] - One step rotation angle. You can count how many steps are required to rotate the image 360 degrees and then divide 360 by this count to get the angle value
  * @type {string} [params.imgInstructions] - An optional image with instruction that will be shown to workers. Image should be encoded into Base64 format. Max file size: 100 kB
  */
  constructor ({ body, comment, angle, imgInstructions }: RotateTaskParams) {
    super({ "type": "RotateTask" });

    this.body = body;

    this.comment = comment;

    this.angle = angle;

    this.imgInstructions = imgInstructions;
  }
}
