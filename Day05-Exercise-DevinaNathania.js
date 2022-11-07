//Write a function to get the lowest, highest, and average value in the array (with and without sort function)

//Write a function that takes an array of words and returns a string by concatenating the words in the array, seperated by commas and - the last word - by an and

//Write a function to split a string and convert it to array of words (tapi hrs masukin separator)
let pecah = (words, separator) => {
  let arr = [];
  let susun = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== separator) {
      susun += words[i];
    } else {
      if (susun) {
        // kalao misal hello hurup L nya dobel supaya ga masuk array kosong
        arr.push(susun);
        susun = "";
      }
    }
  }
  if (susun) {
    arr.push(susun);
  }
  return arr;
};

console.log(pecah("Hello World Welcome Home", "l"));
//Write a function to calculate each elemment in the same position from two arrays of integers
let arr1 = [1, 2, 3, 4, 5];

let arr2 = [4, 2, 7, 8, 9];

let calculate = (array1, array2) => {
  let hasilAkhir = [];
  let panjang = 0;
  let beda = Math.abs(array1.length - array2.length);
  if (array1.length == array2.length) {
    panjang = array2.length;
  } else if (array1.length > array2.length) {
    panjang = array2.length;
  } else {
    panjang = array1.length;
  }

  for (let i = 0; i < panjang; i++) {
    let hasil;
    hasil = array1[i] + array2[i];
    hasilAkhir.push(hasil);
  }
  if (beda !== 0) {
    if (array1.length > array2.length) {
      for (let i = panjang; i < panjang + beda; i++) {
        hasilAkhir.push(array1[i]);
      }
    } else {
      for (let i = panjang; i < panjang + beda; i++) {
        hasilAkhir.push(array2[i]);
      }
    }
  }

  return hasilAkhir;
};

console.log(calculate(arr1, arr2));
//write a function that adds an element to the end of an array. however the element should only be added if it is not already in the array
let element = ["o2", "Co2", "H"];

let masukFilter = (input) => {
  if (!element.includes(input)) {
    element.push(input);
  }
  return element;
};

console.log(masukFilter("h202"));
//write a function to remove all odd numbers in an array and return a new array that contains even numbers only
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
