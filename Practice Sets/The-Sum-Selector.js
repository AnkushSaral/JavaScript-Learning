// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let sumSelector = (array) => {
  let sum = 0;
  array.some((value) => {
    if (value < 0) {
      return true;
    } else {
      sum += value;
      return false;
    }
  });

  return sum;
};

console.log(sumSelector([1, 5, 10, 50, 4, -2, 10, -4]));
