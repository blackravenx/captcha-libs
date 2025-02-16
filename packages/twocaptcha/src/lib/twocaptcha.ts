import { CaptchaClient, delay } from "@captcha-libs/captcha-client";

import type { TwoCaptchaCreateTaskResponse, CaptchaClientParams, TwoCaptchaBalanceResponse, TwoCaptchaSuccessResponse, TwoCaptchaReportTaskResponse, TwoCaptchaReportTaskSuccessResponse } from "./types";

import type {
  AmazonTask,
  AmazonTaskProxyless,
  AntiCyberSiAraTask,
  AntiCyberSiAraTaskProxyless,
  CapyTask,
  CapyTaskProxyless,
  DataDomeSliderTask,
  FriendlyCaptchaTask,
  FriendlyCaptchaTaskProxyless,
  FunCaptchaTask,
  FunCaptchaTaskProxyless,
  GeeTestTask,
  GeeTestTaskProxyless,
  GeeTestV3Task,
  GeeTestV3TaskProxyless,
  GeeTestV4Task,
  GeeTestV4TaskProxyless,
  GridTask,
  HCaptchaTask,
  HCaptchaTaskProxyless,
  ImageToTextTask,
  KeyCaptchaTask,
  KeyCaptchaTaskProxyless,
  LeminTask,
  LeminTaskProxyless,
  MtCaptchaTask,
  MtCaptchaTaskProxyless,
  RecaptchaV2EnterpriseTask,
  RecaptchaV2EnterpriseTaskProxyless,
  RecaptchaV2Task,
  RecaptchaV2TaskProxyless,
  RecaptchaV3TaskProxyless,
  Requests,
  RotateTask,
  TextCaptchaTask,
  TurnstileTask,
  TurnstileTaskProxyless,
  AudioTask,
  BoundingBoxTask,
  CoordinatesTask,
  DrawAroundTask,
  CutCaptchaTask,
  CutCaptchaTaskProxyless,
  TencentTask,
  TencentTaskProxyless,
  AtbCaptchaTaskProxyless,
  AtbCaptchaTask
} from "./Requests";

import type { TwoCaptchaSolution, TwoCaptchaSuccessSolution } from "./Solutions/_BaseSolution";

import type {
  AudioTaskSolution,
  BoundingBoxTaskSolution,
  CoordinatesTaskSolution,
  DrawAroundTaskSolution,
  AmazonTaskSolution,
  AntiCyberSiAraTaskSolution,
  CapyTaskSolution,
  DataDomeSliderTaskSolution,
  FriendlyCaptchaTaskSolution,
  FunCaptchaTaskSolution,
  GeeTestTaskSolution,
  GeeTestV3TaskSolution,
  GeeTestV4TaskSolution,
  GridTaskSolution,
  HCaptchaTaskSolution,
  KeyCaptchaTaskSolution,
  LeminTaskSolution,
  MtCaptchaTaskSolution,
  RecaptchaV2TaskSolution,
  RecaptchaV3TaskSolution,
  RotateTaskSolution,
  TextCaptchaTaskSolution,
  TurnstileTaskSolution,
  ImageToTextTaskSolution,
  TencentTaskSolution,
  AtbCaptchaTaskSolution,
  CutCaptchaTaskSolution
} from "./Solutions";

import fetch, { AbortError } from "node-fetch";

/**
 * @classdesc TwoCaptcha client
 * @class
 * @see {@link https://2captcha.com/api-docs/quick-start}
 */
export class TwoCaptcha extends CaptchaClient<TwoCaptchaCreateTaskResponse, Requests> {

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
  protected baseUrl: string = "https://api.2captcha.com";

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

  public async getBalance (): Promise<number> {
    const body = await fetch(`${this.baseUrl}/getBalance`, {
      "body": JSON.stringify({ "clientKey": this.clientKey }),
      "method": "POST"
    });

    const response = await body.json() as TwoCaptchaBalanceResponse;

    const { errorId, ...getBalanceResponse } = response;

    if (errorId && "errorDescription" in getBalanceResponse) throw new Error(`TwoCaptcha: ${getBalanceResponse.errorDescription}`);

    if (!("balance" in getBalanceResponse)) throw new Error("TwoCaptcha: unknown error");

    return getBalanceResponse.balance;
  }

