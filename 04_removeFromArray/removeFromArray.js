const removeFromArray = function (array, ...arrayVar) {
  //Loop to iterate through user array
  outer: for (let i = 0; i < array.length; i++) {
    //Loop to iterate through array with values to remove
    for (let j = 0; j < arrayVar.length; j++) {
      if (array[i] === arrayVar[j]) {
        console.log("Before Splice: " + array);
        array.splice(i, 1);
        i = i - 1;
        console.log("After Splice: " + array);
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
