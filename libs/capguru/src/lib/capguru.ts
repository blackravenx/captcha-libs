import type { $Fetch } from "ofetch";
import {
  FetchError, ofetch
} from "ofetch";
import {
  CaptchaClient, delay
} from "@captcha-libs/captcha-client";
import type {
  CaptchaClientParams, CapGuruResponse
} from "./types";
import type { CapGuruSolution } from "./Solution/_BaseSolution";
import type {
  AmazonCarPathTask,
  AmazonPuzzleTask,
  BinanceGridTask, BinancePuzzleTask, BuxMoneyCoordinatesTask, FunCaptchaGridTask, GeeTestPuzzleTask, GenericPuzzleTask, HCaptchaCoordinatesTask, HCaptchaGridTask, ImageToTextTask, LinkvertiseCoordinatesTask, ReCaptchaGridTask, ReCaptchaV2Task, ReCaptchaV3Task, Requests, SeoFastCoordinatesTask, TikTokABCTask, TikTokKolesoTask, TikTokPuzzleTask, TurnstileTask, WorldCashCoordinatesTask
} from "./Request";
import type { CoordinatesSolution } from "./Solution/GenericPuzzleSolution";
import type { HCaptchaTask } from "./Request/Token/HCaptchaTask";
process.removeAllListeners("warning");

/**
 * @classdesc CapGuru client
 * @class
 * {@link https://docs.cap.guru/en/}
 */
export class CapGuru extends CaptchaClient<string, Requests> {

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
   * @type {$Fetch} httpClient - HTTP Client
   */
  protected httpClient: $Fetch;

  private softguru = "140559";

  /**
   * @param {object} [params] - CaptchaClientParams
   * @param {string} [params.clientKey] - YOUR_API_KEY from dashboard
   * @param {number} [params.timeout] - max timeout to getTaskResult, default = 120000
   * @param {number} [params.pollingInterval] - polling interval to getTaskResult, default = 5000
   * @param {number} [params.baseUrl] - base url for capguru, default = "https://api3.cap.guru/"
   */
  constructor(params: CaptchaClientParams) {
    const {
      clientKey, timeout = 120_000, pollingInterval = 5_000, baseUrl = "https://api3.cap.guru/"
    } = params;

    super();
    this.clientKey = clientKey;
    this.pollingInterval = pollingInterval;
    this.timeout = timeout;
    this.httpClient = ofetch.create({
      baseURL: baseUrl,
      ignoreResponseError: true
    });
  }
  public async getBalance(): Promise<number> {
    const {
      request, status
    } = await this.httpClient<CapGuruResponse<number>>("res.php", {
      method: "GET",
      params: {
        action: "getbalance",
        json: 1,
        key: this.clientKey
      }
    });

    if (!status) throw new Error(`CapGuru: ${request}`);

    return request;
  }
  private parseSolution<TSolution>(response: string, request: Requests): TSolution | undefined {
    if (response.startsWith("coordinate")) {

      const stringCoordinatePairs = response.split(";");

      const parsedCoordinatePairs = stringCoordinatePairs.map(pair => {
        const match = pair.match(/x=(?<x>[-+]?\d*\.?\d+),y=(?<y>[-+]?\d*\.?\d+)(?:,w=(?<w>[-+]?\d*\.?\d+))?/);

        if (!match) return;

        const { groups } = match;

        if (!groups) return;

        const coordinates = Object.fromEntries(Object.entries(groups).filter(([ , v ]) => v)
          .map(([ k, v ]) => [ k, Number(v) ]));

        return coordinates;
      }
      ) as Array<TSolution>;

      if (!parsedCoordinatePairs || !parsedCoordinatePairs.length) return;

      if ("isMultipleCoordinates" in request && request["isMultipleCoordinates"])
        return parsedCoordinatePairs as TSolution;
      else return parsedCoordinatePairs[0];
    }

    if (response.split(",").length && response.split(",").every(Number))
      return response.split(",").map(Number) as TSolution;

    return response as TSolution;
  }

  /**
   * @param {object} request - task payload to create task
   * @return {Promise<CapGuruCreateTaskResponse<TSolution>>} - response of createTask
   */
  protected async createTask(request: Requests): Promise<string> {
    const {
      status, request: responseDetail
    } = await this.httpClient<CapGuruResponse<string>>("in.php", {
      body: {
        json: 1,
        key: this.clientKey,
        softguru: this.softguru,
        ...request
      },
      method: "POST"
    });

    if (!status)
      throw new Error(`CapGuru: ${responseDetail}`);

    return responseDetail;
  }

