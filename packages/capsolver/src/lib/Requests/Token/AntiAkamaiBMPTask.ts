import type { _IsTaskType } from "../_BaseTaskRequest";

import { BaseTask } from "../_BaseTaskRequest";

export interface AntiAkamaiBMPTaskParams {
  "count"?: number;
  "country"?: string;
  "deviceId"?: string;
  "deviceName"?: string;
  "metadata"?: Record<string, string>;
  "packageName"?: string;
  "pow"?: string;
  "version"?: string;
}

/**
 * @classdesc Class for AntiAkamaiBMPTask. This task type uses a separate endpoint for fetching /akamaibmp/invoke
 * @class
 * @deprecated deleted from service support
 * @extends {AntiAkamaiBMPTaskBase}
 * @see {@link https://docs.capsolver.com/guide/antibots/akamaibmp.html}
 */
export class AntiAkamaiBMPTask extends BaseTask implements AntiAkamaiBMPTaskParams, _IsTaskType {

  /**
  * @type {boolean} _isAntiAkamaiBMPTask - Only used for correct method overloading intellisense
  */
  readonly _isAntiAkamaiBMPTask: _IsTaskType["_isAntiAkamaiBMPTask"] = true;

  /**
   * Create AntiAkamaiBMPTaskBase
   * @see {@link https://docs.capsolver.com/guide/antibots/akamaibmp.html}
   * @param {object} params -	AntiAkamaiBMPTaskBaseParams
   * @param {number} [params.count] - Sensor combinations acquired at once, 0< count <= 50, max 50 items acquired at once
   * @param {string} [params.deviceId] - If you want to have a fixed device ID in the sensor, you can pass this parameter
   * @param {string} [params.deviceName] - Input fixed deviceInfo，default is: random. example: iPhone14,2/16.0.2
   * @param {string} [params.packageName] - Package name of AkamaiBMP mobile APP, de.package.iphone
   * @param {string} [params.pow] - Support: /_bm/get_params data. If this parameter is passed in, the other parameters will be ignored to generate the pow string
   * @param {string} [params.version] - AKAMAI BMP Version number, default is: 3.2.6 , max support 3.3.1
   */
  constructor ({ count, deviceId, deviceName, packageName, pow, version, metadata, country }: AntiAkamaiBMPTaskParams) {
    super({
      "_endpoint": "akamaibmp/invoke",
      "type": "AntiAkamaiBMPTask"
    });

    this.count = count;

    this.deviceId = deviceId;

    this.deviceName = deviceName;

    this.packageName = packageName;

    this.pow = pow;

    this.version = version;

    this.metadata = metadata;

    this.country = country;
  }

  /**
   * @type {number} count - Sensor combinations acquired at once, 0< count <= 50, max 50 items acquired at once
   */
  count?: number;

  /**
   * @type {string} deviceId - If you want to have a fixed device ID in the sensor, you can pass this parameter
   */
  deviceId?: string;

  /**
   * @type {string} deviceName - Input fixed deviceInfo，default is: random. example: iPhone14,2/16.0.2
   */
  deviceName?: string;

  /**
   * @type {string} packageName - Package name of AkamaiBMP mobile APP, de.package.iphone
   */
  packageName?: string;

  //
  // @type {string} pow - Support: /_bm/get_params data
  // {"mode":1,"nonce":"3764bd11365749ec62974f920eb3614c","ttl":21600,"difficulty":6000,"timeout":100,"n":490,"s_timeout":100,"checksum":"plKZ9lBBJwLeeWRjoaZ4OevBFoPf3EyJIFgp2utWwI3ly34OsW6JluR2nY+lAwapZAcMf/kCo2g5ni6daXPhBSpg=="} If this parameter is passed in, the other parameters will be ignored to generate the pow string
  //
  pow?: string;

  /**
   * @type {string} version - AKAMAI BMP Version number, default is: 3.2.6 , max support 3.3.1
   */
  version?: string;

  /**
   * @type {object} metadata - Use for sensor task
   */
  metadata?: Record<string, string>;

  /**
   * @type {string} country -
   */
  country?: string;
}
