// Creating a String
let realName = "Ankush Saral";

//Priting the String and its type
console.log(realName, typeof realName);


//Accessing the elements by their respective indexes
console.log(realName[0]);
console.log(realName[1]);
console.log(realName[2]);
console.log(realName[3]);
console.log(realName[4]);  
console.log(realName[5]);  
console.log(realName[6]);  
console.log(realName[7]);  
console.log(realName[8]);  
console.log(realName[9]);  
console.log(realName[10]);  
console.log(realName[11]);  
console.log(realName[12]);  

// Template Literals
console.log(`My realName is ${realName}`);

//String properties
console.log(realName.length); //Number of elements/ length of a string

//String methods
console.log(realName.toUpperCase);
console.log(realName.toLowerCase);
console.log(realName.replaceAll("a", "k"));

//Slicing of a string, slice will return the copy of the same string
let nameAgain = "Ankush Saral";
let shortName = nameAgain.slice(1,7); //1 included and 7 is not
console.log(shortName);
shortName = nameAgain.slice(1); //1 to all characters
console.log(shortName);

//Concatination of strings
let fName = "Peter";
let lName = "Parker";
let fullName = fName.concat(" ", lName) //We are adding space between names
console.log(fullName);
let fullNameAgain = fName + " " + lName; //It's another way to concatinate
console.log(fullNameAgain);

//Remove white spaces from an string
let whiteSpaceName = "                    Hello    ";
console.log(whiteSpaceName.trim()); //white spaces removed

//Finding the index in string
console.log(fName.indexOf("er")); //Returns 3
console.log(fName.indexOf("kk")); //Returns -1 if not found

//Checking whether string startswith or endswith certain characters
console.log(fName.startsWith("Pe")); //Returns true
console.log(fName.startsWith("kk")); //Returns false
console.log(fName.endsWith("er")); //Returns true
console.log(fName.endsWith("kk")); //Returns fasle


