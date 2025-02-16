import type { TaskSolutionTypes } from "../_BaseTaskRequest";

import type { RecognitionBaseParams } from "./_RecognitionBaseTask";

import { RecognitionBaseTask } from "./_RecognitionBaseTask";

type BuxMoneyCoordinatesParams = Omit<RecognitionBaseParams, "click" | "textinstructions">;

/**
 * @classdesc BuxMoney coordinates task
 * This method allows you to solve bux.money and payup.video, with image clicks. We detect objects on the captcha and send you the coordinates for clicking.
 * @class
 * @extends {RecognitionBaseTask}
 * @see {@link https://docs.cap.guru/en/apiclick/other/seofast.html}
 */
export class BuxMoneyCoordinatesTask extends RecognitionBaseTask implements BuxMoneyCoordinatesParams, TaskSolutionTypes {

  /**
   * Create  BuxMoney coordinates task. This method allows you to solve bux.money and payup.video, with image clicks. We detect objects on the captcha and send you the coordinates for clicking.
   * This task uses click='oth' and textinstructions='custom1223'
   * @see {@link https://docs.cap.guru/en/apiclick/other/seofast.html}
   * @param {BuxMoneyCoordinatesParams} params - params
   * @param {string} [params.body] - Image encoded in Base64 format
   */
  constructor (params: BuxMoneyCoordinatesParams) {
    super({
      ...params,
      "click": "oth",
      "textinstructions": "custom1223"
    });
  }

  /**
   * @type {boolean} isMultipleCoordinates - only used for correctly working method overloading intellisense
   */
  "isMultipleCoordinates": TaskSolutionTypes["isMultipleCoordinates"] = true;
}
