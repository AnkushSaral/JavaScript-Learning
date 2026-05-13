// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

const vowelCounter = (str) => {
  let strLowerCase = str.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  for (const vowel of vowels) {
    for (const char of strLowerCase) {
      if (char == vowel) {
        vowelCount++;
      }
    }
  }

  return vowelCount;
};

console.log(vowelCounter("aeiouhelloaeiou"));
