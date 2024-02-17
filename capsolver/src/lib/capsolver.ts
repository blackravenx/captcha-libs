#!/usr/bin/env node --no-warnings
import { MtCaptchaTask } from "./Requests/Token/MtCaptchaTask";
import type { $Fetch } from "ofetch";
import {
  FetchError, ofetch
} from "ofetch";
import {
  CaptchaClient, delay
} from "@captcha-libs/captcha-client";
import type {
  CapSolverCreateTaskResponse, CaptchaClientParams, CapSolverBalanceResponse, FeedbackTaskParams, FeedbackResponse
} from "./types";
import { ReCaptchaV3TaskProxyLess } from "./Requests/Token/ReCaptchaV3TaskProxyLess";
import { ReCaptchaV3M1TaskProxyLess } from "./Requests/Token/ReCaptchaV3M1TaskProxyLess";
import { ReCaptchaV3EnterpriseTask } from "./Requests/Token/ReCaptchaV3EnterpriseTask";
import { ReCaptchaV3EnterpriseTaskProxyLess } from "./Requests/Token/ReCaptchaV3EnterpriseTaskProxyLess";
import { ReCaptchaV3Task } from "./Requests/Token/ReCaptchaV3Task";
import { ReCaptchaV2EnterpriseTask } from "./Requests/Token/ReCaptchaV2EnterpriseTask";
import { ReCaptchaV2EnterpriseTaskProxyLess } from "./Requests/Token/ReCaptchaV2EnterpriseTaskProxyLess";
import { ReCaptchaV2Task } from "./Requests/Token/ReCaptchaV2Task";
import { ReCaptchaV2TaskProxyLess } from "./Requests/Token/ReCaptchaV2TaskProxyLess";
import { MtCaptchaTaskProxyLess } from "./Requests/Token/MtCaptchaTaskProxyLess";
import { MtCaptchaTaskSolution } from "./Solution/TokenSolution/MtCaptchaTaskSolution";
import { ReCaptchaV2TaskSolution } from "./Solution/TokenSolution/ReCaptchaV2TaskSolution";
import { ReCaptchaV3TaskSolution } from "./Solution/TokenSolution/ReCaptchaV3TaskSolution";
import { CapSolverSolution } from "./Solution/_BaseSolution";
import { HCaptchaTask } from "./Requests/Token/HCaptchaTask";
import { HCaptchaTaskProxyLess } from "./Requests/Token/HCaptchaTaskProxyLess";
import { HCaptchaTaskSolution } from "./Solution/TokenSolution/HCaptchaTaskSolution";
import { AwsWafClassification } from "./Requests/Classification/AwsWafClassification";
import { HCaptchaClassification } from "./Requests/Classification/HCaptchaClassification";
import { ImageToTextTask } from "./Requests/Classification/ImageToTextTask";
import { ReCaptchaV2Classification } from "./Requests/Classification/ReCaptchaV2Classification";
import { AntiAwsWafTaskProxyLess } from "./Requests/Token/AntiAwsWafTaskProxyLess";
import { AntiCloudflareChallengeTask } from "./Requests/Token/AntiCloudflareChallengeTask";
import { AntiCloudflareTurnstileTask } from "./Requests/Token/AntiCloudflareTurnstileTask";
import { AntiCyberSiAraTask } from "./Requests/Token/AntiCyberSiAraTask";
import { AntiCyberSiAraTaskProxyLess } from "./Requests/Token/AntiCyberSiAraTaskProxyLess";
import { AntiImpervaTask } from "./Requests/Token/AntiImpervaTask";
import { AntiImpervaTaskProxyLess } from "./Requests/Token/AntiImpervaTaskProxyLess";
import { DataDomeSliderTask } from "./Requests/Token/DataDomeSliderTask";
import { FunCaptchaTaskProxyLess } from "./Requests/Token/FunCaptchaTaskProxyLess";
import { GeeTestV3Task } from "./Requests/Token/GeeTestV3Task";
import { GeeTestV3TaskProxyLess } from "./Requests/Token/GeeTestV3TaskProxyLess";
import { GeeTestV4Task } from "./Requests/Token/GeeTestV4Task";
import { GeeTestV4TaskProxyLess } from "./Requests/Token/GeeTestV4TaskProxyLess";
import { AwsWafClassificationSolution } from "./Solution/ClassificationSolution/AwsWafClassificationSolution";
import { HCaptchaClassificationSolution } from "./Solution/ClassificationSolution/HCaptchaClassificationSolution";
import { ReCaptchaV2ClassificationSolution } from "./Solution/ClassificationSolution/ReCaptchaV2ClassificationSolution";
import { AntiAwsWafTaskSolution } from "./Solution/TokenSolution/AntiAwsWafTaskSolution";
import { AntiCyberSiAraTaskSolution } from "./Solution/TokenSolution/AntiCyberSiAraTaskSolution";
import { AntiImpervaTaskSolution } from "./Solution/TokenSolution/AntiImpervaTaskSolution";
import { DataDomeSliderTaskSolution } from "./Solution/TokenSolution/DataDomeSliderTaskSolution";
import { FunCaptchaTaskSolution } from "./Solution/TokenSolution/FunCaptchaTaskSolution";
import { ImageToTextSolution } from "./Solution/ClassificationSolution/ImageToTextSolution";
import { AntiCloudflareTaskSolution } from "./Solution/TokenSolution/AntiCloudflareTaskSolution";
import { Requests } from "./Requests";
import { AntiAwsWafTask } from "./Requests/Token/AntiAwsWafTask";
import { AntiAkamaiPowTask } from "./Requests/Token/AntiAkamaiPowTask";
import { AntiAkamaiSensorTask } from "./Requests/Token/AntiAkamaiSensorTask";
import { AntiAkamaiWebTask } from "./Requests/Token/AntiAkamaiWebTask";
import { AntiAkamaiPowTaskSolution } from "./Solution/TokenSolution/AntiAkamaiPowTaskSolution";
import { AntiAkamaiSensorTaskSolution } from "./Solution/TokenSolution/AntiAkamaiSensorTaskSolution";
import { AntiAkamaiWebTaskSolution } from "./Solution/TokenSolution/AntiAkamaiWebTaskSolution";
import { GeeTestV3TaskSolution } from "./Solution/TokenSolution/GeeTestV3TaskSolution";
import { GeeTestV4TaskSolution } from "./Solution/TokenSolution/GeeTestV4TaskSolution";
import { AntiAkamaiBMPTask } from "./Requests/Token/AntiAkamaiBMPTask";
import { GeeTestTask } from "./Requests/Token/GeeTestTask";
import { GeeTestTaskProxyLess } from "./Requests/Token/GeeTestTaskProxyLess";
process.removeAllListeners("warning");

