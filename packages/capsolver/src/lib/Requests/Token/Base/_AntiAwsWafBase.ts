import type { TaskTypes, ProxyCredentials } from "../../_BaseTaskRequest";

import { BaseTask } from "../../_BaseTaskRequest";

export type AntiAwsWafTaskBaseParams = Partial<ProxyCredentials> & {
  "awsChallengeJS"?: string;
  "awsContext"?: string;
  "awsIv"?: string;
  "awsKey"?: string;
  "awsApiJs"?: string; 
  "awsProblemUrl"?: string;
  "awsApiKey"?: string;
  "awsExistingToken"?: string;
  "websiteURL": string;
};

type Type = Extract<TaskTypes, "AntiAwsWafTask" | "AntiAwsWafTaskProxyLess">;

/**
 * @classdesc Base class for AntiAwsWafTask
 * @class
 * @see {@link https://docs.capsolver.com/en/guide/captcha/awsWaf/}
 * @extends {BaseTask}
 */
export abstract class AntiAwsWafTaskBase extends BaseTask implements AntiAwsWafTaskBaseParams {

  /**
  * Create AntiAwsWafTaskBase
  * {@link https://docs.capsolver.com/en/guide/captcha/awsWaf/}
  * @param {Object} params - AntiAwsWafTaskBaseParams
  * @param {string=} [params.awsChallengeJS] - When the status code returned by the websiteURL page is 202, you only need to pass in awsChallengeJs;
  * @param {string=} [params.awsContext] - When the status code returned by the websiteURL page is 405, you need to pass in awsContext
  * @param {string=} [params.awsIv] - When the status code returned by the websiteURL page is 405, you need to pass in awsIv
  * @param {string=} [params.awsKey] - When the status code returned by the websiteURL page is 405, you need to pass in awsKey
  * @param {string=} [params.awsApiJs] - The jsapi.js link returned by the captcha page
  * @param {string=} [params.awsProblemUrl] - The problem endpoint url containing keywords like problem, num_solutions_required, etc.
  * @param {string=} [params.awsApiKey] - The api_key value of the problem endpoint
  * @param {string=} [params.awsExistingToken] - The aws-waf-token used for the last verification
  * @param {string} [params.websiteURL] - The URL of the page that returns the captcha info
  * @param {string} [params.proxy] -	proxy
  * @param {string} [params.proxyAddress] - proxyAddress
  * @param {string} [params.proxyLogin] - proxyLogin
  * @param {string} [params.proxyPassword] - proxyPassword
  * @param {string} [params.proxyPort] - proxyPort
  * @param {string} [params.proxyType] - proxyType
  */
  
  constructor ({ awsChallengeJS, awsContext, awsIv, awsKey, awsApiJs, awsProblemUrl, awsApiKey, awsExistingToken, proxy, websiteURL, proxyAddress, proxyPort, proxyType, proxyLogin, proxyPassword }: AntiAwsWafTaskBaseParams, type: Type) {
    super({ type });

    this.awsChallengeJS = awsChallengeJS;

    this.awsContext = awsContext;

    this.awsIv = awsIv;

    this.awsKey = awsKey;
    
    this.awsApiJs = awsApiJs;

    this.awsProblemUrl = awsProblemUrl;
    
    this.awsApiKey = awsApiKey;
    
    this.awsExistingToken = awsExistingToken;
    
    this.websiteURL = websiteURL;

    this.proxy = proxy;

    this.proxyAddress = proxyAddress;

    this.proxyLogin = proxyLogin;

    this.proxyPort = proxyPort;

    this.proxyType = proxyType;

    this.proxyPassword = proxyPassword;
  }

  proxyAddress?: string;

  proxyLogin?: string;

  proxyPassword?: string;

  proxyPort?: number;

  proxyType?: ProxyCredentials["proxyType"];

  /**
   * @type {string=} awsChallengeJS - When the status code returned by the websiteURL page is 202, you only need to pass in awsChallengeJs;
   */
  awsChallengeJS?: string;

  /**
   * @type {string=} awsContext - When the status code returned by the websiteURL page is 405, you need to pass in awsContext
   */
  awsContext?: string;

  /**
   * @type {string=} awsIv - When the status code returned by the websiteURL page is 405, you need to pass in awsIv
   */
  awsIv?: string;

  /**
   * @type {string=} awsKey - When the status code returned by the websiteURL page is 405, you need to pass in awsKey
   */
  awsKey?: string;

  /**
   * @type {string=} proxy - proxy
   */
  proxy?: string;

  /**
   * @type {string} websiteURL - The URL of the page that returns the captcha info
   */
  websiteURL: string;
  
  /**
   * @type {string} awsApiJs - The jsapi.js link returned by the captcha page
   */
  awsApiJs?: string;
  
  /**
   * @type {string} awsProblemUrl - The problem endpoint url containing keywords like problem, num_solutions_required, etc.
   */
  awsProblemUrl?: string;
  
  /**
   * @type {string} awsApiKey - The api_key value of the problem endpoint
   */
  awsApiKey?: string;

  /**
   * @type {string} awsExistingToken - The aws-waf-token used for the last verification
   */
  awsExistingToken?: string;
}
