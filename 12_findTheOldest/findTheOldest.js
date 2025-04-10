const findTheOldest = function (obj) {
  oldest = obj.reduce(
    (oldest, item) =>
      oldest < item.yearOfDeath - item.yearOfBirth
        ? (oldest = item.yearOfDeath - item.yearOfBirth)
        : oldest,
    0
  );
  return obj.filter(
    (item) => item.yearOfDeath - item.yearOfBirth === oldest
  )[0];
};

// Do not edit below this line
module.exports = findTheOldest;
