import type { TaskSolutionTypes } from "../_BaseTaskRequest";

import type { RecognitionBaseParams } from "./_RecognitionBaseTask";

import { RecognitionBaseTask } from "./_RecognitionBaseTask";

type TikTokABCParams = Omit<RecognitionBaseParams, "click" | "textinstructions">;

/**
 * @classdesc TikTok ABC task
 * @class
 * @extends {RecognitionBaseTask}
 * @see {@link https://docs.cap.guru/en/apiclick/tiktok.html}
 */
export class TikTokABCTask extends RecognitionBaseTask implements TikTokABCParams, TaskSolutionTypes {

  /**
   * Create TikTok ABC task
   * This task uses click='geetest' and textinstructions='abc'
   * @see {@link https://docs.cap.guru/en/apiclick/tiktok.html}
   * @param {TikTokGridParams} params - params
   * @param {string} [params.body] - Image encoded in Base64 format
   */
  constructor (params: TikTokABCParams) {
    super({
      ...params,
      "click": "geetest",
      "textinstructions": "abc"
    });
  }

  /**
   * @type {boolean} isMultipleCoordinates - only used for correctly working method overloading intellisense
   */
  "isMultipleCoordinates": TaskSolutionTypes["isMultipleCoordinates"] = true;
}
