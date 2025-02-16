import type { TaskSolutionTypes } from "../_BaseTaskRequest";

import type { RecognitionBaseParams } from "./_RecognitionBaseTask";

import { RecognitionBaseTask } from "./_RecognitionBaseTask";

export type GenericPuzzleTaskParams = Omit<RecognitionBaseParams, "click" | "textinstructions">;

/**
 * @classdesc Generic Puzzle task
 * This task uses click=geetest and textinstructions=slider
 * @class
 * @extends {RecognitionBaseTask}
 * @see {@link https://docs.cap.guru/en/api/slider.html}
 */
export class GenericPuzzleTask extends RecognitionBaseTask implements GenericPuzzleTaskParams, TaskSolutionTypes {

  /**
   * Create Puzzle task
   * This task uses click='geetest' and textinstructions='slider'
   * @see {@link https://docs.cap.guru/en/api/slider.html}
   * @param {GenericPuzzleTaskParams} params - params
   * @param {string} [params.body] - Image encoded in Base64 format
   */
  constructor (params: GenericPuzzleTaskParams) {
    super({
      ...params,
      "click": "geetest",
      "textinstructions": "slider"
    });
  }

  /**
   * @type {boolean} isSingleCoordinate - only used for correctly working method overloading intellisense
   */
  isSingleCoordinate: TaskSolutionTypes["isSingleCoordinate"] = true;
}
