export type TaskTypes = "ImageToTextTask" | "ReCaptchaV2Classification";

export interface BaseParams { "type": TaskTypes }

/**
 * @type {_IsTaskType} _IsTaskType - Only used for correct method overloading intellisense
 */
export type _IsTaskType = { readonly [type in TaskTypes as `_is${type}`]?: boolean };

/**
 * @classdesc BaseTask for Solvecha tasks
 * @class
 */
export abstract class BaseTask {

  /**
   * @type {TaskTypes} type - task type
   */
  protected type: TaskTypes;

  constructor (params: BaseParams) {
    this.type = params.type;
  }
}
