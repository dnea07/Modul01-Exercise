//create function to convert excel column title
function letterValue(str) {
  let strg = str.toLowerCase();
  let hasil;
  let num = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  if (strg.length == 1) {
    return num[strg];
  } else {
    let arrayLetter = strg.split("").map(letterValue);
    hasil = arrayLetter[0] * 26 + arrayLetter[1];
    // for (i = arrayLetter.length; i > 1; i--) {
    //   hasil += arrayLetter[i] * 26 * i;
    // }
    return hasil;
  }
}

// console.log(letterValue("cf"));

//find single integer between pairs
let nums = [2, 2, 7, 5, 6, 5, 6, 7, 3, 4];
function searchSingle(array) {
  let hasil = "";
  for (i = 0; i < array.length; i++) {
    let k = 0;
    for (j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        k++;
      }
    }
    if (!(k > 1)) {
      hasil += `${array[i]} `;
    }
  }
  return hasil;
}

// console.log(searchSingle(nums));

// anagram
function anagrams(stringA, stringB) {
  stringA = stringA.replace(" ", "").toLowerCase();
  stringB = stringB.replace(" ", "").toLowerCase();

  let charMapA = getCharMap(stringA);
  let charMapB = getCharMap(stringB);

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }

  return true;
}

function getCharMap(string) {
  let charMap = {};

  for (let char of string) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

// console.log(anagrams("racun", "curan"));

//tangga

function findStep(n) {
  if (n == 0) {
    return 1;
  } else if (n < 0) {
    return 0;
  } else {
    return findStep(n - 2) + findStep(n - 1);
  }
}

console.log(findStep(6));
