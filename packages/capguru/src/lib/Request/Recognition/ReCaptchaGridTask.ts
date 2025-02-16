import type { TaskSolutionTypes } from "../_BaseTaskRequest";

import type { RecognitionBaseParams } from "./_RecognitionBaseTask";

import { RecognitionBaseTask } from "./_RecognitionBaseTask";

type ReCaptchaGridParams = Omit<RecognitionBaseParams, "click"> & { "textinstructions": string };

/**
 * @classdesc ReCaptcha Grid (3x3) task
 * @class
 * @extends {RecognitionBaseTask}
 * @see {@link https://docs.cap.guru/en/apiclick/recap.html}
 */
export class ReCaptchaGridTask extends RecognitionBaseTask implements ReCaptchaGridParams, TaskSolutionTypes {

  /**
   * Create ReCaptcha grid task
   * This task uses click='recap2'
   * @see {@link https://docs.cap.guru/en/apiclick/recap.html}
   * @param {ReCaptchaGridParams} params - params
   * @param {string} [params.textinstructions] - For example: Select all images with traffic light
   * @param {string} [params.body] - Image encoded in Base64 format
   */
  constructor (params: ReCaptchaGridParams) {
    super({
      ...params,
      "click": "recap2"
    });
  }

  /**
   * @type {boolean} isGrid - only used for correctly working method overloading intellisense
   */
  isGrid: TaskSolutionTypes["isGrid"] = true;
}
