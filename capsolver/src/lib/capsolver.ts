import { MtCaptchaTask } from "./Request/TokenRequest/MtCaptchaTask";
import type { $Fetch } from "ofetch";
import { ofetch } from "ofetch";
import { CaptchaClient } from "@captcha-libs/captcha-client";
import type {
  CapSolverCreateTaskResponse, CaptchaClientParams, CapSolverBalanceResponse
} from "./types";
import { ReCaptchaV3TaskProxyLess } from "./Request/TokenRequest/ReCaptchaV3TaskProxyLess";
import { ReCaptchaV3M1TaskProxyLess } from "./Request/TokenRequest/ReCaptchaV3M1TaskProxyLess";
import { ReCaptchaV3EnterpriseTask } from "./Request/TokenRequest/ReCaptchaV3EnterpriseTask";
import { ReCaptchaV3EnterpriseTaskProxyLess } from "./Request/TokenRequest/ReCaptchaV3EnterpriseTaskProxyLess";
import { ReCaptchaV3Task } from "./Request/TokenRequest/ReCaptchaV3Task";
import { ReCaptchaV2EnterpriseTask } from "./Request/TokenRequest/ReCaptchaV2EnterpriseTask";
import { ReCaptchaV2EnterpriseTaskProxyLess } from "./Request/TokenRequest/ReCaptchaV2EnterpriseTaskProxyLess";
import { ReCaptchaV2Task } from "./Request/TokenRequest/ReCaptchaV2Task";
import { ReCaptchaV2TaskProxyLess } from "./Request/TokenRequest/ReCaptchaV2TaskProxyLess";
import { MtCaptchaTaskProxyLess } from "./Request/TokenRequest/MtCaptchaTaskProxyLess";
import { MtCaptchaTaskSolution } from "./Solution/TokenSolution/MtCaptchaTaskSolution";
import { ReCaptchaV2TaskSolution } from "./Solution/TokenSolution/ReCaptchaV2TaskSolution";
import { ReCaptchaV3TaskSolution } from "./Solution/TokenSolution/ReCaptchaV3TaskSolution";
import { CapSolverBaseSolution } from "./Solution/_BaseSolution";
import { HCaptchaTask } from "./Request/TokenRequest/HCaptchaTask";
import { HCaptchaTaskProxyLess } from "./Request/TokenRequest/HCaptchaTaskProxyLess";
import { HCaptchaTaskSolution } from "./Solution/TokenSolution/HCaptchaTaskSolution";
import { AwsWafClassification } from "./Request/ClassificationRequest/AwsWafClassification";
import { HCaptchaClassification } from "./Request/ClassificationRequest/HCaptchaClassification";
import { ImageToTextTask } from "./Request/ClassificationRequest/ImageToTextTask";
import { ReCaptchaV2Classification } from "./Request/ClassificationRequest/ReCaptchaV2Classification";
import { AntiAwsWafTaskProxyLess } from "./Request/TokenRequest/AntiAwsWafTaskProxyLess";
import { AntiCloudflareChallengeTask } from "./Request/TokenRequest/AntiCloudflareChallengeTask";
import { AntiCloudflareTurnstileTask } from "./Request/TokenRequest/AntiCloudflareTurnstileTask";
import { AntiCyberSiAraTask } from "./Request/TokenRequest/AntiCyberSiAraTask";
import { AntiCyberSiAraTaskProxyLess } from "./Request/TokenRequest/AntiCyberSiAraTaskProxyLess";
import { AntiImpervaTask } from "./Request/TokenRequest/AntiImpervaTask";
import { AntiImpervaTaskProxyLess } from "./Request/TokenRequest/AntiImpervaTaskProxyLess";
import { DataDomeSliderTask } from "./Request/TokenRequest/DataDomeSliderTask";
import { FunCaptchaTaskProxyLess } from "./Request/TokenRequest/FunCaptchaTaskProxyLess";
import { GeeTestV3Task } from "./Request/TokenRequest/GeeTestV3Task";
import { GeeTestV3TaskProxyLess } from "./Request/TokenRequest/GeeTestV3TaskProxyLess";
import { GeeTestV4Task } from "./Request/TokenRequest/GeeTestV4Task";
import { GeeTestV4TaskProxyLess } from "./Request/TokenRequest/GeeTestV4TaskProxyLess";
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
import { Requests } from "./Request";
import { AntiAwsWafTask } from "./Request/TokenRequest/AntiAwsWafTask";
import { AntiAkamaiPowTask } from "./Request/TokenRequest/AntiAkamaiPowTask";
import { AntiAkamaiSensorTask } from "./Request/TokenRequest/AntiAkamaiSensorTask";
import { AntiAkamaiWebTask } from "./Request/TokenRequest/AntiAkamaiWebTask";
import { AntiAkamaiPowTaskSolution } from "./Solution/TokenSolution/AntiAkamaiPowTaskSolution";
import { AntiAkamaiSensorTaskSolution } from "./Solution/TokenSolution/AntiAkamaiSensorTaskSolution";
import { AntiAkamaiWebTaskSolution } from "./Solution/TokenSolution/AntiAkamaiWebTaskSolution";
import { GeeTestV3TaskSolution } from "./Solution/TokenSolution/GeeTestV3TaskSolution";
import { GeeTestV4TaskSolution } from "./Solution/TokenSolution/GeeTestV4TaskSolution";
import { AntiAkamaiBMPTask } from "./Request/TokenRequest/AntiAkamaiBMPTask";
import { GeeTestTask } from "./Request/TokenRequest/GeeTestTask";
import { GeeTestTaskProxyLess } from "./Request/TokenRequest/GeeTestTaskProxyLess";

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
      body: { clientKey: this.clientKey },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
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
  protected async createTask<TSolution>(request: Requests): Promise<CapSolverCreateTaskResponse<TSolution>> {
    const {
      _endpoint, ...body
    } = request;

    const response = await this.httpClient<CapSolverCreateTaskResponse<TSolution>>(_endpoint, {
      body: {
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
  * @param {ReCaptchaV2EnterpriseTask | ReCaptchaV2EnterpriseTaskProxyLess | ReCaptchaV2Task | ReCaptchaV2TaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<ReCaptchaV2TaskSolution>>} - response of createTask
  */
  public async solve(request: ReCaptchaV2EnterpriseTask | ReCaptchaV2EnterpriseTaskProxyLess | ReCaptchaV2Task | ReCaptchaV2TaskProxyLess): Promise<CapSolverBaseSolution<ReCaptchaV2TaskSolution>>;

  /**
  * @param {ReCaptchaV3EnterpriseTask | ReCaptchaV3EnterpriseTaskProxyLess | ReCaptchaV3M1TaskProxyLess | ReCaptchaV3Task | ReCaptchaV3TaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<ReCaptchaV3EnterpriseTask | ReCaptchaV3EnterpriseTaskProxyLess | ReCaptchaV3Task | ReCaptchaV3TaskProxyLess | ReCaptchaV3M1TaskProxyLess>>} - response of createTask
  */
  public async solve(request: ReCaptchaV3EnterpriseTask | ReCaptchaV3EnterpriseTaskProxyLess | ReCaptchaV3M1TaskProxyLess | ReCaptchaV3Task | ReCaptchaV3TaskProxyLess): Promise<CapSolverBaseSolution<ReCaptchaV3TaskSolution>>;

  /**
  * @param {AntiAwsWafTask | AntiAwsWafTaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<AntiAwsWafTaskSolution>>} - response of createTask
  */
  public async solve(request: AntiAwsWafTask | AntiAwsWafTaskProxyLess): Promise<CapSolverBaseSolution<AntiAwsWafTaskSolution>>;

  /**
  * @param {AntiCyberSiAraTask | AntiCyberSiAraTaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<AntiCyberSiAraTaskSolution>>} - response of createTask
  */
  public async solve(request: AntiCyberSiAraTask | AntiCyberSiAraTaskProxyLess): Promise<CapSolverBaseSolution<AntiCyberSiAraTaskSolution>>;

  /**
  * @param {FunCaptchaTaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<FunCaptchaTaskSolution>>} - response of createTask
  */
  public async solve(request: FunCaptchaTaskProxyLess): Promise<CapSolverBaseSolution<FunCaptchaTaskSolution>>;

  /**
  * @param {GeeTestV3Task | GeeTestV3TaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<GeeTestV3TaskSolution>>} - response of createTask
  */
  public async solve(request: GeeTestV3Task | GeeTestV3TaskProxyLess): Promise<CapSolverBaseSolution<GeeTestV3TaskSolution>>;

  /**
  * @param {GeeTestV4Task | GeeTestV4TaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<GeeTestV4TaskSolution>>} - response of createTask
  */
  public async solve(request: GeeTestV4Task | GeeTestV4TaskProxyLess): Promise<CapSolverBaseSolution<GeeTestV4TaskSolution>>;

  /**
  * @param {GeeTestTask | GeeTestTaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<GeeTestTaskSolution>>} - response of createTask
  */
  public async solve(request: GeeTestTask | GeeTestTaskProxyLess): Promise<CapSolverBaseSolution<GeeTestV3TaskSolution & GeeTestV4TaskSolution>>;

  /**
  * @param {HCaptchaTask | HCaptchaTaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<HCaptchaTaskSolution>>} - response of createTask
  */
  public async solve(request: HCaptchaTask | HCaptchaTaskProxyLess): Promise<CapSolverBaseSolution<HCaptchaTaskSolution>>;

  /**
  * @param {MtCaptchaTask | MtCaptchaTaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<MtCaptchaTaskSolution>>} - response of createTask
  */
  public async solve(request: MtCaptchaTask | MtCaptchaTaskProxyLess): Promise<CapSolverBaseSolution<MtCaptchaTaskSolution>>;

  /**
  * @param {AntiCloudflareChallengeTask | AntiCloudflareTurnstileTask} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<AntiCloudflareTaskSolution>>} - response of createTask
  */
  public async solve(request: AntiCloudflareChallengeTask | AntiCloudflareTurnstileTask): Promise<CapSolverBaseSolution<AntiCloudflareTaskSolution>>;

  /**
  * @param {AntiImpervaTask | AntiImpervaTaskProxyLess} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<AntiImpervaTaskSolution>>} - response of createTask
  */
  public async solve(request: AntiImpervaTask | AntiImpervaTaskProxyLess): Promise<CapSolverBaseSolution<AntiImpervaTaskSolution>>;

  /**
  * @param {DataDomeSliderTask} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<DataDomeSliderTaskSolution>>} - response of createTask
  */
  public async solve(request: DataDomeSliderTask): Promise<CapSolverBaseSolution<DataDomeSliderTaskSolution>>;

  /**
  * @param {AntiAkamaiSensorTask} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<AntiAkamaiBMPTaskSolution>>} - response of createTask
  */
  public async solve(request: AntiAkamaiSensorTask): Promise<CapSolverBaseSolution<AntiAkamaiSensorTaskSolution>>;

  /**
  * @param {AntiAkamaiPowTask} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<AntiAkamaiBMPTaskSolution>>} - response of createTask
  */
  public async solve(request: AntiAkamaiPowTask): Promise<CapSolverBaseSolution<AntiAkamaiPowTaskSolution>>;

  /**
  * @param {AntiAkamaiBMPTask} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<AntiAkamaiBMPTaskSolution>>} - response of createTask
  */
  public async solve(request: AntiAkamaiBMPTask): Promise<CapSolverBaseSolution<AntiAkamaiPowTaskSolution & AntiAkamaiSensorTaskSolution>>;

  /**
  * @param {AntiAkamaiWebTask} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<AntiAkamaiWebTaskSolution>>} - response of createTask
  */
  public async solve(request: AntiAkamaiWebTask): Promise<CapSolverBaseSolution<AntiAkamaiWebTaskSolution>>;

  /**
   * @param {ImageToTextTask} request - ImageToTextTask
   * @return {Promise<ImageToTextSolution>} - response of createTask
   */
  public async solve(request: ImageToTextTask): Promise<CapSolverBaseSolution<ImageToTextSolution>>;

  /**
  * @param {AwsWafClassification} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<AwsWafClassificationSolution>>} - response of createTask
  */
  public async solve(request: AwsWafClassification): Promise<CapSolverBaseSolution<AwsWafClassificationSolution>>;

  /**
  * @param {HCaptchaClassification} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<HCaptchaClassificationSolution>>} - response of createTask
  */
  public async solve(request: HCaptchaClassification): Promise<CapSolverBaseSolution<HCaptchaClassificationSolution>>;

  /**
  * @param {ReCaptchaV2Classification} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<ReCaptchaV2ClassificationSolution>>} - response of createTask
  */
  public async solve(request: ReCaptchaV2Classification): Promise<CapSolverBaseSolution<ReCaptchaV2ClassificationSolution>>;

  /**
  * @param {Requests} request - task payload to create task
  * @return {Promise<CapSolverBaseSolution<TSolution>>} - response of createTask
  */
  public async solve<TSolution>(request: Requests): Promise<CapSolverBaseSolution<TSolution>> {
    const createTaskResponse = await this.createTask<TSolution>(request);

    if (createTaskResponse.solution)
      return await new Promise(resolve => resolve(createTaskResponse as unknown as CapSolverBaseSolution<TSolution>));

    const abortSignal = AbortSignal.timeout(this.timeout);

    const isAborted = abortSignal.aborted;

    while (!isAborted) {
      const data = await this.httpClient<CapSolverBaseSolution<TSolution>>("getTaskResult", {
        body: { taskId: createTaskResponse.taskId },
        method: "POST",
        signal: abortSignal
      });

      if (data.solution)
        return await new Promise(resolve => resolve(data));

      else if (data.errorCode)
        return await Promise.reject(data.errorDescription);

      else if (isAborted)
        return await Promise.reject("Timeout exceed. Request aborted");
    }

    return await Promise.reject("Timeout exceed. Request aborted");
  }
}