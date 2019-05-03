import { changeFieldValue } from "../actions";

describe("InputBlock actions", () => {
  it("returns an object", () => {
    expect(
      changeFieldValue({
        index: 0,
        payload: "mockValue"
      })
    ).toEqual({
      type: "CHANGE",
      index: 0,
      payload: "mockValue"
    })
  });
});
