import type { TaskSolutionTypes } from "../_BaseTaskRequest";
import type { RecognitionBaseParams } from "./_RecognitionBaseTask";
import { RecognitionBaseTask } from "./_RecognitionBaseTask";

type LinkvertiseCoordinatesParams = Omit<RecognitionBaseParams, "click"> & { textinstructions: string };

/**
 * @classdesc Linkvertise coordinates task
 * This method solves Linkvertise, with image clicks. We detect objects on the captcha and send you the coordinates for clicking.
 * @class
 * @extends {RecognitionBaseTask}
 * {@link https://docs.cap.guru/en/apiclick/other/linkvertise.html}
 */
export class LinkvertiseCoordinatesTask extends RecognitionBaseTask implements LinkvertiseCoordinatesParams, TaskSolutionTypes {

  /**
   * Create Linkvertise coordinates task. This method solves Linkvertise, with image clicks. We detect objects on the captcha and send you the coordinates for clicking.
   * This task uses click='oth'
   * {@link https://docs.cap.guru/en/apiclick/other/linkvertise.html}
   * @param {LinkvertiseCoordinatesParams} params - params
   * @param {string} [params.textinstructions] - 	For example: custom1221,Please click on the globe
   * @param {string} [params.body] - Image encoded in Base64 format
   */
  constructor(params: LinkvertiseCoordinatesParams) {
    super({
      ...params,
      click: "oth"
    });
  }

  /**
   * @type {boolean} isMultipleCoordinates - only used for correctly working method overloading intellisense
   */
  "isMultipleCoordinates": TaskSolutionTypes["isMultipleCoordinates"] = true;
}