"use strict";
const removeFromArray = function (array, ...numbers) {
  // const newArray = [];
  // array.forEach((item) => {
  //   if (!numbers.includes(item)) {  <----- More easier
  //     newArray.push(item);
  //   }
  // });
  // return newArray;

  let lenArray = array.length;

  numbers = numbers.sort((a, b) => a - b); // Sorts values inside numbers from low to higher values
  console.log(numbers);

  for (let i = 0; i < lenArray; i++) {
    for (let j = 0; j <= array[i]; j++) {
      if (array[0] === numbers[0]) {
        array.splice(0, 1);
      }
      if (array[i] === numbers[j]) {
        array.splice(i, 1);
        if (array[i] === numbers[j]) {
          array.splice(i, 1);
        }
      }
    }
  }
  return array;
};

console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3));
// Do not edit below this line
module.exports = removeFromArray;