/**
 * @classdesc CapSolver client
 * @class
 * {@link https://docs.capsolver.com/guide/getting-started.html}
 */
export class CapSolver extends CaptchaClient<CapSolverCreateTaskResponse, Requests> {

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

  private appId = "123FB4BE-4028-4B49-A71B-D6D578F88136";

  /**
   * @param {object} [params] - CaptchaClientParams
   * @param {string} [params.clientKey] - YOUR_API_KEY from dashboard
   * @param {number} [params.timeout] - max timeout to getTaskResult
   * @param {number} [params.pollingInterval] - polling interval to getTaskResult
   */
  constructor(params: CaptchaClientParams) {
    const {
      clientKey, timeout = 120_000, pollingInterval = 5_000
    } = params;

    super();
    this.clientKey = clientKey;
    this.pollingInterval = pollingInterval;
    this.timeout = timeout;
    this.httpClient = ofetch.create({
      baseURL: "https://api.capsolver.com/",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      ignoreResponseError: true
    });
  }
  public async getBalance(): Promise<number> {
    const {
      balance, errorId, errorCode, errorDescription
    } = await this.httpClient<CapSolverBalanceResponse>("getBalance", {
      body: { clientKey: this.clientKey },
      method: "POST"
    });

    if (errorId) throw new Error(`CapSolver: ${errorCode} - ${errorDescription}`);

    return balance;
  }