  /**
  * @param {BinanceGridTask | FunCaptchaGridTask | HCaptchaGridTask | ReCaptchaGridTask} request - task payload to create task
  * @return {Promise<CapGuruSolution<Array<number>>>} - response of createTask
  */
  public async solve(request: BinanceGridTask | FunCaptchaGridTask | HCaptchaGridTask | ReCaptchaGridTask): Promise<CapGuruSolution<Array<number>>>;

  /**
  * @param {HCaptchaCoordinatesTask | SeoFastCoordinatesTask | TikTokABCTask | WorldCashCoordinatesTask} request - task payload to create task
  * @return {Promise<CapGuruSolution<Array<CoordinatesSolution>>>} - response of createTask
  */
  public async solve(request: HCaptchaCoordinatesTask | SeoFastCoordinatesTask | TikTokABCTask |
  WorldCashCoordinatesTask): Promise<CapGuruSolution<Array<CoordinatesSolution>>>;

  /**
  * @param {AmazonCarPathTask | AmazonPuzzleTask | BinancePuzzleTask | BuxMoneyCoordinatesTask | GeeTestPuzzleTask | GenericPuzzleTask | LinkvertiseCoordinatesTask | TikTokKolesoTask | TikTokPuzzleTask} request - task payload to create task
  * @return {Promise<CapGuruSolution<Array<number>>>} - response of createTask
  */
  public async solve(request: AmazonCarPathTask | AmazonPuzzleTask | BinancePuzzleTask | BuxMoneyCoordinatesTask | GeeTestPuzzleTask | GenericPuzzleTask | LinkvertiseCoordinatesTask | TikTokKolesoTask | TikTokPuzzleTask): Promise<CapGuruSolution<CoordinatesSolution>>;

  /**
  * @param {ImageToTextTask} request - task payload to create ImageToTextTask
  * @return {Promise<CapGuruSolution<string>>} - response of createTask
  */
  public async solve(request: ImageToTextTask): Promise<CapGuruSolution<string>>;

  /**
  * @param {HCaptchaTask} request - task payload to create HCaptchaTask
  * @return {Promise<CapGuruSolution<string>>} - response of createTask
  */
  public async solve(request: HCaptchaTask): Promise<CapGuruSolution<string>>;

  /**
  * @param {ReCaptchaV2Task} request - task payload to create ReCaptchaV2Task
  * @return {Promise<CapGuruSolution<string>>} - response of createTask
  */
  public async solve(request: ReCaptchaV2Task): Promise<CapGuruSolution<string>>;

  /**
  * @param {ReCaptchaV3Task} request - task payload to create ReCaptchaV3Task
  * @return {Promise<CapGuruSolution<string>>} - response of createTask
  */
  public async solve(request: ReCaptchaV3Task): Promise<CapGuruSolution<string>>;

  /**
  * @param {TurnstileTask} request - task payload to create TurnstileTask
  * @return {Promise<CapGuruSolution<string>>} - response of createTask
  */
  public async solve(request: TurnstileTask): Promise<CapGuruSolution<string>>;

  /**
  * @param {Requests} request - task payload to create task
  * @return {Promise<CapGuruSolution<TSolution>>} - response of createTask
  */
  public async solve<TSolution>(request: Requests): Promise<CapGuruSolution<TSolution>> {
    const balance = await this.getBalance();

    if (!balance) throw new Error("CapGuru: ERROR_ZERO_BALANCE");

    const {
      isMultipleCoordinates: _isMultipleCoordinates = false, isSingleCoordinate: _isSingleCoordinate = false, isGrid: _isGrid = false, isString: _isString = false, ...payload
    } = { ...request };

    const taskId = await this.createTask(payload as Requests);

    const abortSignal = AbortSignal.timeout(this.timeout);

    const isAborted = abortSignal.aborted;

    try {
      while (!isAborted) {
        const data = await this.httpClient<CapGuruResponse<string>>("res.php", {
          body: {
            action: "get",
            id: taskId,
            json: 1,
            key: this.clientKey
          },
          method: "POST",
          signal: abortSignal
        });

        if (!data.status && data.request !== "CAPCHA_NOT_READY") {
          return Promise.reject(`CapGuru: ${data.request}`);
        }

        else if (data.status) {
          const parsedSolution = this.parseSolution<TSolution>(data.request, request);

          const solutionResponse: CapGuruSolution<TSolution> = {
            ...data,
            solution: parsedSolution
          };

          return Promise.resolve(solutionResponse);
        }

        await delay(this.pollingInterval);
      }
    }
    catch (error) {
      if (error instanceof FetchError)
        throw new Error(`CapGuru timeout ${this.timeout} exceeded!`);
      else
        throw new Error("CapGuru unknown error!");
    }

    throw new Error("CapGuru finished with error");
  }
}