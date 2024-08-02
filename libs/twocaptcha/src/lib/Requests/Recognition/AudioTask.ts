import type { _IsTaskType } from "../_BaseTaskRequest";
import {
  BaseTask, type BaseParams
} from "../_BaseTaskRequest";

type AudioLangs = "de" | "el" | "en" | "fr" | "pt" | "ru";

type AudioTaskParams = Omit<BaseParams, "type"> & {
  body: string;
  lang: AudioLangs;
};

/**
 * We provide a speech recognition method that allows you to convert an audio record to text. The method can be used to bypass audio captchas or to recognize any audio record.
 * @extends {BaseTask}
 * {@link https://2captcha.com/api-docs/audio}
 */
export class AudioTask extends BaseTask implements _IsTaskType, AudioTaskParams {

  /**
   * @type {string} body - Base64 encoded audio file in mp3 format
   */
  body: string;

  /**
  * @type {string} lang - The language of audio record. Supported languages are: en, fr, de, el, pt, ru
  */
  lang: AudioLangs;

  /**
   * @type {boolean} _isAudioTask - Only used for correct method overloading intellisense
  */
  readonly _isAudioTask: _IsTaskType["_isAudioTask"] = true;

  /**
  * Create AudioTask
  * {@link https://2captcha.com/api-docs/audio}
  * @param {Object} params - AudioTaskParams
  * @param {string} [params.body] - Base64 encoded audio file in mp3 format
  * @param {string} [params.lang] - The language of audio record. Supported languages are: en, fr, de, el, pt, ru
  */
  constructor({
    lang, body
  }: AudioTaskParams) {
    super({ type: "AudioTask" });
    this.body = body;
    this.lang = lang;
  }
}