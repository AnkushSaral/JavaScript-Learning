// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let doubleTheElement = (array) => {
  let doubledElements = [];
  let isConsecutiveElement = false;
  let isConsecutiveElementFirst = false;
  for (let index = 0; index < array.length; index++) {
    if (array[index] != array[index + 1] && array[index] != array[index - 1]) {
      doubledElements.push(array[index] * 2);
      isConsecutiveElement = false;
      isConsecutiveElementFirst = false;
    } else {
      isConsecutiveElement = true;
      if (
        array[index] != array[index - 1] &&
        array[index] == array[index + 1]
      ) {
        isConsecutiveElementFirst = true;
      } else {
        isConsecutiveElementFirst = false;
      }

      if (isConsecutiveElement == true && isConsecutiveElementFirst == true) {
        doubledElements.push(array[index] * 2);
      } else if (
        isConsecutiveElement == true &&
        isConsecutiveElementFirst == false
      ) {
        doubledElements.push(array[index]);
      }
    }
  }

  return doubledElements;
};

console.log(doubleTheElement([1, 3, 4, 4, 4, 4, 5, 1, 1, 2, 3, 3]));