  /**
   * @param {object} request - task payload to create task
   * @return {Promise<TwoCaptchaCreateTaskResponse>} - response of createTask
   */
  protected async createTask (request: Requests): Promise<TwoCaptchaSuccessResponse> {
    const body = await fetch(`${this.baseUrl}/createTask`, {
      "body": JSON.stringify({
        "clientKey": this.clientKey,
        "task": request
      }),
      "method": "POST"
    });

    const response = await body.json() as TwoCaptchaCreateTaskResponse;

    if (!("taskId" in response)) throw new Error(`TwoCaptcha: ${response.errorCode}. ${response.errorDescription}`);

    return response;
  }

  /**
   * The method is used for automated feedback on captcha solutions.
   * Make this request if the answer was declined by the target website.
   * We use the collected statistics to improve our service,
   * we check the solutions, we check workers who provided the solution
   * and after the analysis we issue refunds for incorrectly solved captchas.
   * If your success rate is close to 0% please do not send this request, there is definitely wrong with your code/software.
   * @see {@link https://2captcha.com/api-docs/report-incorrect}
   * @param {number} taskId - The id of your task
   * @return {Promise<TwoCaptchaReportTaskSuccessResponse>} - response of createTask
   */
  public async reportIncorrect (taskId: number): Promise<TwoCaptchaReportTaskSuccessResponse> {
    const body = await fetch(`${this.baseUrl}/reportIncorrect`, {
      "body": JSON.stringify({
        "clientKey": this.clientKey,
        taskId
      }),
      "method": "POST"
    });

    const response = await body.json() as TwoCaptchaReportTaskResponse;

    if (!("status" in response)) throw new Error(`TwoCaptcha: ${response.errorCode}. ${response.errorDescription}`);

    return response;
  }

  /**
   * The method is used for automated feedback on captcha solutions.
   * If the answer was accepted by the target website send this request.
   * We use the collected statistics to make our service better.
   * @see {@link https://2captcha.com/api-docs/report-correct}
   * @param {number} taskId - The id of your task
   * @return {Promise<TwoCaptchaReportTaskSuccessResponse>} - response of createTask
   */
  public async reportCorrect (taskId: number): Promise<TwoCaptchaReportTaskSuccessResponse> {
    const body = await fetch(`${this.baseUrl}/reportCorrect`, {
      "body": JSON.stringify({
        "clientKey": this.clientKey,
        taskId
      }),
      "method": "POST"
    });

    const response = await body.json() as TwoCaptchaReportTaskResponse;

    if (!("status" in response)) throw new Error(`TwoCaptcha: ${response.errorCode}. ${response.errorDescription}`);

    return response;
  }

  /**
  * @param {AudioTask} request - task payload to create AudioTask
  * @see {@link https://2captcha.com/api-docs/audio}
  * @return {Promise<TwoCaptchaSuccessSolution<AudioTaskSolution>>} - response of createTask
  */
  public async solve (request: AudioTask): Promise<TwoCaptchaSuccessSolution<AudioTaskSolution>>;

  /**
  * @param {GridTask} request - task payload to create GridTask
  * @see {@link https://2captcha.com/api-docs/grid}
  * @return {Promise<TwoCaptchaSuccessSolution<GridTaskSolution>>} - response of createTask
  */
  public async solve (request: GridTask): Promise<TwoCaptchaSuccessSolution<GridTaskSolution>>;

  /**
  * @param {BoundingBoxTask} request - task payload to create BoundingBoxTask
  * @see {@link https://2captcha.com/api-docs/bounding-box}
  * @return {Promise<TwoCaptchaSuccessSolution<BoundingBoxTaskSolution>>} - response of createTask
  */
  public async solve (request: BoundingBoxTask): Promise<TwoCaptchaSuccessSolution<BoundingBoxTaskSolution>>;

  /**
  * @param {CoordinatesTask} request - task payload to create CoordinatesTask
  * @see {@link https://2captcha.com/api-docs/coordinates}
  * @return {Promise<TwoCaptchaSuccessSolution<CoordinatesTaskSolution>>} - response of createTask
  */
  public async solve (request: CoordinatesTask): Promise<TwoCaptchaSuccessSolution<CoordinatesTaskSolution>>;

  /**
  * @param {DrawAroundTask} request - task payload to create DrawAroundTask
  * @see {@link https://2captcha.com/api-docs/draw-around}
  * @return {Promise<TwoCaptchaSuccessSolution<DrawAroundTaskSolution>>} - response of createTask
  */
  public async solve (request: DrawAroundTask): Promise<TwoCaptchaSuccessSolution<DrawAroundTaskSolution>>;

