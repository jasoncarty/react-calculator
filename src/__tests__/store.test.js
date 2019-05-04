import { calculationType, fieldValues } from "../store";
import { SUM, MULTIPLY, CHANGE } from "../constants";

describe("store", () => {
  describe("reducers", () => {
    describe("calculationType", () => {
      it("returns SUM", () => {
        expect(calculationType("*", { type: SUM }))
          .toEqual("+");
      });

      it("returns MULTIPLY", () => {
        expect(calculationType("+", { type: MULTIPLY }))
          .toEqual("*");
      });

      it("returns original state", () => {
        expect(calculationType("*", { type: "Fake" }))
          .toEqual("*");
      });
    });

    describe("fieldValues", () => {
      it("returns added fieldValues", () => {
        expect(fieldValues({
          1: 345
        }, {
          type: CHANGE,
          index: 0,
          payload: "1243"
        }))
          .toEqual({
            0: 1243,
            1: 345
          });
      });

      it("returns updated fieldValues", () => {
        expect(fieldValues({
          0: 1243,
          1: 345
        }, {
          type: CHANGE,
          index: 0,
          payload: ""
        }))
          .toEqual({
            1: 345
          });
      });

      it("returns original state", () => {
        expect(fieldValues({
          0: 1243,
          1: 345
        }, {
          type: "Fake",
          index: 0,
          payload: ""
        }))
          .toEqual({
            0: 1243,
            1: 345
          });
      });
    });
  });
});
