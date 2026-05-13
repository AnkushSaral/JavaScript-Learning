// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

const placeOrder = (item) => {
  return new Promise((resolve, reject) => {
    let randomDelay = Math.random() * 5 * 1000;
    setTimeout(() => {
      resolve(`Your order of ${item} is placed successfully.`);
    }, randomDelay);
  });
};

async function main() {
  let placingOrder = await placeOrder("Football");
  console.log(placingOrder);
}

main();
