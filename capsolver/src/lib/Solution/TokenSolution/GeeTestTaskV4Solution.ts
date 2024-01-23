import type { CapSolverBaseSolution } from "../_BaseSolution";

interface Solution {
  captcha_id: string;
  captcha_output: string;
  gen_time: string;
  lot_number: string;
  pass_token: string;
  risk_type: string;
}

export type GeeTestTaskV4Solution = CapSolverBaseSolution<Solution>;