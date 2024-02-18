import type { _IsTaskType } from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";

type AntiAkamaiWebTaskParams ={
  abck?: string;
  bmsz?: string;
  url: string;
  userAgent?: string;
};

/**
 * @classdesc AntiAkamaiWebTask This task type uses a separate endpoint for fetching /akamaibmp/invoke
 * @class
 * @extends {AntiAkamaiWebTaskBase}
 * {@link https://docs.capsolver.com/guide/antibots/akamaibmp.html}
 */
export class AntiAkamaiWebTask extends BaseTask implements AntiAkamaiWebTaskParams, _IsTaskType {

  /**
  * @type {boolean} _isAntiAkamaiWebTask - Only used for correct method overloading intellisense
  */
  readonly _isAntiAkamaiWebTask: _IsTaskType["_isAntiAkamaiWebTask"] = true;

  /**
   * Create AntiAkamaiWebTaskBase
   * {@link https://docs.capsolver.com/guide/antibots/akamaibmp.html}
   * @param {object} params -	AntiAkamaiWebTaskBaseParams
   * @param {string} [params.url] - browser url address
   * @param {string} [params.abck] - akamai cookie
   * @param {string} [params.userAgent] - The browser's request header ua
   */
  constructor({
    abck, bmsz, url, userAgent
  }: AntiAkamaiWebTaskParams) {
    super({
      _endpoint: "akamaiweb/invoke",

      type: "AntiAkamaiWebTask"
    });
    this.abck = abck;
    this.bmsz = bmsz;
    this.url = url;
    this.userAgent = userAgent;
  }

  /**
   * @type {string} url - browser url address
   */
  url: string;

  /**
   * @type {string} abck - akamai cookie
   */
  abck?: string;

  /**
   * @type {string} bmsz - akamai cookie
   */
  bmsz?: string;

  /**
   * @type {string} userAgent - The browser's request header ua
   */
  userAgent?: string;
}

