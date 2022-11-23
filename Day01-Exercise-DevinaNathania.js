//write a code to find area of rectangle

// let panjangRectangle = 2;
// let lebarRectangle = 5;

let areaRectangle = (panjangRectangle, lebarRectangle) => {
  return panjangRectangle * lebarRectangle;
};

// console.log(
//   `Area persegi panjang dengan panjang ${panjangRectangle} dan lebar ${lebarRectangle} adalah ${areaRectangle}`
// );
//write a code to find perimeter of rectangle

let perimeterRectangle = (panjangRectangle, lebarRectangle) => {
  return 2 * panjangRectangle + 2 * lebarRectangle;
};
// console.log(
//   `Perimeter persegi panjang dengan panjang ${panjangRectangle} dan lebar ${lebarRectangle} adalah ${perimeterRectangle}`
// );
//write a code to find diameter, circumference and area of a circle
// let jarijari = 7;
// let pi = Math.PI;

let diameterLingkaran = (r) => {
  return 2 * r;
};
let circumferenceLingkaran = (r) => {
  return (22 / 7) * 2 * r;
};
let areaLingkaran = (r) => {
  return (22 / 7) * r * r;
};

// console.log(
//   `Lingkaran dengan jari-jari ${jarijari} m memiliki diameter ${diameterLingkaran} m, keliling ${circumferenceLingkaran}m, dan area ${areaLingkaran} m2`
// );
//write a code to find angles of triangles if two angles are given

// let angle1 = 50;
// let angle2 = 25;

let angle = (ang1, ang2) => {
  return 180 - (ang1 + ang2);
};

// console.log(
//   `Segitiga dengan angle pertama sebesar ${angle1} derajat dan angle kedua sebesar ${angle2} derajat akan memiliki angle ketiga sebesar ${angle3} derajat`
// );

//write a code to get difference between dates in days
// const date = new Date();

let bedaHari = (date1, date2) => {
  let d1 = new Date(date1);
  let d2 = new Date(date2);

  let difference = d1.getTime() - d2.getTime();

  let days = Math.ceil(difference / (1000 * 60 * 60 * 24));

  return days;
};
// console.log(
//   `Jarak antara tanggal ${d1.toLocaleString()} dan ${d2.toLocaleString()} adalah ${days} hari`
// );

//write a code to convert days to years, months, and days
let convertHari = (hari) => {
  let tahun = Math.floor(hari / 365);
  let hariSisa = hari % 365;

  let bulan = Math.floor(hariSisa / 30);
  hariSisa = hariSisa % 30;

  let minggu = Math.floor(hariSisa / 7);
  hariSisa = hariSisa % 7;

  let text = `${hari} hari: ${tahun} tahun, ${bulan} bulan, ${minggu} minggu, ${hariSisa} hari.`;
  return text;
};
module.exports = {
  areaRectangle,
  perimeterRectangle,
  diameterLingkaran,
  circumferenceLingkaran,
  areaLingkaran,
  angle,
  bedaHari,
  convertHari,
};
