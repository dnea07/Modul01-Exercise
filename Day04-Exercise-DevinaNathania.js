//create triangle pattern HARUS ADA ANGKA 0 DIDEPAN
let segitiga = (height) => {
  let print = "";
  let angkaBelakang = 1;
  let angkaDepan = 0;
  for (i = 0; i <= height; i++) {
    for (j = 0; j < i; j++) {
      print += `${angkaDepan}${angkaBelakang} `;
      angkaBelakang++;
      if (angkaBelakang == 10) {
        angkaBelakang = 0;
        angkaDepan++;
      }
    }
    print += `\n`;
  }
  return print;
};
console.log(segitiga(5));

//fizz buzz looping
let fizzbuzz = (number) => {
  let cetak = "";
  for (let i = 1; i <= number; i++) {
    if (i % 15 == 0) {
      cetak += `${i} => FizzBuzz\n`;
    } else if (i % 3 == 0) {
      cetak += `${i} => Fizz\n`;
    } else if (i % 5 == 0) {
      cetak += `${i} => Buzz\n`;
    } else {
      cetak += `${i}\n`;
    }
  }
  return cetak;
};
console.log(fizzbuzz(30));

//BMI
let bmi = (weight, height) => {
  index = weight / (height * height);
  let hasil = "bmi anda ";
  if (0 < index < 18.5) {
    hasil += "less weight";
  } else if (18.5 <= index <= 24.9) {
    hasil += "ideal";
  } else if (25.0 <= index <= 29.9) {
    hasil += "overweight";
  } else if (30.0 <= index <= 39.9) {
    hasil += "very overweight";
  } else {
    hasil += "obesity";
  }
  return hasil;
};
console.log(bmi(50, 150));

//even number only
numbers = [12, 35, 47, 65, 89, 70, 45, 64, 32];
let evenOnly = (numberArray) => {
  let hasilJadi = [];
  for (i = 0; i < numberArray.length; i++) {
    let sisa = numberArray[i] % 2;
    if (sisa == 0) {
      hasilJadi.push(numberArray[i]);
    } else {
    }
  }
  return hasilJadi;
};
console.log(evenOnly(numbers));

//split a string to array JANGAN PAKE SPLIT
let pecah = (words) => {
  let arr = [];
  let susun = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== " ") {
      susun += words[i];
    } else {
      arr.push(susun);
      susun = "";
    }
  }
  if (susun) {
    arr.push(susun);
  }
  return arr;
};

console.log(pecah("Hello World Welcome Home"));
