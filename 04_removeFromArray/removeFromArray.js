"use strict";
const removeFromArray = function (array, number) {
  let lenArray = array.length;
  for (let i = 0; i < lenArray; i++) {
    if (number === array[i]) {
      console.log(`Found!! It is ${array[i]}`);
      array.splice(i, 1);
      return array;
    }
  }
};
console.log(removeFromArray([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;
