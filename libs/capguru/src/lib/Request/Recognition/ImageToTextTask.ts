import type {
  BaseParams, TaskSolutionTypes
} from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";

export enum ImageToTextVernet {
  GeneralV1 = 1,
  GeneralV2 = 6,
  Arithmetic = 22,
  Rambler = 12,
  GeneralYandex = 18,
  Yandex6ch = 20,
  VKontakte = 16,
  SolveMedia = 14,
  Gibdd = 13,
  OkRu = 9,
  WorldOfTanks = 17,
  MicrosoftHotmail = 5,
  GeneralCyrillic = 7
}

type ImageToTextParams = Omit<BaseParams, "method"> & { body: string; vernet?: ImageToTextVernet };

/**
 * @classdesc ImageToText task
 * @class
 * @extends {BaseTask}
 * {@link https://docs.cap.guru/en/apiclick/text.html}
 */
export class ImageToTextTask extends BaseTask implements ImageToTextParams, TaskSolutionTypes {

  /**
   * Create Image to text task
   * {@link https://docs.cap.guru/en/apiclick/text.html}
   * @param {ImageToTextParams} params - params
   * @param {string} [params.body] - Image encoded in Base64 format
   * @param {ImageToTextVernet} [params.vernet] - vernet for image recognition
   */
  constructor({
    body, vernet
  }: ImageToTextParams) {
    super({ method: "base64" });
    this.body = body;
    this.vernet = vernet;
  }

  /**
   * @type {boolean} isString - only used for correctly working method overloading intellisense
   */
  isString: TaskSolutionTypes["isString"] = true;

  /**
   * @param {ImageToTextVernet} vernet - vernet for image recognition
   */
  vernet?: ImageToTextVernet;

  /**
   * @type {string} body - Image encoded in Base64 format
   */
  body: string;
}