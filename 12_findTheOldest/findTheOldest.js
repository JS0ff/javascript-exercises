const findTheOldest = function (obj) {
  //Present year
  let presentYear = new Date().getFullYear();
  // If there is no yearOfDeath the person yearOfDeath is equal to presentYear
  obj.map((item) =>
    item.yearOfDeath === undefined
      ? (item.yearOfDeath = presentYear)
      : item.yearOfDeath
  );
  const oldest = obj.reduce(
    (oldest, item) =>
      oldest < item.yearOfDeath - item.yearOfBirth
        ? (oldest = item.yearOfDeath - item.yearOfBirth)
        : oldest,
    0
  );
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
