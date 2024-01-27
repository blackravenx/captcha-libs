import { BaseTask } from "../_BaseTaskRequest";
import { AntiAkamaiBMPTaskParams } from "./AntiAkamaiBMPTask";

type AntiAkamaiSensorTaskParams = Omit<AntiAkamaiBMPTaskParams, "pow"> & Required<Pick<AntiAkamaiBMPTaskParams, "packageName" | "version">>;

/**
 * @classdesc AntiAkamaiSensorTask This task type uses a separate endpoint for fetching /akamaibmp/invoke
 * @class
 * @extends {BaseTask}
 * {@link https://docs.capsolver.com/guide/antibots/akamaibmp.html}
 */
export class AntiAkamaiSensorTask extends BaseTask implements AntiAkamaiSensorTaskParams {

  /**
   * Create AntiAkamaiSensorTask
   * This task type uses a separate endpoint for fetching /akamaibmp/invoke
   * {@link https://docs.capsolver.com/guide/antibots/akamaibmp.html}
   * @param {object} params -	AntiAkamaiSensorTaskParams
   * @param {string} [params.packageName] - required. Package name of AkamaiBMP mobile APP, de.package.iphone
   * @param {string} [params.version] - required. AKAMAI BMP Version number, default is: 3.2.6 , max support 3.3.1
   * @param {number} [params.count] - Sensor combinations acquired at once, 0< count <= 50, max 50 items acquired at once
   * @param {string} [params.deviceId] - If you want to have a fixed device ID in the sensor, you can pass this parameter
   * @param {string} [params.deviceName] - Input fixed deviceInfo，default is: random. example: iPhone14,2/16.0.2
   */
  constructor({
    count, country, deviceId, deviceName, metadata, packageName, version
  }: AntiAkamaiSensorTaskParams) {
    super({
      _endpoint: "akamaibmp/invoke",
      type: "AntiAkamaiBMPTask"
    });
    this.count = count;
    this.country = country;
    this.deviceId = deviceId;
    this.deviceName = deviceName;
    this.metadata = metadata;
    this.packageName = packageName;
    this.version = version;
  }

  /**
   * @type {number} count - Sensor combinations acquired at once, 0< count <= 50, max 50 items acquired at once
   */
  count?: number;

  /**
   * @type {string} country -
   */
  country?: string;

  /**
   * @type {string} deviceId - If you want to have a fixed device ID in the sensor, you can pass this parameter
   */
  deviceId?: string;

  /**
   * @type {string} deviceName - Input fixed deviceInfo，default is: random. example: iPhone14,2/16.0.2
   */
  deviceName?: string;

  /**
   * @type {object} metadata - Use for sensor task
   */
  metadata?: Record<string, string>;

  /**
   * @type {string} packageName - Package name of AkamaiBMP mobile APP, de.package.iphone
   */
  packageName: string;

  /**
   * @type {string} version - AKAMAI BMP Version number, default is: 3.2.6 , max support 3.3.1
   */
  version: string;
}