  /**
   * @param {object} request - task payload to create task
   * @return {Promise<CapSolverCreateTaskResponse<TSolution>>} - response of createTask
   */
  protected async createTask<TSolution>(request: Requests): Promise<CapSolverCreateTaskResponse<TSolution>> {
    const {
      _endpoint, ...body
    } = request;

    const response = await this.httpClient<CapSolverCreateTaskResponse<TSolution>>(_endpoint, {
      body: {
        appId: this.appId,
        clientKey: this.clientKey,
        task: body
      },
      method: "POST"
    });

    if (response.errorCode)
      throw new Error(`CapSolver: ${response.errorCode}`);

    return response;
  }

  /**
   * We rely on reports to automatically analyze the quality of tokens issued by our API. These reports are processed automatically, and our team takes proactive steps to enhance token quality, such as updating the system for new tasks, improving grids, and more.
   * {@link https://docs.capsolver.com/guide/api-feedback.html}
   * @param {FeedbackTaskParams} params - task feedback payload
   * @param {string} [params.taskId] - Your task id
   * @param {boolean} [params.invalid] - is task result invalid?
   * @param {number} [params.code] - code of task result
   * @param {number} [params.message] - invalid token messages
   */
  public async feedbackTask(params: FeedbackTaskParams) {
    const {
      taskId, ...result
    } = params;

    const response = await this.httpClient<FeedbackResponse>("feedbackTask", {
      body: {
        appId: this.appId,
        clientKey: this.clientKey,
        result,
        taskId
      },
      method: "POST"
    });

    return response;
  }

  /**
  * @param {ReCaptchaV2EnterpriseTask | ReCaptchaV2EnterpriseTaskProxyLess | ReCaptchaV2Task | ReCaptchaV2TaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverSolution<ReCaptchaV2TaskSolution>>} - response of createTask
  */
  public async solve(request: ReCaptchaV2EnterpriseTask | ReCaptchaV2EnterpriseTaskProxyLess | ReCaptchaV2Task | ReCaptchaV2TaskProxyLess): Promise<CapSolverSolution<ReCaptchaV2TaskSolution>>;

  /**
  * @param {ReCaptchaV3EnterpriseTask | ReCaptchaV3EnterpriseTaskProxyLess | ReCaptchaV3M1TaskProxyLess | ReCaptchaV3Task | ReCaptchaV3TaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverSolution<ReCaptchaV3EnterpriseTask | ReCaptchaV3EnterpriseTaskProxyLess | ReCaptchaV3Task | ReCaptchaV3TaskProxyLess | ReCaptchaV3M1TaskProxyLess>>} - response of createTask
  */
  public async solve(request: ReCaptchaV3EnterpriseTask | ReCaptchaV3EnterpriseTaskProxyLess | ReCaptchaV3M1TaskProxyLess | ReCaptchaV3Task | ReCaptchaV3TaskProxyLess): Promise<CapSolverSolution<ReCaptchaV3TaskSolution>>;

  /**
  * @param {AntiAwsWafTask | AntiAwsWafTaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverSolution<AntiAwsWafTaskSolution>>} - response of createTask
  */
  public async solve(request: AntiAwsWafTask | AntiAwsWafTaskProxyLess): Promise<CapSolverSolution<AntiAwsWafTaskSolution>>;

  /**
  * @param {AntiCyberSiAraTask | AntiCyberSiAraTaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverSolution<AntiCyberSiAraTaskSolution>>} - response of createTask
  */
  public async solve(request: AntiCyberSiAraTask | AntiCyberSiAraTaskProxyLess): Promise<CapSolverSolution<AntiCyberSiAraTaskSolution>>;

  /**
  * @param {FunCaptchaTaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverSolution<FunCaptchaTaskSolution>>} - response of createTask
  */
  public async solve(request: FunCaptchaTaskProxyLess): Promise<CapSolverSolution<FunCaptchaTaskSolution>>;

  /**
  * @param {GeeTestV3Task | GeeTestV3TaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverSolution<GeeTestV3TaskSolution>>} - response of createTask
  */
  public async solve(request: GeeTestV3Task | GeeTestV3TaskProxyLess): Promise<CapSolverSolution<GeeTestV3TaskSolution>>;

