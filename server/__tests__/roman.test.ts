import { integerToRoman } from "../src/converters/roman";

describe("Roman Converter", () => {
  test("1", async () => {
    expect(integerToRoman(1)).toBe("I");
  });

  test("2", async () => {
    expect(integerToRoman(2)).toBe("II");
  });

  test("4", async () => {
    expect(integerToRoman(4)).toBe("IV");
  });

  test("8", async () => {
    expect(integerToRoman(8)).toBe("VIII");
  });

  test("16", async () => {
    expect(integerToRoman(16)).toBe("XVI");
  });

  test("32", async () => {
    expect(integerToRoman(32)).toBe("XXXII");
  });

  test("64", async () => {
    expect(integerToRoman(64)).toBe("LXIV");
  });
});