  /**
  * @param {ImageToTextTask} request - task payload to create ImageToTextTask
  * @see {@link https://2captcha.com/api-docs/normal-captcha}
  * @return {Promise<TwoCaptchaSuccessSolution<ImageToTextTaskSolution>>} - response of createTask
  */
  public async solve (request: ImageToTextTask): Promise<TwoCaptchaSuccessSolution<ImageToTextTaskSolution>>;

  /**
  * @param {RotateTask} request - task payload to create RotateTask
  * @see {@link https://2captcha.com/api-docs/rotate}
  * @return {Promise<TwoCaptchaSuccessSolution<RotateTaskSolution>>} - response of createTask
  */
  public async solve (request: RotateTask): Promise<TwoCaptchaSuccessSolution<RotateTaskSolution>>;

  /**
  * @param {TextCaptchaTask} request - task payload to create TextCaptchaTask
  * @see {@link https://2captcha.com/api-docs/text}
  * @return {Promise<TwoCaptchaSuccessSolution<TextCaptchaTaskSolution>>} - response of createTask
  */
  public async solve (request: TextCaptchaTask): Promise<TwoCaptchaSuccessSolution<TextCaptchaTaskSolution>>;

  /**
  * @param {AmazonTask | AmazonTaskProxyless} request - task payload to create AmazonTask or AmazonTaskProxyless
  * @see {@link https://2captcha.com/api-docs/amazon-aws-waf-captcha}
  * @return {Promise<TwoCaptchaSuccessSolution<AmazonTaskSolution>>} - response of createTask
  */
  public async solve (request: AmazonTask | AmazonTaskProxyless): Promise<TwoCaptchaSuccessSolution<AmazonTaskSolution>>;

  /**
  * @param {AntiCyberSiAraTask | AntiCyberSiAraTaskProxyless} request - task payload to create AntiCyberSiAraTask or AntiCyberSiAraTaskProxyless
  * @see {@link https://2captcha.com/api-docs/anti-cyber-siara}
  * @return {Promise<TwoCaptchaSuccessSolution<AntiCyberSiAraTaskSolution>>} - response of createTask
  */
  public async solve (request: AntiCyberSiAraTask | AntiCyberSiAraTaskProxyless): Promise<TwoCaptchaSuccessSolution<AntiCyberSiAraTaskSolution>>;

  /**
  * @param {CapyTask | CapyTaskProxyless} request - task payload to create CapyTask or CapyTaskProxyless
  * @see {@link https://2captcha.com/api-docs/capy-puzzle-captcha}
  * @return {Promise<TwoCaptchaSuccessSolution<CapyTaskSolution>>} - response of createTask
  */
  public async solve (request: CapyTask | CapyTaskProxyless): Promise<TwoCaptchaSuccessSolution<CapyTaskSolution>>;

  /**
  * @param {CutCaptchaTask | CutCaptchaTaskProxyless} request - task payload to create CutCaptchaTask or CutCaptchaTaskProxyless
  * @see {@link https://2captcha.com/api-docs/cutcaptcha}
  * @return {Promise<TwoCaptchaSuccessSolution<CutCaptchaTaskSolution>>} - response of createTask
  */
  public async solve (request: CutCaptchaTask | CutCaptchaTaskProxyless): Promise<TwoCaptchaSuccessSolution<CutCaptchaTaskSolution>>;

  /**
  * @param {DataDomeSliderTask} request - task payload to create DataDomeSliderTask or DataDomeSliderTaskProxyless
  * @see {@link https://2captcha.com/api-docs/datadome-slider-captcha}
  * @return {Promise<TwoCaptchaSuccessSolution<DataDomeSliderTaskSolution>>} - response of createTask
  */
  public async solve (request: DataDomeSliderTask): Promise<TwoCaptchaSuccessSolution<DataDomeSliderTaskSolution>>;

  /**
  * @param {FriendlyCaptchaTask | FriendlyCaptchaTaskProxyless} request - task payload to create FriendlyCaptchaTask or FriendlyCaptchaTaskProxyless
  * @see {@link https://2captcha.com/api-docs/friendly-captcha}
  * @return {Promise<TwoCaptchaSuccessSolution<FriendlyCaptchaTaskSolution>>} - response of createTask
  */
  public async solve (request: FriendlyCaptchaTask | FriendlyCaptchaTaskProxyless): Promise<TwoCaptchaSuccessSolution<FriendlyCaptchaTaskSolution>>;

