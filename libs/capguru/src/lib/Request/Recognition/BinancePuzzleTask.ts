import type { TaskSolutionTypes } from "../_BaseTaskRequest";
import type { RecognitionBaseParams } from "./_RecognitionBaseTask";
import { RecognitionBaseTask } from "./_RecognitionBaseTask";

type BinancePuzzleParams = Omit<RecognitionBaseParams, "click" | "textinstructions"> & { body: string };

/**
 * @classdesc Binance Puzzle task
 * @class
 * @extends {RecognitionBaseTask}
 * {@link https://docs.cap.guru/en/apiclick/binance.html}
 */
export class BinancePuzzleTask extends RecognitionBaseTask implements BinancePuzzleParams, TaskSolutionTypes {

  /**
   * Create binance grid task
   * This task uses click='geetest' and textinstructions='binance,slider'
   * {@link https://docs.cap.guru/en/apiclick/binance.html}
   * @param {BinanceGridParams} params - params
   * @param {string} [params.body] - Image encoded in Base64 format
   */
  constructor(params: BinancePuzzleParams) {
    super({
      ...params,
      click: "geetest",
      textinstructions: "binance,slider"
    });
  }

  /**
   * @type {boolean} isSingleCoordinate - only used for correctly working method overloading intellisense
   */
  isSingleCoordinate: TaskSolutionTypes["isSingleCoordinate"] = true;
}