import type { $Fetch } from "ofetch";
import { ofetch } from "ofetch";
import { CaptchaClient } from "@captcha-libs/captcha-client";
import type {
  AntiAkamaiBMPTask,
  AntiAkamaiWebTask,
  AntiAwsWafTask,
  AntiAwsWafTaskProxyLess,
  AntiCloudflareTaskChallenge,
  AntiCloudflareTaskTurnstile,
  AntiCyberSiAraTask,
  AntiCyberSiAraTaskProxyLess,
  AntiImpervaTask,
  AntiImpervaTaskProxyLess,
  DataDomeSliderTask,
  FunCaptchaTaskProxyLess,
  GeeTestTaskProxyLess,
  GeeTestV3Task,
  GeeTestV3TaskProxyLess,
  GeeTestV4Task,
  GeeTestV4TaskProxyLess,
  HCaptchaClassification,
  HCaptchaTask,
  ImageToTextTask,
  MtCaptchaTask,
  MtCaptchaTaskProxyLess,
  ReCaptchaV2Classification,
  ReCaptchaV2EnterpriseTask,
  ReCaptchaV2EnterpriseTaskProxyLess,
  ReCaptchaV2Task,
  ReCaptchaV2TaskProxyLess,
  ReCaptchaV3EnterpriseTask,
  ReCaptchaV3EnterpriseTaskProxyLess,
  ReCaptchaV3Task,
  ReCaptchaV3TaskProxyLess,
  requests,
  GeeTestTask,

  AwsWafClassification
} from "./Request";
import type {
  AntiAkamaiBMPTaskSolution,
  AntiCloudflareTaskSolution,
  AntiAkamaiWebTaskSolution,
  AntiAwsWafTaskSolution,
  AntiCyberSiAraTaskSolution,
  AntiImpervaTaskSolution,
  AwsWafClassificationSolution,
  ImageToTextSolution,
  FunCaptchaTaskSolution,
  HCaptchaClassificationSolution,
  ReCaptchaV2ClassificationSolution,
  DataDomeSliderTaskSolution,
  Solution,
  GeeTestTaskV3Solution,
  GeeTestTaskV4Solution,
  MtCaptchaTaskSolution,
  ReCaptchaV2TaskSolution,
  ReCaptchaV3TaskSolution,
  HCaptchaTaskSolution,
  CapSolverBaseSolution
} from "./Solution";
import type {
  CapSolverCreateTaskResponse, CaptchaClientParams, CapSolverBalanceResponse
} from "./types";

/**
 * @classdesc CapSolver client
 * @class
 * {@link https://docs.capsolver.com/guide/getting-started.html}
 */
export class CapSolver extends CaptchaClient<CapSolverCreateTaskResponse> {

  /**
   * @type {string} clientKey - YOUR_API_KEY from dashboard
   */
  protected clientKey: string;

  /**
   * @type {number} pollingInterval - polling interval to getTaskResult in ms. Default to 5000
   */
  protected pollingInterval: number = 5000;

  /**
   * @type {number} timeout - max timeout to getTaskResult in ms. Default to 120_000
   */
  protected timeout: number = 120_000;

