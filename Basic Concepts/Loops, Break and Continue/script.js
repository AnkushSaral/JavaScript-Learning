// There are 5 types of loops in JS

let name = "Ankush Saral";
let array = [1, 3, 4];

//----------------------------------------------------------
// 1. For Loop Classic
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }

// for (let index = 0; index < name.length; index++) {
//     console.log(name[index]);
// }


//----------------------------------------------------------
// 2. For In loop, used for objects (dictionaries)
// let obj = {
//     name : "Ankush Saral",
//     age : "23",
//     work : "Student"
// }
// for (const key in obj) {
//     const element = obj[key];
//     console.log(key, element);
// }

//----------------------------------------------------------
// 3. For Of loop
// for (const alphabet of name) {
//     console.log(alphabet);
// }
// for (const num of array) {
//     console.log(num);
// }

//----------------------------------------------------------
// 4. Foe Each loop, work with array not string
// array.forEach(num => {
//   console.log(num);
// });


//----------------------------------------------------------
// While is a classic loop structure is different but approach is same as classic for loop
// index = 0;
// while (index < array.length) {
//     console.log(array[index])
//     index++;
// }

// while (index < name.length) {
//     console.log(name[index])
//     index++;
// }



//----------------------------------------------------------
// Do While lop runs atleast once. Doesn't matter condition is false or true, if true then it will continue otherwise stops. But runs at least once in the start
// let num = 5;
// do {
//     console.log(num);
// } while (num > 6);






//Break is used to break loop based on given condition

//Finding number in an array
let arr = [1, 5, 6, 8, -23, 5, 10];
let findNumber = 8;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == findNumber) {
    console.log(`The ${findNumber} is present at index ${i}`);
    break;
  }
}


//Continue is used to skip that iteration based on given condition

//Printing the names but skip a given name specifically
let marvelSuperHeros = ["Hulk", "Starlord", "Superman", "SpiderMan"];
let nonMarvelHero = "Superman";
for (let i = 0; i < marvelSuperHeros.length; i++) {
  if (marvelSuperHeros[i] == nonMarvelHero) {
    continue;
  }
  console.log(marvelSuperHeros[i]);
}
