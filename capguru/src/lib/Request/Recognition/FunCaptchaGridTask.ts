import { TaskSolutionTypes } from "../_BaseTaskRequest";
import {
  RecognitionBaseParams, RecognitionBaseTask
} from "./_RecognitionBaseTask";

type FunCaptchaGridParams = Omit<RecognitionBaseParams, "click"> & { textinstructions: string };

/**
 * @classdesc FunCaptcha Grid (3x3) task
 * @class
 * @extends {RecognitionBaseTask}
 * {@link https://docs.cap.guru/en/apiclick/funcap.html}
 */
export class FunCaptchaGridTask extends RecognitionBaseTask implements FunCaptchaGridParams, TaskSolutionTypes {

  /**
   * Create FunCaptcha grid task
   * This task uses click='funcap2'
   * {@link https://docs.cap.guru/en/apiclick/funcap.html}
   * @param {FunCaptchaGridParams} params - params
   * @param {string} [params.textinstructions] - For example: Pick the spiral galaxy
   * @param {string} [params.body] - Image encoded in Base64 format
   */
  constructor(params: FunCaptchaGridParams) {
    super({
      ...params,
      click: "funcap2"
    });
  }

  /**
   * @type {boolean} isGrid - only used for correctly working method overloading intellisense
   */
  isGrid: TaskSolutionTypes["isGrid"] = true;
}