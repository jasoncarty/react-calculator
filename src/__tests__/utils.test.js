import { validator, calculate } from "../components/utils";

const multiplicationValues = [
  {
    result: { answer: 240},
    values: { 0: "2", 1: "6", 2: "20" }
  },
  {
    result: { answer: 9232466 },
    values: { 0: "68899", 1: "2", 2: "67" }
  },
  {
    result: { answer: 716663952 },
    values: { 0: "8", 1: "963258", 2: "93" }
  },
  {
    result: { answer: 0 },
    values: { 1: "963258" }
  },
  {
    result: { answer: 0 },
    values: { 2: "93" }
  }
];

const additionValues = [
  {
    result: { answer: 28},
    values: { 0: "2", 1: "6", 2: "20" }
  },
  {
    result: { answer: 68968 },
    values: { 0: "68899", 1: "2", 2: "67" }
  },
  {
    result: { answer: 963359 },
    values: { 0: "8", 1: "963258", 2: "93" }
  },
  {
    result: { answer: 0 },
    values: { 1: "963258" }
  },
  {
    result: { answer: 0 },
    values: { 2: "93" }
  }
];

describe("utils", () => {
  describe("calculate", () => {
    multiplicationValues.forEach((item) => {
      it(`calculates values ${item.values} with multiplication`, () => {
        expect(calculate({
          fieldValues: item.values,
          calculationType: "*"
        })).toEqual(item.result);
      });
    });

    additionValues.forEach((item) => {
      it(`calculates values ${item.values} with multiplication`, () => {
        expect(calculate({
          fieldValues: item.values,
          calculationType: "+"
        })).toEqual(item.result);
      });
    });
  });

  describe("validator", () => {
    it("replaces all chars except numbers", () => {
      expect(validator("12309mnrg.,6hn}{*"))
        .toEqual("123096");
    });

    it("does not allow strings starting with 0", () => {
      expect(validator("00000012309mnrg.,6hn}{*"))
        .toEqual("0");
    });
  });
});
