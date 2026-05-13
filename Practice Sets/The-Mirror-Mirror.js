// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let mirrorTheString = (string)=> {
    let ogString = string;
    let reversedString = "";
    for (let index = string.length-1; index >=0 ; index--) {
        reversedString += ogString.charAt(index); 
    }
    ogString += reversedString;
    return ogString;
}

console.log(mirrorTheString("Ankush Saral"));