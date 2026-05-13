//This function will return true if given number is prime else return false
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    // If divisible, then num is not a prime number
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

//This function will return the prime numbers till given range number
function countPrimeNumbers(num) {
  let primeNumbers = [];

  for (let i = 2; i <= num; i++) {
    let isPrimeNumber = isPrime(i);
    if (isPrimeNumber) {
      primeNumbers.push(i);
    }
  }

  // Convert array of primes into comma-separated string
  return primeNumbers.toString();
}

// Execute function and print all prime numbers up to 20
console.log(countPrimeNumbers(1000));
