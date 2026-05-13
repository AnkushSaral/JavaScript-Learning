//----------------------------------------------------------------
//JSON format

let profile = {
    fname : "Ankush",
    lname : "Saral",
    age : 23,
    residency : "Indian",
};


console.log(profile, typeof profile);

//Converting JS object to JSON format
let profileString = JSON.stringify(profile);
console.log(profileString, typeof profileString);

//Converting JSON format to JS object
let profileObject= JSON.parse(profileString);
console.log(profileObject, typeof profileObject);

//--------------------------------------------------------------------

//Local Storage

//Inserting key-value in the local storage
localStorage.setItem("Hobby", "Reading");
localStorage.setItem("Role", "Actor");

//Upating key-value in the  local storage
localStorage.setItem("Hobby", "Games Playing");

//Fetching key-value from local storage
let hobby = localStorage.getItem("Hobby");
let role = localStorage.getItem("Role");

console.log(hobby, role);

// More Local Storage Functions
// localStorage.clear(); //Clear the local storage
// localStorage.removeItem("Hobby"); //Remover the item from local storage
// console.log(localStorage.getItem("Hobby")); //Will Give null

//--------------------------------------------------------------------

// Inserting object in the local storage

localStorage.setItem("Profile", JSON.stringify(profile)); //Insert JSON format of JS object otherwise throw error



//--------------------------------------------------------------------
//Date

let date = new Date; //Creating date new object
console.log(date); //output Wed Mar 04 2026 13:40:30 GMT+0530 (India Standard Time)
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getTime());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());



//--------------------------------------------------------------------
//DOM
// console.log(document.title);
// document.getElementById()
// document.getElementsByClassName()
// document.appendChild()