  /**
  * @param {FunCaptchaTask | FunCaptchaTaskProxyless} request - task payload to create FunCaptchaTask or FunCaptchaTaskProxyless
  * @see {@link https://2captcha.com/api-docs/arkoselabs-funcaptcha}
  * @return {Promise<TwoCaptchaSuccessSolution<FunCaptchaTaskSolution>>} - response of createTask
  */
  public async solve (request: FunCaptchaTask | FunCaptchaTaskProxyless): Promise<TwoCaptchaSuccessSolution<FunCaptchaTaskSolution>>;

  /**
  * @param {GeeTestV3Task | GeeTestV3TaskProxyless} request - task payload to create GeeTestV3Task or GeeTestV3TaskProxyless
  * @see {@link https://2captcha.com/api-docs/geetest}
  * @return {Promise<TwoCaptchaSuccessSolution<GeeTestV3TaskSolution>>} - response of createTask
  */
  public async solve (request: GeeTestV3Task | GeeTestV3TaskProxyless): Promise<TwoCaptchaSuccessSolution<GeeTestV3TaskSolution>>;

  /**
  * @param {GeeTestV4Task | GeeTestV4TaskProxyless} request - task payload to create GeeTestV4Task or GeeTestV4TaskProxyless
  * @see {@link https://2captcha.com/api-docs/geetest}
  * @return {Promise<TwoCaptchaSuccessSolution<GeeTestV4TaskSolution>>} - response of createTask
  */
  public async solve (request: GeeTestV4Task | GeeTestV4TaskProxyless): Promise<TwoCaptchaSuccessSolution<GeeTestV4TaskSolution>>;

  /**
  * @param {GeeTestTask | GeeTestTaskProxyless} request - task payload to create GeeTestTask or GeeTestTaskProxyless
  * @see {@link https://2captcha.com/api-docs/geetest}
  * @return {Promise<TwoCaptchaSuccessSolution<GeeTestTaskSolution>>} - response of createTask
  */
  public async solve (request: GeeTestTask | GeeTestTaskProxyless): Promise<TwoCaptchaSuccessSolution<GeeTestTaskSolution>>;

  /**
  * @param {HCaptchaTask | HCaptchaTaskProxyless} request - task payload to create HCaptchaTask or HCaptchaTaskProxyless
  * @see {@link https://2captcha.com/api-docs/hcaptcha}
  * @return {Promise<TwoCaptchaSuccessSolution<HCaptchaTaskSolution>>} - response of createTask
  */
  public async solve (request: HCaptchaTask | HCaptchaTaskProxyless): Promise<TwoCaptchaSuccessSolution<HCaptchaTaskSolution>>;

  /**
  * @param {KeyCaptchaTask | KeyCaptchaTaskProxyless} request - task payload to create KeyCaptchaTask or KeyCaptchaTaskProxyless
  * @see {@link https://2captcha.com/api-docs/keycaptcha}
  * @return {Promise<TwoCaptchaSuccessSolution<KeyCaptchaTaskSolution>>} - response of createTask
  */
  public async solve (request: KeyCaptchaTask | KeyCaptchaTaskProxyless): Promise<TwoCaptchaSuccessSolution<KeyCaptchaTaskSolution>>;

  /**
  * @param {LeminTask | LeminTaskProxyless} request - task payload to create LeminTask or LeminTaskProxyless
  * @see {@link https://2captcha.com/api-docs/lemin}
  * @return {Promise<TwoCaptchaSuccessSolution<LeminTaskSolution>>} - response of createTask
  */
  public async solve (request: LeminTask | LeminTaskProxyless): Promise<TwoCaptchaSuccessSolution<LeminTaskSolution>>;

  /**
  * @param {MtCaptchaTask | MtCaptchaTaskProxyless} request - task payload to create MtCaptchaTask or MtCaptchaTaskProxyless
  * @see {@link https://2captcha.com/api-docs/mtcaptcha}
  * @return {Promise<TwoCaptchaSuccessSolution<MtCaptchaTaskSolution>>} - response of createTask
  */
  public async solve (request: MtCaptchaTask | MtCaptchaTaskProxyless): Promise<TwoCaptchaSuccessSolution<MtCaptchaTaskSolution>>;

