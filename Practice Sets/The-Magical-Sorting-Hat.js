// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

const houses = {
  6: "Gryffindor", // length < 6
  8: "Hufflepuff", // length < 8
  12: "Ravenclaw", // length < 12
};

const sortHouses = (houses) => {
  let housesValues = []; // will store numeric keys (6, 8, 12)
  let tempHouses = {}; // new sorted object

  // extract keys and convert to numbers
  for (const key in houses) {
    housesValues.push(Number(key));
  }

  // sort keys numerically (ascending)
  housesValues.sort((a, b) => a - b);

  // rebuild object in sorted order
  housesValues.forEach((value) => {
    tempHouses[value] = houses[value];
  });
  return tempHouses; // return sorted house mapping
};

let magicalHat = (students, houses) => {
  let studentHouses = []; // final result array
  let sortedHouses = sortHouses(houses); // get sorted limits

  // iterate over each student
  students.forEach((student) => {
    // check against each limit (6, 8, 12)
    for (const value in sortedHouses) {
      let limit = Number(value); // numeric limit
      let houseValue = sortedHouses[value]; // corresponding house(s)

      // if houseValue is NOT an array → direct assignment
      if (student.length < limit && Array.isArray(houseValue) == false) {
        studentHouses.push([student, houseValue]); // assign house
        break; // stop checking further limits
      }

      // if houseValue is an array → pick random house
      else if (student.length < limit && Array.isArray(houseValue) == true) {
        let randomHouse =
          houseValue[Math.floor(Math.random() * houseValue.length)]; // random index
        studentHouses.push([student, randomHouse]); // assign random house
        break; // stop checking further limits
      } else if (student.length >= 12){                    //Special Case
        studentHouses.push([student, "Slytherin"]);
        break;
      }
    }
  });

  return studentHouses; // return final assignments
};

//Testing the function
console.log(
  magicalHat(
    [
      "Ankush",
      "Saral",
      "Super",
      "Hii",
      "AnkushIsgo",
      "HAnkushIshe",
      "AnkushIshel",
      "AnkushIsHero",
      "AnkushIsHeroHai",
    ],
    houses,
  ),
);
