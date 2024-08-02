import { GenericPuzzleTask } from "../../lib/Request/Recognition/GenericPuzzleTask";

describe("GenericPuzzleTask Test", () => {
  it("To be equal to object", () => {
    const task = new GenericPuzzleTask({ body: "image" });

    expect(task).toEqual({
      body: "image",
      click: "geetest",
      isSingleCoordinate: true,
      method: "base64",
      textinstructions: "slider"
    });
  });
});
