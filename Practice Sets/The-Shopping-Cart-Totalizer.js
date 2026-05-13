//The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

const calculateTotal = (products) => {
  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice += product.price * product.quantity;
  });
  return totalPrice;
};

let products = [
  {
    id: 1,
    name: "Laptop",
    price: 60000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Mouse",
    price: 500,
    quantity: 2,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 1500,
    quantity: 1,
  },
  {
    id: 4,
    name: "Headphones",
    price: 2000,
    quantity: 2,
  },
  {
    id: 5,
    name: "Monitor",
    price: 12000,
    quantity: 1,
  },
];

console.log(calculateTotal(products));
