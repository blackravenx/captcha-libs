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
import type {
  AntiAkamaiPowTaskSolution,
  AntiAkamaiSensorTaskSolution,
  AntiAkamaiWebTaskSolution,
  AntiAwsWafTaskSolution,
  AntiCloudflareTaskSolution,
  AntiCyberSiAraTaskSolution,
  AntiImpervaTaskSolution,
  DataDomeSliderTaskSolution,
  FunCaptchaTaskSolution,
  GeeTestV3TaskSolution,
  GeeTestV4TaskSolution,
  HCaptchaTaskSolution,
  MtCaptchaTaskSolution,
  ReCaptchaV2TaskSolution,
  ReCaptchaV3TaskSolution,
  AwsWafClassificationSolution,
  HCaptchaClassificationSolution,
  ImageToTextSolution,
  ReCaptchaV2ClassificationSolution,
  FunCaptchaClassificationSolution,
  VisionEngineSolution
} from "./Solution";
import type {
  AntiAkamaiPowTask,
  AntiAkamaiSensorTask,
  AntiAkamaiWebTask,
  AntiAwsWafTask,
  AntiAwsWafTaskProxyLess,
  AntiCloudflareChallengeTask,
  AntiCloudflareTurnstileTask,
  AntiCyberSiAraTask,
  AntiCyberSiAraTaskProxyLess,
  AntiImpervaTask,
  AntiImpervaTaskProxyLess,
  DataDomeSliderTask,
  FunCaptchaTaskProxyLess,
  GeeTestTask,
  GeeTestTaskProxyLess,
  FunCaptchaClassification,
  GeeTestV3Task,
  GeeTestV3TaskProxyLess,
  GeeTestV4Task,
  GeeTestV4TaskProxyLess,
  HCaptchaTask,
  HCaptchaTaskProxyLess,
  MtCaptchaTask,
  MtCaptchaTaskProxyLess,
  Requests,
  ReCaptchaV2EnterpriseTask,
  ReCaptchaV2EnterpriseTaskProxyLess,
  ReCaptchaV2Task,
  ReCaptchaV2TaskProxyLess,
  ReCaptchaV3EnterpriseTask,
  ReCaptchaV3EnterpriseTaskProxyLess,
  ReCaptchaV3M1TaskProxyLess,
  ReCaptchaV3Task,
  ReCaptchaV3TaskProxyLess,
  AntiAkamaiBMPTask,
  AwsWafClassification,
  HCaptchaClassification,
  ImageToTextTask,
  ReCaptchaV2Classification,
  VisionEngine,
  AntiTurnstileTaskProxyLess,
  FunCaptchaTask
} from "./Requests";
import type { CapSolverSolution } from "./Solution/_BaseSolution";
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
  * @return {Promise<CapSolverSolution<ReCaptchaV3TaskSolution>>} - response of createTask
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
  * @param {FunCaptchaTask | FunCaptchaTaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverSolution<FunCaptchaTaskSolution>>} - response of createTask
  */
  public async solve(request: FunCaptchaTask | FunCaptchaTaskProxyLess): Promise<CapSolverSolution<FunCaptchaTaskSolution>>;

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
  * @param {AntiCloudflareChallengeTask | AntiCloudflareTurnstileTask | AntiTurnstileTaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverSolution<AntiCloudflareTaskSolution>>} - response of createTask
  */
  public async solve(request: AntiCloudflareChallengeTask | AntiCloudflareTurnstileTask | AntiTurnstileTaskProxyLess): Promise<CapSolverSolution<AntiCloudflareTaskSolution>>;

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
  * @param {FunCaptchaClassification} request - task payload to create task
  * @return {Promise<CapSolverSolution<FunCaptchaClassificationSolution>>} - response of createTask
  */
  public async solve(request: FunCaptchaClassification): Promise<CapSolverSolution<FunCaptchaClassificationSolution>>;

  /**
  * @param {VisionEngine} request - task payload to create task
  * @return {Promise<CapSolverSolution<VisionEngineSolution>>} - response of createTask
  */
  public async solve(request: VisionEngine): Promise<CapSolverSolution<VisionEngineSolution>>;

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
      _isVisionEngine = false,
      _isFunCaptchaTask = false,
      _isAntiTurnstileTaskProxyLess = false,
      ...payload
    } = { ...request };

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