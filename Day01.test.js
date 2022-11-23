const {
  areaRectangle,
  perimeterRectangle,
  diameterLingkaran,
  circumferenceLingkaran,
  areaLingkaran,
  angle,
  bedaHari,
  convertHari,
} = require("./Day01-Exercise-DevinaNathania");

test("Test area Rectangle function", () => {
  expect(areaRectangle(10, 5)).toBe(50);
});

test("Test perimeter Rectangle function", () => {
  expect(perimeterRectangle(10, 5)).toBe(30);
});

test("Test diameter lingkaran function", () => {
  expect(diameterLingkaran(2)).toBe(4);
});

test("Test circumfererence lingkaran function", () => {
  expect(circumferenceLingkaran(7)).toBe(44);
});

test("Test area lingkaran function", () => {
  expect(areaLingkaran(7)).toBe(154);
});

test("Test angle ke3 function", () => {
  expect(angle(45, 75)).toBe(60);
});

test("Test beda hari function", () => {
  expect(bedaHari("2022-10-09", "2022-09-09")).toBe(30);
});

test("Test convert hari function", () => {
  expect(convertHari(3)).toBe("3 hari: 0 tahun, 0 bulan, 0 minggu, 3 hari.");
});