  /**
   * @type {$Fetch} httpClient - HTTP Client
   */
  protected httpClient: $Fetch;

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
      body: { clientKey: this.clientKey }
    });
  }
  protected async getBalance(): Promise<number> {
    const {
      balance, errorId
    } = await this.httpClient<CapSolverBalanceResponse>("getBalance");

    if (errorId) throw new Error(`CapSolver: ${errorId}`);

    return balance;
  }

  /**
   * @param {object} request - task payload to create task
   * @return {Promise<CapSolverCreateTaskResponse<TSolution>>} - response of createTask
   */
  protected override async createTask<TSolution>(request: requests): Promise<CapSolverCreateTaskResponse<TSolution>> {
    const response = await this.httpClient<CapSolverCreateTaskResponse<TSolution>>("createTask", {
      body: request,
      method: "POST"
    });

    if (response.errorCode)
      throw new Error(`CapSolver: ${response.errorCode}`);

    return response;
  }

  /**
   * @param {ImageToTextTask} request - ImageToTextTask
   * @return {Promise<ImageToTextSolution>} - response of createTask
   */
  public async solve(request: ImageToTextTask): Promise<ImageToTextSolution>;

  /**
   * @param {AwsWafClassification} request - task payload to create task
   * @return {Promise<AwsWafClassificationSolution>} - response of createTask
   */
  public async solve(request: AwsWafClassification): Promise<AwsWafClassificationSolution>;

  /**
   * @param {HCaptchaClassification} request - task payload to create task
   * @return {Promise<HCaptchaClassificationSolution>} - response of createTask
   */
  public async solve(request: HCaptchaClassification): Promise<HCaptchaClassificationSolution>;

  /**
   * @param {ReCaptchaV2Classification} request - task payload to create task
   * @return {Promise<ReCaptchaV2ClassificationSolution>} - response of createTask
   */
  public async solve(request: ReCaptchaV2Classification): Promise<ReCaptchaV2ClassificationSolution>;

  /**
   * @param {AntiAkamaiBMPTask} request - task payload to create task
   * @return {Promise<AntiAkamaiBMPTaskSolution>} - response of createTask
   */
  public async solve(request: AntiAkamaiBMPTask): Promise<AntiAkamaiBMPTaskSolution>;

  /**
   * @param {AntiAkamaiWebTask} request - task payload to create task
   * @return {Promise<AntiAkamaiWebTaskSolution>} - response of createTask
   */
  public async solve(request: AntiAkamaiWebTask): Promise<AntiAkamaiWebTaskSolution>;

  /**
   * @param {AntiAwsWafTask} request - task payload to create task
   * @return {Promise<AntiAwsWafTaskSolution>} - response of createTask
   */
  public async solve(request: AntiAwsWafTask): Promise<AntiAwsWafTaskSolution>;

  /**
   * @param {AntiAwsWafTaskProxyLess} request - task payload to create task
   * @return {Promise<AntiAwsWafTaskSolution>} - response of createTask
   */
  public async solve(request: AntiAwsWafTaskProxyLess): Promise<AntiAwsWafTaskSolution>;

  /**
   * @param {AntiCloudflareTaskChallenge} request - task payload to create task
   * @return {Promise<AntiCloudflareTaskSolution>} - response of createTask
   */
  public async solve(request: AntiCloudflareTaskChallenge): Promise<AntiCloudflareTaskSolution>;

  /**
   * @param {AntiCloudflareTaskTurnstile} request - task payload to create task
   * @return {Promise<AntiCloudflareTaskSolution>} - response of createTask
   */
  public async solve(request: AntiCloudflareTaskTurnstile): Promise<AntiCloudflareTaskSolution>;

  /**
   * @param {AntiCyberSiAraTask} request - task payload to create task
   * @return {Promise<AntiCyberSiAraTaskSolution>} - response of createTask
   */
  public async solve(request: AntiCyberSiAraTask): Promise<AntiCyberSiAraTaskSolution>;

  /**
   * @param {AntiCyberSiAraTaskProxyLess} request - task payload to create task
   * @return {Promise<AntiCyberSiAraTaskSolution>} - response of createTask
   */
  public async solve(request: AntiCyberSiAraTaskProxyLess): Promise<AntiCyberSiAraTaskSolution>;

  /**
   * @param {AntiImpervaTask} request - task payload to create task
   * @return {Promise<AntiImpervaTaskSolution>} - response of createTask
   */
  public async solve(request: AntiImpervaTask): Promise<AntiImpervaTaskSolution>;

  /**
   * @param {AntiImpervaTaskProxyLess} request - task payload to create task
   * @return {Promise<AntiImpervaTaskSolution>} - response of createTask
   */
  public async solve(request: AntiImpervaTaskProxyLess): Promise<AntiImpervaTaskSolution>;

  /**
   * @param {DataDomeSliderTask} request - task payload to create task
   * @return {Promise<DataDomeSliderTaskSolution>} - response of createTask
   */
  public async solve(request: DataDomeSliderTask): Promise<DataDomeSliderTaskSolution>;

  /**
   * @param {FunCaptchaTaskProxyLess} request - task payload to create task
   * @return {Promise<FunCaptchaTaskSolution>} - response of createTask
   */
  public async solve(request: FunCaptchaTaskProxyLess): Promise<FunCaptchaTaskSolution>;

  /**
   * @param {GeeTestTask} request - task payload to create task
   * @return {Promise<GeeTestTaskV3Solution | GeeTestTaskV4Solution>} - response of createTask
   */
  public async solve(request: GeeTestTask): Promise<GeeTestTaskV3Solution | GeeTestTaskV4Solution>;

  /**
   * @param {GeeTestTaskProxyLess} request - task payload to create task
   * @return {Promise<GeeTestTaskV3Solution | GeeTestTaskV4Solution>} - response of createTask
   */
  public async solve(request: GeeTestTaskProxyLess): Promise<GeeTestTaskV3Solution | GeeTestTaskV4Solution>;

  /**
   * @param {GeeTestV3Task} request - task payload to create task
   * @return {Promise<GeeTestTaskV3Solution>} - response of createTask
   */
  public async solve(request: GeeTestV3Task): Promise<GeeTestTaskV3Solution>;

  /**
   * @param {GeeTestV3TaskProxyLess} request - task payload to create task
   * @return {Promise<GeeTestTaskV3Solution>} - response of createTask
   */
  public async solve(request: GeeTestV3TaskProxyLess): Promise<GeeTestTaskV3Solution>;

  /**
   * @param {GeeTestV4Task} request - task payload to create task
   * @return {Promise<GeeTestTaskV4Solution>} - response of createTask
   */
  public async solve(request: GeeTestV4Task): Promise<GeeTestTaskV4Solution>;

  /**
   * @param {GeeTestV4TaskProxyLess} request - task payload to create task
   * @return {Promise<GeeTestTaskV4Solution>} - response of createTask
   */
  public async solve(request: GeeTestV4TaskProxyLess): Promise<GeeTestTaskV4Solution>;

  /**
   * @param {HCaptchaTask} request - task payload to create task
   * @return {Promise<HCaptchaTaskSolution>} - response of createTask
   */
  public async solve(request: HCaptchaTask): Promise<HCaptchaTaskSolution>;

  /**
   * @param {MtCaptchaTask} request - task payload to create task
   * @return {Promise<MtCaptchaTaskSolution>} - response of createTask
   */
  public async solve(request: MtCaptchaTask): Promise<MtCaptchaTaskSolution>;

  /**
   * @param {MtCaptchaTaskProxyLess} request - task payload to create task
   * @return {Promise<MtCaptchaTaskSolution>} - response of createTask
   */
  public async solve(request: MtCaptchaTaskProxyLess): Promise<MtCaptchaTaskSolution>;

  /**
   * @param {ReCaptchaV2Task} request - task payload to create task
   * @return {Promise<ReCaptchaV2TaskSolution>} - response of createTask
   */
  public async solve(request: ReCaptchaV2Task): Promise<ReCaptchaV2TaskSolution>;

  /**
   * @param {ReCaptchaV2EnterpriseTask} request - task payload to create task
   * @return {Promise<ReCaptchaV2TaskSolution>} - response of createTask
   */
  public async solve(request: ReCaptchaV2EnterpriseTask): Promise<ReCaptchaV2TaskSolution>;

  /**
   * @param {ReCaptchaV2EnterpriseTaskProxyLess} request - task payload to create task
   * @return {Promise<ReCaptchaV2TaskSolution>} - response of createTask
   */
  public async solve(request: ReCaptchaV2EnterpriseTaskProxyLess): Promise<ReCaptchaV2TaskSolution>;

  /**
   * @param {ReCaptchaV2TaskProxyLess} request - task payload to create task
   * @return {Promise<ReCaptchaV2TaskSolution>} - response of createTask
   */
  public async solve(request: ReCaptchaV2TaskProxyLess): Promise<ReCaptchaV2TaskSolution>;

  /**
   * @param {ReCaptchaV3Task} request - task payload to create task
   * @return {Promise<ReCaptchaV3TaskSolution>} - response of createTask
   */
  public async solve(request: ReCaptchaV3Task): Promise<ReCaptchaV3TaskSolution>;

  /**
   * @param {ReCaptchaV3EnterpriseTask} request - task payload to create task
   * @return {Promise<ReCaptchaV3TaskSolution>} - response of createTask
   */
  public async solve(request: ReCaptchaV3EnterpriseTask): Promise<ReCaptchaV3TaskSolution>;

  /**
   * @param {ReCaptchaV3EnterpriseTaskProxyLess} request - task payload to create task
   * @return {Promise<ReCaptchaV3TaskSolution>} - response of createTask
   */
  public async solve(request: ReCaptchaV3EnterpriseTaskProxyLess): Promise<ReCaptchaV3TaskSolution>;

  /**
   * @param {ReCaptchaV3TaskProxyLess} request - ReCaptchaV3TaskProxyLess
   * @return {Promise<ReCaptchaV3TaskSolution>} - response of createTask
   */
  public async solve(request: ReCaptchaV3TaskProxyLess): Promise<ReCaptchaV3TaskSolution>;

  /**
   * @param {requests} request - task payload to create task
   * @return {Promise<TSolution>} - response(solution) of task
   */
  public async solve<TSolution extends Solution>(request: requests): Promise<TSolution> {
    const createTaskResponse = await this.createTask<TSolution>(request);

    if (createTaskResponse.solution) return createTaskResponse.solution;

    const abortSignal = AbortSignal.timeout(this.timeout);

    const isAborted = abortSignal.aborted;

    while (!isAborted) {
      const data = await this.httpClient<CapSolverBaseSolution<TSolution>>("getTaskResult", {
        body: { taskId: createTaskResponse.taskId },
        signal: abortSignal
      });

      if (data.solution)
        return await new Promise(resolve => resolve(data.solution));

      else if (data.errorCode)
        return await Promise.reject(data.errorDescription);

      else if (isAborted)
        return await Promise.reject("Timeout exceed. Request aborted");
    }

    return await Promise.reject("Timeout exceed. Request aborted");
  }
}
