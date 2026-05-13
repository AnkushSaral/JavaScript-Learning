// Function have parameters, if we set default value of parameter like below name = "dear" then if we dont pass argument it will take dear as default value, otherwise if we passed argument then it will overwrite the value.

// function greet (name = "dear"){
//     console.log(`Good to see you ${name}`)
// }

// greet("Ankush Saral");
// greet();




//----------------------------------------------------------------------------
//Arrow function without arguments
// let info = () => {
//     console.log("This is an arrow function")
// }
// info ();

//Arrow with arguments, here we set z's default value is 2, if we dont give the value of z then it will take 2 by default if we give then it will overwrite the value of z
// let sum = (x, y, z = 2) => {
//     return x+y+z;
// }
// console.log(sum(2,4))
// console.log(sum(2,4,5))


//Arrow function with array
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((value, index, array) => {
    console.log(value, index, array);
})