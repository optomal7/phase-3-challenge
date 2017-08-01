const pgp = require('pg-promise')();

const connectionString = 'postgres://localhost:5432/grocery_store';
const db = pgp(connectionString);

const Groceries = {
  productSection(section) {
    return db.any('SELECT name AS "Product Name", section AS "Section" FROM items WHERE section = $1', [section]);
  },

  realShoppers() {
    return db.any('SELECT shoppers.name, COUNT (orders.id) FROM orders, shoppers WHERE (shoppers.id = orders.shopper_id) GROUP BY shoppers.name');
  },

  shopperOrder(shopperID) {
    return db.any('SELECT order_items.order_id, SUM(items.price) FROM order_items INNER JOIN items ON (order_items.item_id = items.id) INNER JOIN orders ON (order_items.order_id = orders.id) WHERE (orders.shopper_id = $1) GROUP BY (order_items.order_id)', [shopperID])
  }
}

module.exports = Groceries;
