import type { _IsTaskType } from "../_BaseTaskRequest";

import { BaseTask } from "../_BaseTaskRequest";

const _ImageToTextModules = [
  "common",
  "module_001",
  "module_002",
  "module_003",
  "module_004",
  "module_005",
  "module_006",
  "module_007",
  "module_008",
  "module_010",
  "module_012",
  "module_013",
  "module_014",
  "module_015",
  "module_016",
  "module_017",
  "module_018",
  "module_019",
  "module_020",
  "module_021",
  "module_022",
  "module_023",
  "module_024",
  "module_025",
  "module_026",
  "module_027",
  "module_028",
  "module_029"
] as const;

type ImageToTextModules = typeof _ImageToTextModules[number];

interface ImageToTextParams {
  "body": string;
  "module"?: ImageToTextModules;
  "score"?: number;
  "websiteURL"?: string;
}

/**
 * @classdesc OCR ImageToText
 * @class
 * @extends {BaseTask}
 * @see {@link https://docs.capsolver.com/guide/recognition/ImageToTextTask.html}
 */
export class ImageToTextTask extends BaseTask implements ImageToTextParams, _IsTaskType {

  /**
  * @type {boolean} _isImageToTextTask - Only used for correct method overloading intellisense
  */
  readonly _isImageToTextTask: _IsTaskType["_isImageToTextTask"] = true;

  /**
   * Create ImageToTextTask
   * @see {@link https://docs.capsolver.com/guide/recognition/ImageToTextTask.html}
   * @param {Object} params - ImageToTextParams
   * @param {string} [params.body] - base64 encoded content of the image (no newlines) (no data:image/*; base64, content
   * @param {boolean=} [params.isCaseSensitive] - Case sensitive or not
   * @param {ImageToTextModules=} [params.module] - Specifies the module. Currently, the supported modules are common and queueit
   * @param {number=} [params.score] - 0.8 ~ 1, Identify the matching degree. If the recognition rate is not within the range, no deduction
   * @param {string} [params.websiteURL] - Page source url to improve accuracy
   */
  constructor ({ body, "module": _module, score, websiteURL }: ImageToTextParams) {
    super({ "type": "ImageToTextTask" });

    this.body = body;

    this.score = score;

    this.module = _module;

    this.websiteURL = websiteURL;
  }

  /**
   * @type {string} body - base64 encoded content of the image (no newlines) (no data:image/*; base64, content
   */
  body: string;

  /**
   * @type {boolean=} case - Case sensitive or not
   */
  case?: boolean;

  /**
   * @type {ImageToTextModules=} module - Specifies the module. Currently, the supported modules are common and queueit
   * {@see https://docs.capsolver.com/guide/recognition/ImageToTextTask.html}
   */
  module?: ImageToTextModules;

  /**
   * @type {number=} score - 0.8 ~ 1, Identify the matching degree. If the recognition rate is not within the range, no deduction
   */
  score?: number;

  /**
   * @type {string} websiteURL - Page source url to improve accuracy
   */
  websiteURL?: string;
}
