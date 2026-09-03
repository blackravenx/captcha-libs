import type { _IsTaskType } from "../_BaseTaskRequest";

import { BaseTask } from "../_BaseTaskRequest";

export interface AntiBotdeflectorTaskProxyLessParams {
  "websiteURL": string;
  "domain": string;
  "flowToken": string;
}

/**
 * @classdesc Class for AntiBotdeflectorTaskProxyLess.
 * @class
 * @see {@link https://docs.capsolver.com/en/guide/captcha/botdeflector}
 */
export class AntiBotdeflectorTaskProxyLess extends BaseTask implements AntiBotdeflectorTaskProxyLessParams, _IsTaskType {

  /**
  * @type {boolean} _isAntiBotdeflectorTaskProxyLess - Only used for correct method overloading intellisense
  */
  readonly _isAntiBotdeflectorTaskProxyLess: _IsTaskType["_isAntiBotdeflectorTaskProxyLess"] = true;

  /**
   * Create AntiBotdeflectorTaskProxyLess
   * @see {@link https://docs.capsolver.com/en/guide/captcha/botdeflector/}
   * @param {object} params -	AntiBotdeflectorTaskProxyLessParams
   * @param {string} [params.websiteURL] - The URL of the current website homepage
   * @param {string} [params.domain] - The domain name used by the pow/get or icon/get endpoints, for example: botdeflector.eu
   * @param {string} [params.flowToken] - On the website, it may be called botReflectorJwtToken, for example: eyJhbGciOiJ...
   * 
   */
  constructor ({websiteURL, domain, flowToken }: AntiBotdeflectorTaskProxyLessParams) {
    super({
      "type": "AntiBotdeflectorTaskProxyLess"
    });
    
    this.websiteURL = websiteURL;
    
    this.domain = domain;
    
    this.flowToken = flowToken;
  }

  /**
   * @type {string} websiteURL - The URL of the current website homepage
   */
  websiteURL: string;

  /**
   * @type {string} domain - The domain name used by the pow/get or icon/get endpoints, for example: botdeflector.eu
   */
  domain: string;

  /**
   * @type {string} flowToken - On the website, it may be called botReflectorJwtToken, for example: eyJhbGciOiJ...
   */
  flowToken: string;
}
