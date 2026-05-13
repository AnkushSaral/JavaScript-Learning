let person = {
    name: "Ankush Saral",
    height: 5.4,
    'other Name': "Prince", 
};

//Printing the object
console.log(person)


//Accessing the object values
// There are 2 ways to access the values first is using '.' operator and second is using '[]'.
console.log(person.name)
console.log(person["name"])
// console.log(person.other Name) //This will throw the error because other Name is not a valid variable name so we used "" for key in the object and while using . operator it is not allowing to access.
console.log(person["other Name"]) //This is valid because we are accessing it via []

//Adding a new key-value pair
person.hobby = {"Reading" : "Books", Playing : "Games"};
person["passion"] =  ["Computer Sceintist", "Web Development"];
console.log(person)


// Deleting the Element
delete person.name
delete person["height"]


console.log(person)


