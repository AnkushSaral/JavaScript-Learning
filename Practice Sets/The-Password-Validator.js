// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

let pwValidator = (password) => {
  let minLength = 8;
  let minLengthOk = true;
  let containsUppercase = false;
  let containsLowercase = false;
  let containsDigit = false;

  if (password.length < minLength) {
    minLengthOk = false;
  } else {
    for (let index = 0; index < password.length; index++) {
      if (
        password.charCodeAt(index) >= 65 &&
        password.charCodeAt(index) <= 90 &&
        containsUppercase == false
      ) {
        containsUppercase = true;
      }
      if (
        password.charCodeAt(index) >= 97 &&
        password.charCodeAt(index) <= 122 &&
        containsLowercase == false
      ) {
        containsLowercase = true;
      }
      if (
        password.charCodeAt(index) >= 48 &&
        password.charCodeAt(index) <= 57 &&
        containsDigit == false
      ) {
        containsDigit = true;
      }
    }
  }

  if (
    minLengthOk == true &&
    containsUppercase == true &&
    containsLowercase == true &&
    containsDigit == true
  ) {
    return true;
  }
  return false;
};






console.log(pwValidator("Hii12345678"));
