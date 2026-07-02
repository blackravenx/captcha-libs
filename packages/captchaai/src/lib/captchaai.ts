import { CaptchaClient, delay } from "@captcha-libs/captcha-client";

import type { CaptchaClientParams, CaptchaAICreateTaskResponse, CaptchaAIBalanceResponse, CaptchaAISolution } from "./types";

import type {
  ImageToTextTask,
  RecaptchaV2EnterpriseTask,
  RecaptchaV2EnterpriseTaskProxyless,
  RecaptchaV2Task,
  RecaptchaV2TaskProxyless,
  RecaptchaV3TaskProxyless,
  Requests,
  TurnstileTask,
  TurnstileTaskProxyless
} from "./Requests";

import type {
  ImageToTextTaskSolution,
  RecaptchaV2TaskSolution,
  RecaptchaV3TaskSolution,
  TurnstileTaskSolution
} from "./Solutions";

import fetch, { AbortError } from "node-fetch";

/**
 * @classdesc CaptchaAI client
 * @class
 * @see {@link https://docs.captchaai.com}
 */
export class CaptchaAI extends CaptchaClient<CaptchaAICreateTaskResponse, Requests> {

  /**
   * @type {string} clientKey - YOUR_API_KEY from dashboard
   */
  protected clientKey: string;

  /**
   * @type {number} pollingInterval - polling interval to getTaskResult in ms. Default to 5000
   */
  protected pollingInterval: number;

  /**
   * @type {number} timeout - max timeout to getTaskResult in ms. Default to 120_000
   */
  protected timeout: number;

  /**
   * @type {string} baseUrl - api base url
   */
  protected baseUrl: string = "https://ocr.captchaai.com";

  /**
   * @param {object} [params] - CaptchaClientParams
   * @param {string} [params.clientKey] - YOUR_API_KEY from dashboard
   * @param {number} [params.timeout] - max timeout to getTaskResult
   * @param {number} [params.pollingInterval] - polling interval to getTaskResult
   */
  constructor (params: CaptchaClientParams) {
    const { clientKey, timeout = 120_000, pollingInterval = 5_000 } = params;

    super();

    this.clientKey = clientKey;

    this.pollingInterval = pollingInterval;

    this.timeout = timeout;
  }

  /**
   * Flattens a task payload into in.php form params, dropping internal discriminant flags.
   * @param {Requests} request - task payload
   * @return {URLSearchParams} - form encoded params
   */
  private toFormParams (request: Requests): URLSearchParams {
    const params = new URLSearchParams({
      "key": this.clientKey,
      "json": "1"
    });

    for (const [
      key,
      value
    ] of Object.entries(request)) {
      if (key.startsWith("_is") || key === "type") continue;

      if (value === undefined || value === null) continue;

      if (typeof value === "boolean") params.append(key, value
        ? "1"
        : "0");
      else if (typeof value === "object") params.append(key, JSON.stringify(value));
      else params.append(key, String(value));
    }

    return params;
  }

  public async getBalance (): Promise<number> {
    const params = new URLSearchParams({
      "key": this.clientKey,
      "action": "getbalance",
      "json": "1"
    });

    const body = await fetch(`${this.baseUrl}/res.php?${params.toString()}`, { "method": "GET" });

    const response = await body.json() as CaptchaAIBalanceResponse;

    if (response.status !== 1) throw new Error(`CaptchaAI: ${response.request}`);

    return Number(response.request);
  }

  /**
   * @param {Requests} request - task payload to create task
   * @return {Promise<CaptchaAICreateTaskResponse>} - response of createTask
   */
  protected async createTask (request: Requests): Promise<CaptchaAICreateTaskResponse> {
    const body = await fetch(`${this.baseUrl}/in.php`, {
      "body": this.toFormParams(request),
      "method": "POST"
    });

    const response = await body.json() as CaptchaAICreateTaskResponse;

    if (response.status !== 1) throw new Error(`CaptchaAI: ${response.request}`);

    return response;
  }

  /**
  * @param {ImageToTextTask} request - task payload to create ImageToTextTask
  * @see {@link https://docs.captchaai.com}
  * @return {Promise<ImageToTextTaskSolution>} - solved captcha text
  */
  public async solve (request: ImageToTextTask): Promise<ImageToTextTaskSolution>;

  /**
  * @param {RecaptchaV2EnterpriseTask | RecaptchaV2EnterpriseTaskProxyless | RecaptchaV2Task | RecaptchaV2TaskProxyless} request - task payload to create RecaptchaV2 task
  * @see {@link https://docs.captchaai.com}
  * @return {Promise<RecaptchaV2TaskSolution>} - solved reCAPTCHA V2 token
  */
  public async solve (request: RecaptchaV2EnterpriseTask | RecaptchaV2EnterpriseTaskProxyless | RecaptchaV2Task | RecaptchaV2TaskProxyless): Promise<RecaptchaV2TaskSolution>;

  /**
  * @param {RecaptchaV3TaskProxyless} request - task payload to create RecaptchaV3TaskProxyless
  * @see {@link https://docs.captchaai.com}
  * @return {Promise<RecaptchaV3TaskSolution>} - solved reCAPTCHA V3 token
  */
  public async solve (request: RecaptchaV3TaskProxyless): Promise<RecaptchaV3TaskSolution>;

  /**
  * @param {TurnstileTask | TurnstileTaskProxyless} request - task payload to create TurnstileTask or TurnstileTaskProxyless
  * @see {@link https://docs.captchaai.com}
  * @return {Promise<TurnstileTaskSolution>} - solved Cloudflare Turnstile token
  */
  public async solve (request: TurnstileTask | TurnstileTaskProxyless): Promise<TurnstileTaskSolution>;

  /**
  * @param {Requests} request - task payload to create task or taskProxyless
  * @return {Promise<string>} - solved captcha token or text
  */
  public async solve (request: Requests): Promise<string> {
    const balance = await this.getBalance();

    if (!balance) throw new Error("CaptchaAI: ERROR_ZERO_BALANCE");

    const createTaskResponse = await this.createTask(request);

    const abortSignal = AbortSignal.timeout(this.timeout);

    const params = new URLSearchParams({
      "key": this.clientKey,
      "action": "get",
      "id": createTaskResponse.request,
      "json": "1"
    });

    try {
      while (!abortSignal.aborted) {
        const body = await fetch(`${this.baseUrl}/res.php?${params.toString()}`, {
          "method": "GET",
          "signal": abortSignal
        });

        const response = await body.json() as CaptchaAISolution;

        if (response.status === 1) return response.request;
        else if (response.request !== "CAPCHA_NOT_READY") throw new Error(`CaptchaAI: ${response.request}`);

        await delay(this.pollingInterval);
      }
    } catch (error) {
      if (error instanceof AbortError && error.name === "AbortError") throw new Error(`CaptchaAI timeout ${this.timeout} exceeded!`);
      else throw error;
    }

    throw new Error("CaptchaAI finished with error");
  }
}
