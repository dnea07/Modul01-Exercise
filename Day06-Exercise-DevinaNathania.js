//create a function to calculate array of student data
//parameter: array of student
class Student {
  constructor(nama, email, dob, nilai) {
    (this.name = nama),
      (this.email = email),
      (this.age = Math.floor(
        (new Date() - new Date(dob)) / (1000 * 60 * 60 * 24 * 365)
      ));
    this.score = nilai;
  }
}

function studentInsert(array) {
  let studentData = [];
  for (i = 0; i < array.length; i++) {
    let input = new Student(array[i][0], array[i][1], array[i][2], array[i][3]);
    studentData.push(input);
  }
  return studentData;
}

let studentArray = [
  ["Budi", "budi@gmail.com", "1987-09-09", 6],
  ["Andi", "andi@gmail.com", "1999-10-02", 7],
  ["Aldi", "aldi@gmail.com", "2005-05-07", 5],
  ["Imma", "imma@gmail.com", "2018-01-03", 6],
];

let studentData = studentInsert(studentArray);

let studentSorter = (array) => {
  class Value {
    constructor(highest, lowest, average) {
      (this.highest = highest),
        (this.lowest = lowest),
        (this.average = average);
    }
  }

  let highScore = array[0];
  let lowScore = array[0];
  for (i = 1; i < array.length; i++) {
    if (highScore.score < array[i].score) {
      highScore = array[i];
    } else if (lowScore.score > array[i].score) {
      lowScore = array[i];
    }
  }
  let totalScore = 0;
  for (i = 0; i < array.length; i++) {
    totalScore += array[i].score;
  }
  let avgScore = totalScore / array.length;
  ////////////////////////////////////////////////////////////////////////////////////

  let highAge = array[0];
  let lowAge = array[0];
  for (i = 1; i < array.length; i++) {
    if (highAge.age < array[i].age) {
      highAge = array[i];
    } else if (lowAge.age > array[i].age) {
      lowAge = array[i];
    }
  }
  let totalAge = 0;
  for (i = 0; i < array.length; i++) {
    totalAge += array[i].age;
  }
  let avgAge = totalAge / array.length;

  let score = new Value(highScore, lowScore, avgScore);
  let age = new Value(highAge, lowAge, avgAge);
  let hasil = { nilai: score, umur: age };

  return hasil;
};
console.log(studentSorter(studentData));

//create a program to create transaction
class Product {
  constructor(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
  }
}

class Transaction extends Product {
  total = 0;
  cart = [];
  addToCart(product) {
    this.cart.push(product);
  }
  showCart() {
    let output = "Keranjang anda:\n\n";
    let totalPrice = 0;
    for (i = 0; i < this.cart.length; i++) {
      output += `Nama produk: ${this.cart[i].name}\nHarga produk: Rp ${this.cart[i].price}\nJumlah Produk: ${this.cart[i].qty}\n`;
      totalPrice += this.cart[i].price * this.cart[i].qty;
    }
    output += `\nTotal biaya: Rp${totalPrice}\n`;
    console.log(output);
  }
  checkOut() {
    let bill = "Tagihan:\n\n";
    for (i = 0; i < this.cart.length; i++) {
      bill += `Nama produk: ${this.cart[i].name}\nRp${this.cart[i].price} x ${
        this.cart[i].qty
      } item = Rp${this.cart[i].price * this.cart[i].qty}\n`;
      this.total += this.cart[i].price * this.cart[i].qty;
    }
    bill += `\nTotal biaya: Rp${this.total}\n`;
    console.log(bill);
    this.total = 0;
    this.removeCart();
  }
  removeCart() {
    this.cart = [];
  }
}

let belanja = new Transaction();
belanja.addToCart(new Product("Apel", 5000, 2));
belanja.addToCart(new Product("Jeruk", 3000, 5));
belanja.addToCart(new Product("Stroberi", 2000, 12));
belanja.showCart();
belanja.checkOut();
belanja.showCart();
