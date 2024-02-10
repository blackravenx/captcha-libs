import { BinanceGridTask } from "../../lib/Request/Recognition/BinanceGridTask";

describe("BinanceGridTask Test", () => {
  it("To be equal to object", () => {
    const task = new BinanceGridTask({
      body: "image",
      textinstructions: "binance,bear"
    });

    expect(task).toEqual({
      body: "image",
      click: "geetest2",
      isGrid: true,
      method: "base64",
      textinstructions: "binance,bear"
    });
  });
});