  /**
  * @param {RecaptchaV2EnterpriseTask | RecaptchaV2EnterpriseTaskProxyless | RecaptchaV2Task | RecaptchaV2TaskProxyless} request - task payload to create RecaptchaV2 task
  * - {@link https://2captcha.com/api-docs/recaptcha-v2}
  * - {@link https://2captcha.com/api-docs/recaptcha-v2-enterprise}
  * @return {Promise<TwoCaptchaSuccessSolution<RecaptchaV2TaskSolution>>} - response of createTask
  */
  public async solve (request: RecaptchaV2EnterpriseTask | RecaptchaV2EnterpriseTaskProxyless | RecaptchaV2Task | RecaptchaV2TaskProxyless): Promise<TwoCaptchaSuccessSolution<RecaptchaV2TaskSolution>>;

  /**
  * @param {RecaptchaV3TaskProxyless} request - task payload to create RecaptchaV3TaskProxyless
  * @see {@link https://3captcha.com/api-docs/recaptcha-v3}
  * @return {Promise<TwoCaptchaSuccessSolution<RecaptchaV3TaskSolution>>} - response of createTask
  */
  public async solve (request: RecaptchaV3TaskProxyless): Promise<TwoCaptchaSuccessSolution<RecaptchaV3TaskSolution>>;

  /**
  * @param {TurnstileTask | TurnstileTaskProxyless} request - task payload to create TurnstileTask or TurnstileTaskProxyless
  * @see {@link https://2captcha.com/api-docs/cloudflare-turnstile}
  * @return {Promise<TwoCaptchaSuccessSolution<TurnstileTaskSolution>>} - response of createTask
  */
  public async solve (request: TurnstileTask | TurnstileTaskProxyless): Promise<TwoCaptchaSuccessSolution<TurnstileTaskSolution>>;

  /**
  * @param {TencentTask | TencentTaskProxyless} request - task payload to create TencentTask or TencentTaskProxyless
  * @see {@link https://2captcha.com/api-docs/tencent}
  * @return {Promise<TwoCaptchaSuccessSolution<TencentTaskSolution>>} - response of createTask
  */
  public async solve (request: TencentTask | TencentTaskProxyless): Promise<TwoCaptchaSuccessSolution<TencentTaskSolution>>;

  /**
  * @param {AtbCaptchaTask | AtbCaptchaTaskProxyless} request - task payload to create AtbCaptchaTask or AtbCaptchaTaskProxyless
  * @see {@link https://2captcha.com/api-docs/atb-captcha}
  * @return {Promise<TwoCaptchaSuccessSolution<AtbCaptchaTaskSolution>>} - response of createTask
  */
  public async solve (request: AtbCaptchaTask | AtbCaptchaTaskProxyless): Promise<TwoCaptchaSuccessSolution<AtbCaptchaTaskSolution>>;

