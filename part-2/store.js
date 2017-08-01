#!/usr/local/bin/node

require('console.table');
const Groceries = require('./database.js')

const argument = process.argv[2];
const option = process.argv[3];

if (argument === "product-list") {
  Groceries.productSection(option)
    .then(console.table);
} else if (argument === "real-shoppers") {
  Groceries.realShoppers()
    .then(console.table);
} else if (argument === "shopper-orders") {
  Groceries.shopperOrder(option)
    .then(console.table);
} else {
  console.log("Invalid command, try again.");
}
