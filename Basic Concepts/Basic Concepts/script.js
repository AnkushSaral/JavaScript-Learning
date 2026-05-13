// Number with numbers
let number1 = 75;
let number2 = 25;
let sum = number1 + number2;
console.log(sum)

//String with strings
let firstName = 'Ankush';
let lastName = 'Saral';
let fullName = firstName + ' ' + lastName;
let fullNameAgain = `${firstName} ${lastName}`;
console.log(fullName, fullNameAgain)


// Number with strings
console.log("Ankush got " + 100 + " marks out of 100.")

let num = 100;
let str = "I got ";
let message = str + num;
console.log(num, typeof(num))
console.log(str, typeof(str))
console.log(message, typeof(message))


// Updating the variable
let moneyIHave = 50;
let takenFromfriend = 10;
let totalMoney = moneyIHave + takenFromfriend;
console.log(totalMoney); //60
totalMoney += takenFromfriend; //totalMoney = totalMoney + takenFromFriend;
console.log(totalMoney); //70
totalMoney -= takenFromfriend; //totalMoney = totalMoney - takenFromFriend;
console.log(totalMoney);//60
totalMoney *= takenFromfriend; //totalMoney = totalMoney * takenFromFriend;
console.log(totalMoney);//600
totalMoney /= takenFromfriend; //totalMoney = totalMoney / takenFromFriend;
console.log(totalMoney);//60
totalMoney %= takenFromfriend; //totalMoney = totalMoney % takenFromFriend;
console.log(totalMoney);//0
totalMoney++; //totalMoney = totalMoney + 1;
console.log(totalMoney);//1