  /**
  * @param {GeeTestV4Task | GeeTestV4TaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverSolution<GeeTestV4TaskSolution>>} - response of createTask
  */
  public async solve(request: GeeTestV4Task | GeeTestV4TaskProxyLess): Promise<CapSolverSolution<GeeTestV4TaskSolution>>;

  /**
  * @param {GeeTestTask | GeeTestTaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverSolution<GeeTestTaskSolution>>} - response of createTask
  */
  public async solve(request: GeeTestTask | GeeTestTaskProxyLess): Promise<CapSolverSolution<GeeTestV3TaskSolution & GeeTestV4TaskSolution>>;

  /**
  * @param {HCaptchaTask | HCaptchaTaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverSolution<HCaptchaTaskSolution>>} - response of createTask
  */
  public async solve(request: HCaptchaTask | HCaptchaTaskProxyLess): Promise<CapSolverSolution<HCaptchaTaskSolution>>;

  /**
  * @param {MtCaptchaTask | MtCaptchaTaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverSolution<MtCaptchaTaskSolution>>} - response of createTask
  */
  public async solve(request: MtCaptchaTask | MtCaptchaTaskProxyLess): Promise<CapSolverSolution<MtCaptchaTaskSolution>>;

  /**
  * @param {AntiCloudflareChallengeTask | AntiCloudflareTurnstileTask} request - task payload to create task
  * @return {Promise<CapSolverSolution<AntiCloudflareTaskSolution>>} - response of createTask
  */
  public async solve(request: AntiCloudflareChallengeTask | AntiCloudflareTurnstileTask): Promise<CapSolverSolution<AntiCloudflareTaskSolution>>;

  /**
  * @param {AntiImpervaTask | AntiImpervaTaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverSolution<AntiImpervaTaskSolution>>} - response of createTask
  */
  public async solve(request: AntiImpervaTask | AntiImpervaTaskProxyLess): Promise<CapSolverSolution<AntiImpervaTaskSolution>>;

  /**
  * @param {DataDomeSliderTask} request - task payload to create task
  * @return {Promise<CapSolverSolution<DataDomeSliderTaskSolution>>} - response of createTask
  */
  public async solve(request: DataDomeSliderTask): Promise<CapSolverSolution<DataDomeSliderTaskSolution>>;

  /**
  * @param {AntiAkamaiSensorTask} request - task payload to create task
  * @return {Promise<CapSolverSolution<AntiAkamaiBMPTaskSolution>>} - response of createTask
  */
  public async solve(request: AntiAkamaiSensorTask): Promise<CapSolverSolution<AntiAkamaiSensorTaskSolution>>;

  /**
  * @param {AntiAkamaiPowTask} request - task payload to create task
  * @return {Promise<CapSolverSolution<AntiAkamaiBMPTaskSolution>>} - response of createTask
  */
  public async solve(request: AntiAkamaiPowTask): Promise<CapSolverSolution<AntiAkamaiPowTaskSolution>>;

  /**
  * @param {AntiAkamaiBMPTask} request - task payload to create task
  * @return {Promise<CapSolverSolution<AntiAkamaiBMPTaskSolution>>} - response of createTask
  */
  public async solve(request: AntiAkamaiBMPTask): Promise<CapSolverSolution<AntiAkamaiPowTaskSolution & AntiAkamaiSensorTaskSolution>>;

  /**
  * @param {AntiAkamaiWebTask} request - task payload to create task
  * @return {Promise<CapSolverSolution<AntiAkamaiWebTaskSolution>>} - response of createTask
  */
  public async solve(request: AntiAkamaiWebTask): Promise<CapSolverSolution<AntiAkamaiWebTaskSolution>>;

  /**
   * @param {ImageToTextTask} request - ImageToTextTask
   * @return {Promise<ImageToTextSolution>} - response of createTask
   */
  public async solve(request: ImageToTextTask): Promise<CapSolverSolution<ImageToTextSolution>>;

  /**
  * @param {AwsWafClassification} request - task payload to create task
  * @return {Promise<CapSolverSolution<AwsWafClassificationSolution>>} - response of createTask
  */
  public async solve(request: AwsWafClassification): Promise<CapSolverSolution<AwsWafClassificationSolution>>;

