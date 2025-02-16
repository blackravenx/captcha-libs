import type { TaskSolutionTypes } from "../_BaseTaskRequest";

import type { RecognitionBaseParams } from "./_RecognitionBaseTask";

import { RecognitionBaseTask } from "./_RecognitionBaseTask";

type AmazonPuzzleParams = Omit<RecognitionBaseParams, "click">;

/**
 * @classdesc Amazon Puzzle task
 * @class
 * @extends {RecognitionBaseTask}
 * @see {@link https://docs.cap.guru/en/apiclick/aws.html}
 */
export class AmazonPuzzleTask extends RecognitionBaseTask implements AmazonPuzzleParams, TaskSolutionTypes {

  /**
   * Create Amazon puzzle task
   * This task uses click='geetest' and textinstructions='slider'
   * @see {@link https://docs.cap.guru/en/apiclick/aws.html}
   * @param {AmazonPuzzleParams} params - params
   * @param {string} [params.textinstructions] - 	For example: Slide the image to complete the pyramid. Tasks are supported only in English!
   * @param {string} [params.body] - Image encoded in Base64 format
   */
  constructor (params: AmazonPuzzleParams) {
    super({
      ...params,
      "click": "oth"
    });
  }

  /**
   * @type {boolean} isSingleCoordinate - only used for correctly working method overloading intellisense
   */
  isSingleCoordinate: TaskSolutionTypes["isSingleCoordinate"] = true;
}
