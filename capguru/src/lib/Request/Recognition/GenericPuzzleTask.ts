import { TaskSolutionTypes } from "../_BaseTaskRequest";
import {
  RecognitionBaseParams, RecognitionBaseTask
} from "./_RecognitionBaseTask";

export type GenericPuzzleTaskParams = Omit<RecognitionBaseParams, "click" | "textinstructions">;

/**
 * @classdesc Generic Puzzle task
 * This task uses click=geetest and textinstructions=slider
 * @class
 * @extends {RecognitionBaseTask}
 * {@link https://docs.cap.guru/en/api/slider.html}
 */
export class GenericPuzzleTask extends RecognitionBaseTask implements GenericPuzzleTaskParams, TaskSolutionTypes {

  /**
   * Create Puzzle task
   * This task uses click='geetest' and textinstructions='slider'
   * {@link https://docs.cap.guru/en/api/slider.html}
   * @param {GenericPuzzleTaskParams} params - params
   * @param {string} [params.body] - Image encoded in Base64 format
   */
  constructor(params: GenericPuzzleTaskParams) {
    super({
      ...params,
      click: "geetest",
      textinstructions: "slider"
    });
  }

  /**
   * @type {boolean} isSingleCoordinate - only used for correctly working method overloading intellisense
   */
  isSingleCoordinate: TaskSolutionTypes["isSingleCoordinate"] = true;
}