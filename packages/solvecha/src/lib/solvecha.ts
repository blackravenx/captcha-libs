import { CaptchaClient, delay } from "@captcha-libs/captcha-client";

import type {
  CaptchaClientParams,
  ImageToTextSolution,
  ReCaptchaV2ClassificationSolution,
  SolvechaBalanceResponse,
  SolvechaCreateTaskResponse,
  SolvechaErrorResponse,
  SolvechaSolution
} from "./types";

import type { ImageToTextTask, ReCaptchaV2Classification, Requests } from "./Requests";

import type { _IsTaskType } from "./Requests/_BaseTaskRequest";

import fetch from "node-fetch";

/**
 * @classdesc Solvecha client. Picture and text tasks only, no token tasks.
 * @class
 * @see {@link https://solvecha.com/docs}
 */
export class Solvecha extends CaptchaClient<SolvechaCreateTaskResponse, Requests, SolvechaBalanceResponse> {

  /**
   * @type {string} clientKey - YOUR_API_KEY from dashboard
   */
  protected clientKey: string;

  /**
   * @type {number} pollingInterval - polling interval to getTaskResult in ms. Default to 2000
   */
  protected pollingInterval: number;

  /**
   * @type {number} timeout - max timeout to getTaskResult in ms. Default to 120_000
   */
  protected timeout: number;

  /**
   * @type {string} baseUrl - api base url
   */
  protected baseUrl: string;

  /**
   * @param {object} [params] - CaptchaClientParams
   * @param {string} [params.clientKey] - YOUR_API_KEY from dashboard
   * @param {string} [params.baseUrl] - api base url, default https://api.solvecha.com
   * @param {number} [params.timeout] - max timeout to getTaskResult
   * @param {number} [params.pollingInterval] - polling interval to getTaskResult
   */
  constructor (params: CaptchaClientParams) {
    const { clientKey, timeout = 120_000, pollingInterval = 2_000, baseUrl = "https://api.solvecha.com" } = params;

    super();

    this.clientKey = clientKey;

    this.pollingInterval = pollingInterval;

    this.timeout = timeout;

    this.baseUrl = baseUrl;
  }

  /**
   * Posts JSON and keeps the API error message, also on a 4xx response.
   * @param {string} path - endpoint path
   * @param {object} payload - JSON body
   */
  private async post<TResponse>(path: string, payload: object): Promise<TResponse> {
    const response = await fetch(`${this.baseUrl}/${path}`, {
      "body": JSON.stringify({
        "clientKey": this.clientKey,
        ...payload
      }),
      "headers": { "Content-Type": "application/json" },
      "method": "POST"
    });

    let body: Partial<SolvechaErrorResponse> | undefined;

    try {
      body = await response.json() as Partial<SolvechaErrorResponse>;
    } catch {
      body = undefined;
    }

    if (body?.errorCode) throw new Error(`Solvecha: ${body.errorCode}${body.errorDescription
      ? ` - ${body.errorDescription}`
      : ""}`);

    if (!response.ok || !body) throw new Error(`Solvecha: HTTP ${response.status}`);

    return body as TResponse;
  }

  /**
   * Returns the prepaid balance only. Plan quotas and the free daily quota are not part of it.
   */
  public async getBalance (): Promise<SolvechaBalanceResponse> {
    return await this.post<SolvechaBalanceResponse>("getBalance", {});
  }

  /**
   * @param {object} request - task payload to create task
   * @return {Promise<SolvechaCreateTaskResponse<TSolution>>} - response of createTask
   */
  protected async createTask<TSolution>(request: Requests): Promise<SolvechaCreateTaskResponse<TSolution>> {
    return await this.post<SolvechaCreateTaskResponse<TSolution>>("createTask", { "task": request });
  }

  /**
   * @param {ReCaptchaV2Classification} request - task payload to create task
   * @return {Promise<SolvechaSolution<ReCaptchaV2ClassificationSolution>>} - response of createTask or getTaskResult
   */
  public async solve (request: ReCaptchaV2Classification): Promise<SolvechaSolution<ReCaptchaV2ClassificationSolution>>;

  /**
   * @param {ImageToTextTask} request - task payload to create task
   * @return {Promise<SolvechaSolution<ImageToTextSolution>>} - response of createTask or getTaskResult
   */
  public async solve (request: ImageToTextTask): Promise<SolvechaSolution<ImageToTextSolution>>;

  /**
   * @param {Requests} request - task payload to create task
   * @return {Promise<SolvechaSolution<TSolution>>} - response of createTask or getTaskResult
   */
  public async solve<TSolution>(request: Requests): Promise<SolvechaSolution<TSolution>> {
    const {
      _isImageToTextTask = false,
      _isReCaptchaV2Classification = false,
      ...task
    } = request as Requests & _IsTaskType;

    const createTaskResponse = await this.createTask<TSolution>(task as Requests);

    if (createTaskResponse.solution) return createTaskResponse as SolvechaSolution<TSolution>;

    const deadline = Date.now() + this.timeout;

    while (Date.now() < deadline) {
      await delay(this.pollingInterval);

      const response = await this.post<SolvechaSolution<TSolution>>("getTaskResult", { "taskId": createTaskResponse.taskId });

      if (response.solution) return response;
    }

    throw new Error(`Solvecha timeout ${this.timeout} exceeded!`);
  }
}
