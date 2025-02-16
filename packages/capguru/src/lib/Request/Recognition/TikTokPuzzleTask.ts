import type { TaskSolutionTypes } from "../_BaseTaskRequest";

import type { GenericPuzzleTaskParams } from "./GenericPuzzleTask";

import { GenericPuzzleTask } from "./GenericPuzzleTask";

type TikTokPuzzleParams = GenericPuzzleTaskParams;

/**
 * @classdesc TikTok Puzzle task
 * @class
 * @extends {GenericPuzzleTask}
 * @see {@link https://docs.cap.guru/en/apiclick/tiktok.html}
 */
export class TikTokPuzzleTask extends GenericPuzzleTask implements TikTokPuzzleParams, TaskSolutionTypes {

  /**
   * Create TikTok Puzzle task
   * This task uses click='geetest' and textinstructions='slider'
   * @see {@link https://docs.cap.guru/en/apiclick/tiktok.html}
   * @param {TikTokGridParams} params - params
   * @param {string} [params.body] - Image encoded in Base64 format
   */
  constructor (params: TikTokPuzzleParams) {
    super(params);
  }
}
