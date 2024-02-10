import { TaskSolutionTypes } from "../_BaseTaskRequest";
import {
  RecognitionBaseParams, RecognitionBaseTask
} from "./_RecognitionBaseTask";

type SeoFastCoordinatesParams = Omit<RecognitionBaseParams, "click">;

/**
 * @classdesc SeoFast coordinates task
 * This method solves Seo-fast/Profitcentr/Seotime, with image clicks. We detect objects on the captcha and send you the coordinates for clicking.
 * @class
 * @extends {RecognitionBaseTask}
 * {@link https://docs.cap.guru/en/apiclick/other/seofast.html}
 */
export class SeoFastCoordinatesTask extends RecognitionBaseTask implements SeoFastCoordinatesParams, TaskSolutionTypes {

  /**
   * Create  SeoFast coordinates task. This method solves Seo-fast/Profitcentr/Seotime, with image clicks. We detect objects on the captcha and send you the coordinates for clicking.
   * This task uses click='oth'
   * {@link https://docs.cap.guru/en/apiclick/other/seofast.html}
   * @param {SeoFastCoordinatesParams} params - params
   * @param {string} [params.textinstructions] - 	For example: custom1222,Отметьте изображения со бантиками
   * @param {string} [params.body] - Image encoded in Base64 format
   */
  constructor(params: SeoFastCoordinatesParams) {
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