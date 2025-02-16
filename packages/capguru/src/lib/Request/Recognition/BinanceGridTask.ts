import type { TaskSolutionTypes } from "../_BaseTaskRequest";

import type { RecognitionBaseParams } from "./_RecognitionBaseTask";

import { RecognitionBaseTask } from "./_RecognitionBaseTask";

type BinanceGridParams = Omit<RecognitionBaseParams, "click"> & { "textinstructions": string };

/**
 * @classdesc Binance Grid (3x3) task
 * @class
 * @extends {RecognitionBaseTask}
 * @see {@link https://docs.cap.guru/en/apiclick/binance.html}
 */
export class BinanceGridTask extends RecognitionBaseTask implements BinanceGridParams, TaskSolutionTypes {

  /**
   * Create binance grid task
   * This task uses click='geetest'
   * @see {@link https://docs.cap.guru/en/apiclick/binance.html}
   * @param {BinanceGridParams} params - params
   * @param {string} [params.textinstructions] - For example: binance,bear. Only tasks in English are supported!
   * @param {string} [params.body] - Image encoded in Base64 format
   */
  constructor (params: BinanceGridParams) {
    super({
      ...params,
      "click": "geetest2"
    });
  }

  /**
   * @type {boolean} isGrid - only used for correctly working method overloading intellisense
   */
  /**
   * @type {boolean} isGrid - only used for correctly working method overloading intellisense
   */
  isGrid: TaskSolutionTypes["isGrid"] = true;
}
