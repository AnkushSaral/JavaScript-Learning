// Creating an array
let details = ["Ankush Saral", 24, "Engineer", true];
// Indexes will be    0         1       2        3

//Priting the array and its type
console.log(details, typeof details);

//Checking given object array or not
console.log(Array.isArray(details)); //true or false -> true


//Accessing the elements by their respective indexes
console.log(details[1]);
console.log(details[3]);
console.log(details[4]);   //Undefined
console.log(details[0]);
console.log(details[5]);   //Undefined

//Changing the value at some index of an array
details[0] = 256;
console.log(details);


//Array properties
console.log(details.length); //Number of elements/ length of an array -> 4


//Array methods

//Push method will add the element at the end of the array
details.push({"Hobbies" : ["Reading", "Gaming"]});
console.log(details);

//Pop method will remove the last element of the array and fetch it as well
let poppedElement = details.pop();
console.log(poppedElement);
console.log(details);

//Unshift method will add the element at the start of the array
details.unshift(6);
console.log(details);

//Shift method will remove the first element of the array and fetch it as well
let shiftedElement = details.shift();
console.log(shiftedElement);
console.log(details);

//Splice method will remove/delete elements between (from_index) and (to_index - 1)
let numbers = [5,3,6,8,1,0, 1000, 5000, 50];
console.log(numbers);
numbers.splice(0, 3) //It will remove the elements from index 0 to index 2 (3-1 = 2)
console.log(numbers);


//ToString mehod will convert the array into a string
let strNumbers = numbers.toString();  
console.log( strNumbers, typeof strNumbers);

//Sort method will sort the array based on their ascii character
let newArray = [1, 5, 0, 2, 20, -3];
console.log(newArray);
console.log(newArray.sort());

// Output:
// [1, 5, 0, 2, 20, -3]
// [-3, 0, 1, 2, 20, 5]

// Why this order?
// Elements are treated as strings:
// "-3", "0", "1", "2", "20", "5"
// Sorting happens character by character:
// "-3" comes first (- has lower ASCII)
// "20" comes before "5" because '2' < '5'

// Important note
// If you want numeric sorting, you must pass a comparator:
// newArray.sort((a, b) => a - b);
// Then output will be:
// [-3, 0, 1, 2, 5, 20]

//ValueOf returns same array nothing else
console.log(numbers.valueOf());

//Destructing also works for array
let arr = [100, 200, 50, 25];
let [val1, val2, val3, val4] = arr;
console.log(val1, val2, val3, val4); 