import type { _IsTaskType } from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";

const _VisionEngineModules = [
  "slider_1",
  "rotate_1",
  "space_detection"
] as const;

type VisionEngineModules = typeof _VisionEngineModules[number];

interface VisionEngineParams {
  image: string;
  imageBackground: string;
  module: VisionEngineModules;
  question?: string;
  websiteURL?: string;
}

/**
 * @classdesc OCR VisionEngine
 * @class
 * @extends {BaseTask}
 * {@link https://docs.capsolver.com/guide/recognition/VisionEngine.html}
 */
export class VisionEngine extends BaseTask implements VisionEngineParams, _IsTaskType {

  /**
  * @type {boolean} _isVisionEngine - Only used for correct method overloading intellisense
  */
  readonly _isVisionEngine: _IsTaskType["_isVisionEngine"] = true;

  /**
   * Create VisionEngine
   * {@link https://docs.capsolver.com/guide/recognition/VisionEngine.html}
   * @param {Object} params - VisionEngineParams
   * @param {string} [params.image] - base64 encoded content of the image (no newlines, no data:image/***;charset=utf-8;base64,)
   * @param {string} [params.imageBackground] - base64 encoded content of the image (no newlines, no data:image/***;charset=utf-8;base64,)
   * @param {string} [params.question] - required for "space_detection" module
   * @param {VisionEngineModules=} [params.module] - Specifies the module.
   * @param {string} [params.websiteURL] - Page source url to improve accuracy
   */
  constructor({
    image, imageBackground, question, module, websiteURL
  }: VisionEngineParams) {
    super({ type: "VisionEngine" });
    this.image = image;
    this.imageBackground = imageBackground;
    this.question = question;
    this.module = module;
    this.websiteURL = websiteURL;
  }

  /**
   * @type {string} image - base64 encoded content of the image (no newlines, no data:image/***;charset=utf-8;base64,)
   */
  image: string;

  /**
   * @type {string} image - base64 encoded content of the image (no newlines, no data:image/***;charset=utf-8;base64,)
   */
  imageBackground: string;

  /**
   * @type {VisionEngineModules=} module - Specifies the module
   * {@see https://docs.capsolver.com/guide/recognition/VisionEngine.html}
   */
  module: VisionEngineModules;

  /**
   * @param {string} question - required for "space_detection" module
   */
  question?: string;

  /**
   * @type {string} websiteURL - Page source url to improve accuracy
   */
  websiteURL?: string;
}