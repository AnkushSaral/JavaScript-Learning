let givenArray = [1, 2, 3, 4, 5];

//Map function calls a defined callback function on each element of an array, and returns an array that contains the results
let elementsSquare = givenArray.map((element) => {
  return element ** 2;
});

console.log(givenArray);
console.log(elementsSquare);

//Filter function returns the elements of an array that meet the condition specified in a callback function
let filteredArray = givenArray.filter((element) => {
  if (element > 3) return element;
});
console.log(givenArray);
console.log(filteredArray);

//Reduce function calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function
let reducedValue = givenArray.reduce((element1, element2) => {
  return element1 + element2;
});

console.log(givenArray);
console.log(reducedValue); // 1+2+3+4+5 = 15
