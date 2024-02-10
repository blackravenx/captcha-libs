import { BinancePuzzleTask } from "../../lib/Request/Recognition/BinancePuzzleTask";

describe("BinancePuzzleTask Test", () => {
  it("To be equal to object", () => {
    const task = new BinancePuzzleTask({ body: "image" });

    expect(task).toEqual({
      body: "image",
      click: "geetest",
      isSingleCoordinate: true,
      method: "base64",
      textinstructions: "binance,slider"
    });
  });
});
