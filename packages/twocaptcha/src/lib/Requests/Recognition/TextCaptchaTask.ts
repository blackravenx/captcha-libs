import type { _IsTaskType } from "../_BaseTaskRequest";

import { BaseTask, type BaseParams } from "../_BaseTaskRequest";

type TextCaptchaParams = Omit<BaseParams, "type"> & { "comment": string };

//
// The method can be used to bypass tasks where you need to answer a question.
// You can add some context that can help workers to provide the answer.
// @extends {BaseTask}
// {@link https://2captcha.com/api-docs/text}
//
export class TextCaptchaTask extends BaseTask implements _IsTaskType, TextCaptchaParams {

  /**
  * @type {string} comment - Text with a question you need to answer.
  */
  comment: string;

  /**
  * @type {boolean} _isTextCaptchaTask - Only used for correct method overloading intellisense
  */
  readonly _isTextCaptchaTask: _IsTaskType["_isTextCaptchaTask"] = true;

  /**
  * Create TextCaptchaTask
  * @see {@link https://2captcha.com/api-docs/text}
  * @param {Object} params - TextCaptchaParams
  * @param {string} [params.comment] - Text with a question you need to answer.
  */
  constructor ({ comment }: TextCaptchaParams) {
    super({ "type": "TextCaptchaTask" });

    this.comment = comment;
  }
}
