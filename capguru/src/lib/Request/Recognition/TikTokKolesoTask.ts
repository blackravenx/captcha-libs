import { TaskSolutionTypes } from "../_BaseTaskRequest";
import {
  RecognitionBaseParams, RecognitionBaseTask
} from "./_RecognitionBaseTask";

type TikTokKolesoParams = Omit<RecognitionBaseParams, "click" | "textinstructions"> & {
  body0?: string;
  body1?: string;
};

/**
 * @classdesc TikTok Koleso task
 * @class
 * @extends {RecognitionBaseTask}
 * {@link https://docs.cap.guru/en/apiclick/tiktok.html}
 */
export class TikTokKolesoTask extends RecognitionBaseTask implements TikTokKolesoParams, TaskSolutionTypes {

  /**
   * Create TikTok Koleso task
   * This task uses click='geetest' and textinstructions='koleso'
   * You can use only one image (body), or body0 and body1 images for outer and inner pieces of TikTok puzzle
   * {@link https://docs.cap.guru/en/apiclick/tiktok.html}
   * @param {TikTokGridParams} params - params
   * @param {string} [params.body] - Image encoded in Base64 format
   * @param {string} [params.body0] - Image encoded in Base64 format
   * @param {string} [params.body1] - Image encoded in Base64 format
   */
  constructor({
    body1, body0, ...params
  }: TikTokKolesoParams) {
    super({
      ...params,
      click: "geetest",
      textinstructions: "koleso"
    });
    this.body0 = body0;
    this.body1 = body1;
  }

  /**
   * @type {boolean} isSingleCoordinate - only used for correctly working method overloading intellisense
   */
  isSingleCoordinate: TaskSolutionTypes["isSingleCoordinate"] = true;

  /**
   * @type {string} body0
   */
  body0?: string;

  /**
   * @type {string} body1
   */
  body1?: string;
}