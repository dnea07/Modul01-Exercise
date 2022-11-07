//write a code to get difference between dates in days
const date = new Date();

let d1 = new Date("2022-10-09");
let d2 = new Date("2022-09-09");

let difference = d1.getTime() - d2.getTime();

let days = Math.ceil(difference / (1000 * 60 * 60 * 24));
console.log(
  `Jarak antara tanggal ${d1.toLocaleString()} dan ${d2.toLocaleString()} adalah ${days} hari`
);

//write a code to convert celsius to fahrenheit
// celsius to fahrenheit --> c(9/5)+32

let celsius = 25;
let fahrenheit = (celsius * 9) / 5 + 32;

console.log(
  `${celsius} derajat celsius adalah ${fahrenheit} derajat fahrenheit`
);

//write a code to check wether the number is odd or even

let number = 5;
let sisa = number % 2;
if ((sisa = 0)) {
  console.log(`${number} adalah bilangan GENAP`);
} else {
  console.log(`${number} adalah bilangan GANJIL`);
}

//write a code to check wether the number is prime number or not
//prime number adalah bilangan bulat positif yang hanya bisa dibagi bilangan satu dan bilangan itu sendiri

let prime = 0;

for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    prime++;
  }
}

if (prime == 2) {
  console.log(`${number} adalah bilangan prima`);
} else {
  console.log(`${number} bukanlah bilangan prima`);
}

//write a code to find the sum of the numbers 1 to N

let jumlahTotal = 0;

for (let i = 1; i <= number; i++) {
  jumlahTotal += i;
}

console.log(`Jumlah total dari angka 1 sampai ${number} adalah ${jumlahTotal}`);

//write a code to find factorial of a number
//faktorial adalah produk dari semua bilangan bulat positif kurang dari atau sama denganbilangan bulat positif yang dilambangkan tanda seru

// n! = n x (n-1) x (n-2) x ... x 1

let faktor = 1;

for (i = number; i >= 1; i--) {
  faktor = faktor * i;
}

console.log(`Faktorial dari ${number} adalah ${faktor}`);

//write a code to print the first N fibonacci number
//Fibonacci sequence adalah deret angka yang diperoleh dengan menjumlahkan dua angka sebelumnya

let num1 = 0;
let num2 = 1;
let sum;

console.log(`Berikut adalah ${number} angka pertama dari Fibonacci Sequence`);

if (number >= 1) {
  console.log(0);
}

if (number >= 2) {
  console.log(1);
}

for (i = 2; i < number; i++) {
  sum = num1 + num2;
  console.log(sum);
  num1 = num2;
  num2 = sum;
}