  /**
  * @param {HCaptchaClassification} request - task payload to create task
  * @return {Promise<CapSolverSolution<HCaptchaClassificationSolution>>} - response of createTask
  */
  public async solve(request: HCaptchaClassification): Promise<CapSolverSolution<HCaptchaClassificationSolution>>;

  /**
  * @param {ReCaptchaV2Classification} request - task payload to create task
  * @return {Promise<CapSolverSolution<ReCaptchaV2ClassificationSolution>>} - response of createTask
  */
  public async solve(request: ReCaptchaV2Classification): Promise<CapSolverSolution<ReCaptchaV2ClassificationSolution>>;

  /**
  * @param {Requests} request - task payload to create task
  * @return {Promise<CapSolverSolution<TSolution>>} - response of createTask
  */
  public async solve<TSolution>(request: Requests): Promise<CapSolverSolution<TSolution>> {
    const balance = await this.getBalance();

    if (!balance) throw new Error("CapSolver: ERROR_ZERO_BALANCE");

    const {
      _isAntiAkamaiBMPTask = false,
      _isAntiAkamaiPowTask = false,
      _isAntiAkamaiSensorTask = false,
      _isAntiAkamaiWebTask = false,
      _isAntiAwsWafTask = false,
      _isAntiAwsWafTaskProxyLess = false,
      _isAntiCloudflareChallengeTask = false,
      _isAntiCloudflareTurnstileTask = false,
      _isAntiCyberSiAraTask = false,
      _isAntiCyberSiAraTaskProxyLess = false,
      _isAntiImpervaTask = false,
      _isAntiImpervaTaskProxyLess = false,
      _isAwsWafClassification = false,
      _isBaseTask = false,
      _isDataDomeSliderTask = false,
      _isFunCaptchaClassification = false,
      _isFunCaptchaTaskProxyLess = false,
      _isGeeTestTask = false,
      _isGeeTestTaskProxyLess = false,
      _isGeeTestV3Task = false,
      _isGeeTestV3TaskProxyLess = false,
      _isGeeTestV4Task = false,
      _isGeeTestV4TaskProxyLess = false,
      _isHCaptchaClassification = false,
      _isHCaptchaTask = false,
      _isHCaptchaTaskProxyLess = false,
      _isImageToTextTask = false,
      _isMtCaptchaTask = false,
      _isMtCaptchaTaskProxyLess = false,
      _isReCaptchaV2Classification = false,
      _isReCaptchaV2EnterpriseTask = false,
      _isReCaptchaV2EnterpriseTaskProxyLess = false,
      _isReCaptchaV2Task = false,
      _isReCaptchaV2TaskProxyLess = false,
      _isReCaptchaV3EnterpriseTask = false,
      _isReCaptchaV3EnterpriseTaskProxyLess = false,
      _isReCaptchaV3M1TaskProxyLess = false,
      _isReCaptchaV3Task = false,
      _isReCaptchaV3TaskProxyLess = false,
      ...payload
    } = { ...request };

    console.log({ payload });

    const createTaskResponse = await this.createTask<TSolution>(payload as Requests);

    if (createTaskResponse.solution)
      return await new Promise(resolve => resolve((createTaskResponse) as unknown as CapSolverSolution<TSolution>));

    const abortSignal = AbortSignal.timeout(this.timeout);

    const isAborted = abortSignal.aborted;

    try {
      while (!isAborted) {
        const data = await this.httpClient<CapSolverSolution<TSolution>>("getTaskResult", {
          body: { taskId: createTaskResponse.taskId },
          method: "POST",
          signal: abortSignal
        });

        if (data.solution)
          return new Promise(resolve => resolve(data));

        else if (data.errorCode)
          throw new Error(`CapSolver: ${data.errorDescription}`);

        await delay(this.pollingInterval);
      }
    }
    catch (error) {
      if (error instanceof FetchError)
        throw new Error(`CapSolver timeout ${this.timeout} exceeded!`);
      else
        throw error;
    }

    throw new Error("CapSolver finished with error");
  }
}