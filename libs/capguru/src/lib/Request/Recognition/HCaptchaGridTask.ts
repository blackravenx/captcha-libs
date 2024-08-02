import type { TaskSolutionTypes } from "../_BaseTaskRequest";
import type { RecognitionBaseParams } from "./_RecognitionBaseTask";
import { RecognitionBaseTask } from "./_RecognitionBaseTask";

type HCaptchaGridParams = Omit<RecognitionBaseParams, "click"> & { textinstructions: string };

/**
 * @classdesc HCaptcha Grid (3x3) task
 * @class
 * @extends {RecognitionBaseTask}
 * {@link https://docs.cap.guru/en/apiclick/hcap.html}
 */
export class HCaptchaGridTask extends RecognitionBaseTask implements HCaptchaGridParams, TaskSolutionTypes {

  /**
   * Create HCaptcha grid task
   * This task uses click='hcap2'
   * {@link https://docs.cap.guru/en/apiclick/hcap.html}
   * @param {HCaptchaGridParams} params - params
   * @param {string} [params.textinstructions] - For example: Please click each image containing a ladybug
   * @param {string} [params.body] - Image encoded in Base64 format
   */
  constructor(params: HCaptchaGridParams) {
    super({
      ...params,
      click: "hcap2"
    });
  }

  /**
   * @type {boolean} isGrid - only used for correctly working method overloading intellisense
   */
  isGrid: TaskSolutionTypes["isGrid"] = true;
}