import type { _IsTaskType } from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";
import type { AntiAkamaiBMPTaskParams } from "./AntiAkamaiBMPTask";

type AntiAkamaiPowTaskParams = Required<Pick<AntiAkamaiBMPTaskParams, "deviceId" | "pow">>;

/**
 * @classdesc AntiAkamaiPowTask This task type uses a separate endpoint for fetching /akamaibmp/invoke
 * @class
 * @extends {BaseTask}
 * {@link https://docs.capsolver.com/guide/antibots/akamaibmp.html}
 */
export class AntiAkamaiPowTask extends BaseTask implements AntiAkamaiPowTaskParams, _IsTaskType {

  /**
  * @type {boolean} _isAntiAkamaiBMPTask - Only used for correct method overloading intellisense
  */
  readonly _isAntiAkamaiBMPTask: _IsTaskType["_isAntiAkamaiBMPTask"] = true;

  /**
   * Create AntiAkamaiPowTask
   * {@link https://docs.capsolver.com/guide/antibots/akamaibmp.html}
   * @param {object} params -	AntiAkamaiPowTaskParams
   * @param {string} [params.deviceId] - If you want to have a fixed device ID in the sensor, you can pass this parameter
   * @param {string} [params.pow] - Support: /_bm/get_params data. If this parameter is passed in, the other parameters will be ignored to generate the pow string
   */
  constructor({
    deviceId, pow
  }: AntiAkamaiPowTaskParams) {
    super({
      _endpoint: "akamaibmp/invoke",
      type: "AntiAkamaiBMPTask"
    });
    this.deviceId = deviceId;
    this.pow = pow;
  }

  /**
   * @type {string} deviceName - Input fixed deviceInfo，default is: random. example: iPhone14,2/16.0.2
   */
  deviceId: string;

  /**
   * @type {string} pow - Support: /_bm/get_params data
{"mode":1,"nonce":"3764bd11365749ec62974f920eb3614c","ttl":21600,"difficulty":6000,"timeout":100,"n":490,"s_timeout":100,"checksum":"plKZ9lBBJwLeeWRjoaZ4OevBFoPf3EyJIFgp2utWwI3ly34OsW6JluR2nY+lAwapZAcMf/kCo2g5ni6daXPhBSpg=="} If this parameter is passed in, the other parameters will be ignored to generate the pow string
   */
  pow: string;
}
