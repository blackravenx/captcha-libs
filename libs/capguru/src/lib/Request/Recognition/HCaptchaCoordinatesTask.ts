import type { TaskSolutionTypes } from "../_BaseTaskRequest";
import type { RecognitionBaseParams } from "./_RecognitionBaseTask";
import { RecognitionBaseTask } from "./_RecognitionBaseTask";

type HCaptchaCoordinatesParams = Omit<RecognitionBaseParams, "click"> & { textinstructions: string };

/**
 * @classdesc HCaptcha Coordinates
 * @class
 * @extends {RecognitionBaseTask}
 * {@link https://docs.cap.guru/en/apiclick/hcap.html}
 */
export class HCaptchaCoordinatesTask extends RecognitionBaseTask implements HCaptchaCoordinatesParams, TaskSolutionTypes {

  /**
   * Create HCaptcha coordinates task
   * This task uses click='hcap'
   * {@link https://docs.cap.guru/en/apiclick/hcap.html}
   * @param {HCaptchaCoordinatesParams} params - params
   * @param {string} [params.textinstructions] - For example: bear. Tasks are supported only in English!
   * @param {string} [params.body] - Image encoded in Base64 format
   */
  constructor(params: HCaptchaCoordinatesParams) {
    super({
      ...params,
      click: "hcap"
    });
  }

  /**
   * @type {boolean} isMultipleCoordinates - only used for correctly working method overloading intellisense
   */
  "isMultipleCoordinates": TaskSolutionTypes["isMultipleCoordinates"] = true;
}