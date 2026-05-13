function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.round(Math.random() * (max - min + 1)) + min;
}

function getRandomChoice(choice1, choice2, choice3) {
  let randNum = getRandomInt(1, 3);
  if (randNum == 1) {
    return choice1;
  } else if (randNum == 2) {
    return choice2;
  } else {
    return choice3;
  }
}

function generateBusinessName() {
  //Get random Adjective
  let adjective = getRandomChoice("Crazy", "Amazing", "Fire");

  //Get random Shop Name
  let shopName = getRandomChoice("Engine", "Foods", "Garments");

  //Get random Another Word
  let anotherWord = getRandomChoice("Bros", "Limited", "Hub");

  return `${adjective} ${shopName} ${anotherWord}`;
}

console.log(generateBusinessName());
