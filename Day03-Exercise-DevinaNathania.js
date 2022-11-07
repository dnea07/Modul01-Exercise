//kalo bs bagi 3, bizz, kalo bs bagi 5 buzz, kalo bs both ya both. sisanya gausa

let number = 5;

for (let i = 1; i <= number; i++) {
  if (i % 15 == 0) {
    console.log(`${i} => BizzBuzz`);
  } else if (i % 3 == 0) {
    console.log(`${i} => Bizz`);
  } else if (i % 5 == 0) {
    console.log(`${i} => Buzz`);
  } else {
  }
}

//write a code to display the multiplication table of a given integer(integer = bilangan bulat)

let angka = 5;

console.log(`Number --> ${angka}`);
for (let i = 1; i <= 10; i++) {
  let hasil = angka * i;
  console.log(`${angka} x ${i} = ${hasil}`);
}

//write a code to check wether a string is a palindrome or not
//palindrome =  kalo dibalik dibacanya tetap sama
let kataBesar = "Joget";

let kata = kataBesar.toLowerCase();

let len = kata.length;
let value = 0;

for (let i = 0; i < len / 2; i++) {
  if (kata[i] !== kata[len - 1 - i]) {
    value++;
  }
}
if (value == 0) {
  console.log(`${kataBesar} adalah sebuah palindrome`);
} else {
  console.log(`${kataBesar} bukanlah sebuah palindrome`);
}
//write a code to convert centimeter to kilometer

let length = 25790943;

let kilometer = length / 100000;

console.log(`${length} cm adalah ${kilometer} km`);

//write a code to format number as currency(idr)

let uang = 200000000;
console.log(`Rp. ${uang.toLocaleString("id")},00`);

//write a code to remove the first occurrence of a given "search string" from a string
let kalimat = "Hello World";
let cari = "ell";

let indexCari = kalimat.indexOf(cari);

if (indexCari === -1) {
  console.log(kalimat);
} else {
  console.log(
    kalimat.slice(0, indexCari) + kalimat.slice(indexCari + cari.length)
  );
}
//write a code to capitalize the first letter of each word in a string

let words = "halo apa kabar";
let arr = words.split(" ");

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

let words2 = arr.join(" ");

console.log(words2);

//write a code to reverse a string

let reverse = "apa kabar";
let newWord = "";

for (let i = reverse.length - 1; i >= 0; i--) {
  newWord += reverse[i];
}

console.log(newWord);

//mencari huruf vokal dan konsonan pada sebuah kata

let sentence = "Hello World";

let sentenceKecil = sentence.toLowerCase();

let vokal = "";
let konsonan = "";

let hurufVokal = "aeiou";
let hurufKonsonan = "bcdfghjklmnpqrstvwxyz";

for (i = 0; i < hurufVokal.length; i++) {
  if (sentenceKecil.includes(hurufVokal[i])) {
    vokal += hurufVokal[i];
  }
}

for (i = 0; i < hurufKonsonan.length; i++) {
  if (sentenceKecil.includes(hurufKonsonan[i])) {
    konsonan += hurufKonsonan[i];
  }
}

console.log(`Kalimat : ${sentence}`);
console.log(`vokal : ${vokal}`);
console.log(`konsonan : ${konsonan}`);
