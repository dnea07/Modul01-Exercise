//write a code to find area of rectangle

let panjangRectangle = 2;
let lebarRectangle = 5;

let areaRectangle = panjangRectangle * lebarRectangle;

console.log(
  `Area persegi panjang dengan panjang ${panjangRectangle} dan lebar ${lebarRectangle} adalah ${areaRectangle}`
);
//write a code to find perimeter of rectangle

let perimeterRectangle = 2 * panjangRectangle + 2 * lebarRectangle;
console.log(
  `Perimeter persegi panjang dengan panjang ${panjangRectangle} dan lebar ${lebarRectangle} adalah ${perimeterRectangle}`
);
//write a code to find diameter, circumference and area of a circle
let jarijari = 7;
let pi = Math.PI;

let diameterLingkaran = 2 * jarijari;
let circumferenceLingkaran = pi * diameterLingkaran;
let areaLingkaran = pi * jarijari * jarijari;

console.log(
  `Lingkaran dengan jari-jari ${jarijari} m memiliki diameter ${diameterLingkaran} m, keliling ${circumferenceLingkaran}m, dan area ${areaLingkaran} m2`
);
//write a code to find angles of triangles if two angles are given

let angle1 = 50;
let angle2 = 25;

let angle3 = 180 - (angle1 + angle2);

console.log(
  `Segitiga dengan angle pertama sebesar ${angle1} derajat dan angle kedua sebesar ${angle2} derajat akan memiliki angle ketiga sebesar ${angle3} derajat`
);

//write a code to get difference between dates in days
// let tanggal1 = 25;
// let tanggal2 = 13;
// let margin = Math.abs(tanggal1 - tanggal2);

// console.log(
//   `Jarak antara tanggal ${tanggal1} dan ${tanggal2} adalah ${margin} hari`
// );

//write a code to convert days to years, months, and days

let jumlahHari = 576;

let tahun = Math.floor(jumlahHari / 365);
let hariSisa = jumlahHari % 365;

let bulan = Math.floor(hariSisa / 30);
hariSisa = hariSisa % 30;

let minggu = Math.floor(hariSisa / 7);
hariSisa = hariSisa % 7;

console.log(
  `${jumlahHari} hari: ${tahun} tahun, ${bulan} bulan, ${minggu} minggu, ${hariSisa} hari.`
);
