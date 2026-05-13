// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

const brewCoffee = (typeOfCoffee) => {
  return new Promise((resolve, reject) => {
    let randomDelay = Math.random() * 5 * 1000;
    setTimeout(() => {
      resolve(`Your ${typeOfCoffee} is ready.`);
    }, randomDelay);
  });
};

async function main() {
  let brewingCoffee = await brewCoffee("Cappuccino");
  console.log(brewingCoffee);
}

main();
