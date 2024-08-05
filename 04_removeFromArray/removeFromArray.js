"use strict";
const removeFromArray = function (array, first, second) {
  let lenArray = array.length;

  for (let i = 0; i < lenArray; i++) {
    if (second === array[i]) {
      console.log(`Found it! ${array[i]}`);
      array.splice(i, 1);
      console.log(array);
      // Checks if the next value in array has the same value
      if (second === array[i]) {
        array.splice(i, 1);
      }
    }
    // Copy of the above condition but for the first value in funciton
    if (first === array[i]) {
      console.log("Found it!!!", `${array[i]}`);
      array.splice(i, 1);
      if (first === array[i]) {
        array.splice(i, 1);
      }
    }
  }
  return array;
};
console.log(removeFromArray([1, 2, 2, 3], 2));
// Do not edit below this line
module.exports = removeFromArray;
