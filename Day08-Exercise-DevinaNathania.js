let data = [
  {
    name: "Avanza",
    brand: "Toyota",
    machine: "DOHC",
    cc: 1500,
  },
  {
    name: "Supra",
    brand: "Toyota",
    machine: "V8",
    cc: 5000,
  },
  {
    name: "Ertiga",
    brand: "Suzuki",
    machine: "DOHC",
    cc: 1550,
  },
];

function print(arr, cbfn) {
  let hasil = "";
  if (cbfn) {
    for (i = 0; i < arr.length; i++) {
      if (cbfn(arr[i])) {
        hasil += `${i + 1}. ${arr[i].brand} ${arr[i].name} with ${
          arr[i].machine
        } ${arr[i].cc.toLocaleString()}\n`;
        return hasil;
      }
    }
  } else {
    for (i = 0; i < arr.length; i++) {
      hasil += `${i + 1}. ${arr[i].brand} ${arr[i].name} with ${
        arr[i].machine
      } ${arr[i].cc.toLocaleString()}\n`;
    }
    return hasil;
  }
}

function namaMobil() {
  return (obj) => obj.name == "Supra";
}
console.log(print(data));
