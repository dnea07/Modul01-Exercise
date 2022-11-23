// //PSEUDOCODE
let array = [2, 3, 4, 5];
let arrayString = ["monyet", "lumba-lumba", "kepiting", "pisang"];
let callback = (num) => {
  let hasil = num + 3;
  return hasil;
};
let list = (element, i) => {
  let hasil = `${i + 1}. ${element}`;

  return hasil;
};
//PSEUDOCODE DUPLICATE MAP
//TITLE:function yang menduplikasi cara kerja MAP

//INPUT: sebuah ARRAY dan sebuah CALLBACK FUNCTION
function duplicateMap(arr, cbfn) {
  //PROSES:
  //1. membuat sebuah variabel yang akan menampung hasil akhir berupa ARRAY
  let hasil = [];
  //2. membuat FOR LOOP untuk memproses data satu per satu dimulai dari depan
  for (i = 0; i < arr.length; i++) {
    //3.memasukan isi array satu per satu kedalam CALLBACK FUNCTION
    //4. mem push hasil no. 3 ke dalam variabel output
    hasil.push(cbfn(arr[i], i));
  }
  //5. me return hasil jadi
  return hasil;
}
console.log(duplicateMap(array, callback));
console.log(duplicateMap(arrayString, list));

//PSEUDOCODE DUPLICATE FILTER
//TITLE:function yang menduplikasi cara kerja FILTER
let genap = (value, i) => {
  return value % 2 == 0;
};
function duplicateFilter(arr, cbfn) {
  //PROSES:
  //1. membuat sebuah variabel yang akan menampung hasil akhir berupa ARRAY, dan variabel penampung sementara (ARRAY juga)
  let hasilAkhir = [];
  //2. memproses tiap data dengan FOR
  for (i = 0; i < arr.length; i++) {
    //3. bila cbfn = TRUE; memproses setiap data pada arr ke dalam cbfn menggunakan FOR LOOP
    if (cbfn(arr[i])) {
      hasilAkhir.push(arr[i]);
    }
  }
  //4. me return hasil akhir
  return hasilAkhir;
}
console.log(duplicateFilter(array, genap));
// //PSEUDOCODE DUPLICATE FIND INDEX OF
// //TITLE:function yang menduplikasi cara kerja INDEXOF
// function duplicateFindIndexOf(arr, cbfn) {
//   //1. membuat sebuah variabel yang akan menampung hasil akhir berupa ARRAY, dan variabel penampung sementara (ARRAY juga)
//   let hasilAkhir = [];
//   let hasilCBFN = [];
//   //2. memastikan adanya CALLBACK FUNCTION sebagai INPUT
//   if (cbfn) {
//     //3. bila cbfn = TRUE; memproses setiap data pada arr ke dalam cbfn menggunakan FOR LOOP
//     for (i = 0; i < arr.length; i++) {
//       hasilCBFN.push(cbfn(arr[i]));
//     }
//     //4. bila cbfn = FALSE; masuk ke ELSE memasukan arr kedalam variabel penampung
//   } else {
//     hasilCBFN = arr;
//   }
//   //5. PROSES INDEXOF dimulai dengan membuat FOR LOOP untuk mengkases setiap data
//   for (i = 0; i < hasilCBFN.length; i++) {
//     //6. menggunakan IF statement untuk mengetahui apakah condition bersifat TRUE
//     if (hasilCBFN[i] > 5) {
//       //7. bila bersifat TRUE, menaruh index pada hasil akhir dan BREAK untuk menghentikan proses pencarian
//       hasilAkhir = i;
//       break;
//     }
//   }
//   //7. me return hasil akhir
//   return hasilAkhir;
// }
// console.log(duplicateFindIndexOf(array, callback));
