import type { GenericPuzzleTaskParams } from "./GenericPuzzleTask";
import { GenericPuzzleTask } from "./GenericPuzzleTask";

type GeeTestPuzzleParams = GenericPuzzleTaskParams;

/**
 * @classdesc GeeTest Puzzle task
 * @class
 * @extends {GenericPuzzleTask}
 * {@link https://docs.cap.guru/en/apiclick/geetest.html}
 */
export class GeeTestPuzzleTask extends GenericPuzzleTask implements GeeTestPuzzleParams {

  /**
   * Create GeeTest Puzzle task
   * This task uses click='geetest' and textinstructions='slider'
   * {@link https://docs.cap.guru/en/apiclick/geetest.html}
   * @param {GeeTestGridParams} params - params
   * @param {string} [params.body] - Image encoded in Base64 format
   */
  constructor(params: GeeTestPuzzleParams) {
    super(params);
  }
}