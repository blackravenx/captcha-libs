import type { TaskSolutionTypes } from "../_BaseTaskRequest";

import type { RecognitionBaseParams } from "./_RecognitionBaseTask";

import { RecognitionBaseTask } from "./_RecognitionBaseTask";

type AmazonCarPathParams = Omit<RecognitionBaseParams, "click" | "textinstructions">;

/**
 * @classdesc Amazon Car path task
 * @class
 * @extends {RecognitionBaseTask}
 * @see {@link https://docs.cap.guru/en/apiclick/binance.html}
 */
export class AmazonCarPathTask extends RecognitionBaseTask implements AmazonCarPathParams, TaskSolutionTypes {

  /**
   * Create Amazon car path task
   * This task uses click='oth' and textinstructions='Amazon,Place a dot at the end of the car's path'
   * @see {@link https://docs.cap.guru/en/apiclick/aws.html}
   * @param {AmazonCarPathParams} params - params
   * @param {string} [params.body] - Image encoded in Base64 format
   */
  constructor (params: AmazonCarPathParams) {
    super({
      ...params,
      "click": "oth",
      "textinstructions": "Amazon,Place a dot at the end of the car's path"
    });
  }

  /**
   * @type {boolean} isSingleCoordinate - only used for correctly working method overloading intellisense
   */
  isSingleCoordinate: TaskSolutionTypes["isSingleCoordinate"] = true;
}
