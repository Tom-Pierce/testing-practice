import {
  analyzeArray,
  caeserCipher,
  calculator,
  capitalize,
  reverseString,
} from "./script";

test("Capitalizes", () => {
  expect(capitalize("ari is smelly")).toBe("Ari is smelly");
});

test("Reverses", () => {
  expect(reverseString("ari is smelly")).toBe("yllems si ira");
});

test("Adds", () => {
  expect(calculator.add(6, 2)).toBe(8);
});

test("Subtracts", () => {
  expect(calculator.subtract(6, 2)).toBe(4);
});

test("Divices", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("Multiplies", () => {
  expect(calculator.multiply(6, 2)).toBe(12);
});

test("Ciphered", () => {
  expect(
    caeserCipher(
      "If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.",
      7,
    ),
  ).toBe(
    "Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba.",
  );
});

test("Analyzed average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("Analyzed min", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("Analyzed max", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("Analyzed length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