  /**
  * @param {Requests} request - task payload to create task or taskProxyless
  * @return {Promise<TwoCaptchaSuccessSolution<TSolution>>} - response of createTask
  */
  public async solve<TSolution>(request: Requests): Promise<TwoCaptchaSuccessSolution<TSolution>> {

    /**
     * _taskType - Only used for correct method overloading intellisense
     */
    const {
      _isAmazonTask = false,
      _isAmazonTaskProxyless = false,
      _isAntiCyberSiAraTask = false,
      _isAntiCyberSiAraTaskProxyless = false,
      _isCapyTask = false,
      _CutCaptchaTask = false,
      _isCapyTaskProxyless = false,
      _isCutCaptchaTaskProxyless = false,
      _isDataDomeSliderTask = false,
      _isFriendlyCaptchaTask = false,
      _isFriendlyCaptchaTaskProxyless = false,
      _isFunCaptchaTask = false,
      _isFunCaptchaTaskProxyless = false,
      _isGeeTestTask = false,
      _isGeeTestTaskProxyless = false,
      _isGeeTestV3Task = false,
      _isGeeTestV3TaskProxyless = false,
      _isGeeTestV4Task = false,
      _isGeeTestV4TaskProxyless = false,
      _isGridTask = false,
      _isHCaptchaTask = false,
      _isHCaptchaTaskProxyless = false,
      _isImageToTextTask = false,
      _isKeyCaptchaTask = false,
      _isKeyCaptchaTaskProxyless = false,
      _isLeminTask = false,
      _isLeminTaskProxyless = false,
      _isMtCaptchaTask = false,
      _isMtCaptchaTaskProxyless = false,
      _isRecaptchaV2EnterpriseTask = false,
      _isRecaptchaV2EnterpriseTaskProxyless = false,
      _isRecaptchaV2Task = false,
      _isRecaptchaV2TaskProxyless = false,
      _isRecaptchaV3TaskProxyless = false,
      _isRequests = false,
      _isRotateTask = false,
      _isTextCaptchaTask = false,
      _isTurnstileTask = false,
      _isTurnstileTaskProxyless = false,
      _isAudioTask = false,
      _isBoundingBoxTask = false,
      _isCoordinatesTask = false,
      _isDrawAroundTask = false,
      _isAtbCaptchaTask = false,
      _isAtbCaptchaTaskProxyless = false,
      _isTencentTask = false,
      _isTencentTaskProxyless = false,
      ...payload
    } = {
      "_isAmazonTask": false,
      "_isAmazonTaskProxyless": false,
      "_isAntiCyberSiAraTask": false,
      "_isAntiCyberSiAraTaskProxyless": false,
      "_isCapyTask": false,
      "_CutCaptchaTask": false,
      "_isCapyTaskProxyless": false,
      "_isCutCaptchaTaskProxyless": false,
      "_isDataDomeSliderTask": false,
      "_isFriendlyCaptchaTask": false,
      "_isFriendlyCaptchaTaskProxyless": false,
      "_isFunCaptchaTask": false,
      "_isFunCaptchaTaskProxyless": false,
      "_isGeeTestTask": false,
      "_isGeeTestTaskProxyless": false,
      "_isGeeTestV3Task": false,
      "_isGeeTestV3TaskProxyless": false,
      "_isGeeTestV4Task": false,
      "_isGeeTestV4TaskProxyless": false,
      "_isGridTask": false,
      "_isHCaptchaTask": false,
      "_isHCaptchaTaskProxyless": false,
      "_isImageToTextTask": false,
      "_isKeyCaptchaTask": false,
      "_isKeyCaptchaTaskProxyless": false,
      "_isLeminTask": false,
      "_isLeminTaskProxyless": false,
      "_isMtCaptchaTask": false,
      "_isMtCaptchaTaskProxyless": false,
      "_isRecaptchaV2EnterpriseTask": false,
      "_isRecaptchaV2EnterpriseTaskProxyless": false,
      "_isRecaptchaV2Task": false,
      "_isRecaptchaV2TaskProxyless": false,
      "_isRecaptchaV3TaskProxyless": false,
      "_isRequests": false,
      "_isRotateTask": false,
      "_isTextCaptchaTask": false,
      "_isTurnstileTask": false,
      "_isTurnstileTaskProxyless": false,
      "_isAudioTask": false,
      "_isBoundingBoxTask": false,
      "_isCoordinatesTask": false,
      "_isDrawAroundTask": false,
      "_isAtbCaptchaTask": false,
      "_isAtbCaptchaTaskProxyless": false,
      "_isTencentTask": false,
      "_isTencentTaskProxyless": false,
      ...request
    };

    /* eslint @stylistic/padded-blocks: ["off"]*/
    const balance = await this.getBalance();

    if (!balance) throw new Error("TwoCaptcha: ERROR_ZERO_BALANCE");

    const createTaskResponse = await this.createTask(payload as Requests);

    const abortSignal = AbortSignal.timeout(this.timeout);

    const isAborted = abortSignal.aborted;

    try {
      while (!isAborted) {
        const body = await fetch(`${this.baseUrl}/getTaskResult`, {
          "body": JSON.stringify({
            "clientKey": this.clientKey,
            "taskId": createTaskResponse.taskId
          }),
          "method": "POST",
          "signal": abortSignal
        });

        const response = await body.json() as TwoCaptchaSolution<TSolution>;

        if ("solution" in response) {
          return {
            ...response,
            "taskId": createTaskResponse.taskId
          };
        } else if (response.errorId) {
          throw new Error(`TwoCaptcha: ${response.errorDescription}`);
        }

        await delay(this.pollingInterval);
      }
    } catch (error) {
      if (error instanceof AbortError && error.name === "AbortError") throw new Error(`TwoCaptcha timeout ${this.timeout} exceeded!`);
      else throw error;
    }

    throw new Error("TwoCaptcha finished with error");
  }
}
