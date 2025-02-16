import { CapSolver } from "./../../lib/capsolver";

import { describe, expect, it } from "vitest";

import "./mock";

describe("CapSolver API: getBalance", () => {
  it("should response balance", async () => {
    const client = new CapSolver({ "clientKey": "some-key" });

    const response = await client.getBalance();

    expect(response).toEqual(expect.objectContaining({
      "balance": expect.any(Number),
      "errorId": expect.any(Number),
      "packages": expect.any(Array)
    }));
  });

  it("should throw error", async () => {
    // @ts-ignore
    const client = new CapSolver({ "clientKey": undefined });

    await expect(async () => await client.getBalance()).rejects.toThrow();
  });
});
