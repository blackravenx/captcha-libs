import { TaskSolutionTypes } from "../_BaseTaskRequest";
import {
  RecognitionBaseParams, RecognitionBaseTask
} from "./_RecognitionBaseTask";

type WorldCashCoordinatesParams = Omit<RecognitionBaseParams, "click" | "textinstructions">;

/**
 * @classdesc WorldCash coordinates task
 * This method solves World.cash, with image clicks. We detect objects on the captcha and send you the coordinates for clicking.
 * @class
 * @extends {RecognitionBaseTask}
 * {@link https://docs.cap.guru/en/apiclick/other/worldcash.html}
 */
export class WorldCashCoordinatesTask extends RecognitionBaseTask implements WorldCashCoordinatesParams, TaskSolutionTypes {

  /**
   * Create  WorldCash coordinates task. This method solves World.cash, with image clicks. We detect objects on the captcha and send you the coordinates for clicking.
   * This task uses click='oth' and textinstructions='custom1224'
   * {@link https://docs.cap.guru/en/apiclick/other/worldcash.html}
   * @param {WorldCashCoordinatesParams} params - params
   * @param {string} [params.body] - Image encoded in Base64 format
   */
  constructor(params: WorldCashCoordinatesParams) {
    super({
      ...params,
      click: "oth",
      textinstructions: "custom1224"
    });
  }

  /**
   * @type {boolean} isMultipleCoordinates - only used for correctly working method overloading intellisense
   */
  "isMultipleCoordinates": TaskSolutionTypes["isMultipleCoordinates"] = true;
}