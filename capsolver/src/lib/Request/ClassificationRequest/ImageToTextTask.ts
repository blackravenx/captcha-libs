import {
  BaseTask, type BaseParams
} from "../_BaseTaskRequest";

const _ImageToTextModules = [
  "amazon",
  "amazon-gif",
  "cargo",
  "common",
  "cybersiara",
  "dell",
  "enzo",
  "euro",
  "io-bs-mou",
  "mark",
  "mtcaptcha",
  "queue-it",
  "webde-imap",
  "webde-login",
  "webde-register"
] as const;

type ImageToTextModules =typeof _ImageToTextModules[keyof typeof _ImageToTextModules];

type ImageToTextParams = Omit<BaseParams, "type"> & {
  body: string;
  isCaseSensitive?: boolean;
  module?: ImageToTextModules;
  score?: number;
  websiteURL?: string;
};

/**
 * @classdesc OCR ImageToText
 * @class
 * @extends {BaseTask}
 * {@link https://docs.capsolver.com/guide/recognition/ImageToTextTask.html}
 */
export class ImageToTextTask extends BaseTask implements ImageToTextParams {

  /**
   * Create ImageToTextTask
   * {@link https://docs.capsolver.com/guide/recognition/ImageToTextTask.html}
   * @param {Object} params - ImageToTextParams
   * @param {string} [params.body] - base64 encoded content of the image (no newlines) (no data:image/*; base64, content
   * @param {boolean=} [params.isCaseSensitive] - Case sensitive or not
   * @param {ImageToTextModules=} [params.module] - Specifies the module. Currently, the supported modules are common and queueit
   * @param {number=} [params.score] - 0.8 ~ 1, Identify the matching degree. If the recognition rate is not within the range, no deduction
   * @param {string} [params.websiteURL] - Page source url to improve accuracy
   */
  constructor({
    body, isCaseSensitive, module, score, websiteURL
  }: ImageToTextParams) {
    super({ type: "ImageToTextTask" });
    this.body = body;
    this.case = isCaseSensitive;
    this.score = score;
    this.module = module;
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
   * {@link https://docs.capsolver.com/guide/recognition/ImageToTextTask.html}
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