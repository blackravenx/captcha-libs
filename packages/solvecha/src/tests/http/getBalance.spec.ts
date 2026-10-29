import { Solvecha } from "../../lib/solvecha";

import { describe, expect, it } from "vitest";

import "./mock";

describe("Solvecha API: getBalance", () => {
  it("should response balance, also when it is 0", async () => {
    const client = new Solvecha({ "clientKey": "some-key" });

    const response = await client.getBalance();

    expect(response).toEqual({
      "balance": 0,
      "errorId": 0,
      "packages": []
    });
  });

  it("should keep the API error message on a 401 response", async () => {
    const client = new Solvecha({ "clientKey": "wrong-key" });

    await expect(client.getBalance()).rejects.toThrow("Solvecha: ERROR_KEY_DENIED_ACCESS - The clientKey is missing or wrong.");
  });
});
