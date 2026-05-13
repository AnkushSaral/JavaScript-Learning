// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

const arrayMapping = async (array) => {
  let newArray = array.map((element) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(element * 2);
      }, 500);
    });
  });
  return newArray;
};
