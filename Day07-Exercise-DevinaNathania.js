//create a function to show if 2 objects are equal
let obj1 = {
  nama: "Budi",
  alamat: "jakarta",
  makan: "pisang",
  lahir: "bandung",
};
let obj2 = {
  nama: "Budi",
  lahir: "bandung",
  alamat: "jakarta",
  makan: "pisang",
};

function objCompare(obj1, obj2) {
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  if (key1.length !== key2.length) {
    return false;
  }
  for (let key of key1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
console.log(objCompare(obj1, obj2));
//create a function to get intersection of two objects
let o1 = { a: 1, b: 2 };
let o2 = { a: 1, c: 3, b: 2 };
function intersect(obj1, obj2) {
  let key1 = Object.keys(obj1);
  let hasil = {};
  for (let key of key1) {
    if (obj1[key] == obj2[key]) {
      hasil[key] = obj1[key];
    }
  }
  return hasil;
}

console.log(intersect(o1, o2));
//create a function to merge two array of student data(name and email) and remove duplicate data
let arrStudent1 = [
  { nama: "Budi", email: "budi@gmail.com" },
  { nama: "Imma", email: "imma@gmail.com" },
];
let arrStudent2 = [
  { nama: "Budi", email: "budi@gmail.com" },
  { nama: "Yanto", email: "yanto@gmail.com" },
  { nama: "Imma", email: "imma@gmail.com" },
];

function merge(arr1, arr2) {
  let hasil = [...arr1, ...arr2];
  for (i = 0; i < hasil.length; i++) {
    for (j = i + 1; j < hasil.length; j++) {
      if (
        hasil[i].nama === hasil[j].nama &&
        hasil[i].email === hasil[j].email
      ) {
        hasil.splice(j, 1);
      }
    }
  }
  return hasil;
}
console.log(merge(arrStudent1, arrStudent2));
//create a function that can accept input as an array of objects and switch all value to property and property into value
let arrObj = [
  { name: "David", age: 20 },
  { name: "budi", age: 15 },
];

function valToProp(array) {
  let hasil = [];
  let x;
  for (i = 0; i < array.length; i++) {
    for (let key in array[i]) {
      x = key;
      key = array[i][key];
      array[i][key] = x;
      delete array[i][x];
    }
    hasil.push(array[i]);
  }
  return hasil;
}

console.log(valToProp(arrObj));

//create a function to find a factorial number using recursion
function factorial(number) {
  if (number == 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(4));
