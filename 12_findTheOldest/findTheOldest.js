const findTheOldest = function (obj) {
  //Present year
  let presentYear = new Date().getFullYear();
  // If there is no yearOfDeath the person yearOfDeath is equal to presentYear
  obj.map((item) =>
    item.yearOfDeath === undefined
      ? (item.yearOfDeath = presentYear)
      : item.yearOfDeath
  );

  //Search oldest person in the object
  const oldest = obj.reduce(
    (oldest, item) =>
      oldest < item.yearOfDeath - item.yearOfBirth
        ? (oldest = item.yearOfDeath - item.yearOfBirth)
        : oldest,
    0
  );

  //Use the filter method to search for the oldest person's object
  return obj.filter(
    (item) => item.yearOfDeath - item.yearOfBirth === oldest
  )[0]; //Return an object without an array
};

// Do not edit below this line
module.exports = findTheOldest;
