// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

const filterProducts = (products, minPrice, maxPrice) => {
  return products.filter((product) => {
    return product.price >= minPrice && product.price <= maxPrice;
  });
};

let products = [
  { product_name: "Bat", price: 1000 },
  { product_name: "Ball", price: 100 },
  { product_name: "TV", price: 6000 },
  { product_name: "Mobile", price: 10000 },
  { product_name: "Remote", price: 50 },
  { product_name: "Car", price: 1200000 },
  { product_name: "Cycle", price: 5000 },
  { product_name: "Bottle", price: 150 },
];

console.log(filterProducts(products, 1000, 10000));
