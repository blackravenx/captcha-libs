import type { _IsTaskType } from "./_BaseTaskRequest";

import { BaseTask } from "./_BaseTaskRequest";

interface ImageToTextParams {
  "body": string;
  "module"?: string;
}

/**
 * @classdesc OCR ImageToText
 * @class
 * @extends {BaseTask}
 * @see {@link https://solvecha.com/docs}
 */
export class ImageToTextTask extends BaseTask implements ImageToTextParams, _IsTaskType {

  /**
   * @type {boolean} _isImageToTextTask - Only used for correct method overloading intellisense
   */
  readonly _isImageToTextTask: _IsTaskType["_isImageToTextTask"] = true;

  /**
   * Create ImageToTextTask
   * @param {Object} params - ImageToTextParams
   * @param {string} [params.body] - base64 encoded content of the image (no newlines, no data:image/*;base64, prefix)
   * @param {string=} [params.module] - Optional module, for example common
   */
  constructor ({ body, "module": _module }: ImageToTextParams) {
    super({ "type": "ImageToTextTask" });

    this.body = body;

    this.module = _module;
  }

  /**
   * @type {string} body - base64 encoded content of the image (no newlines, no data:image/*;base64, prefix)
   */
  body: string;

  /**
   * @type {string=} module - Optional module, for example common
   */
  module?: string;
}
