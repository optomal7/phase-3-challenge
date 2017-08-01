DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store

DROP TABLE IF EXISTS shoppers;
CREATE TABLE shoppers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(80) NOT NULL
);

DROP TABLE IF EXISTS items;
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(80),
  price DECIMAL NOT NULL,
  section VARCHAR(80)
);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  shopper_id INTEGER,
  FOREIGN KEY (shopper_id) REFERENCES shoppers (id)
);

DROP TABLE IF EXISTS order_items;
CREATE TABLE order_items (
  order_id INTEGER,
  item_id INTEGER,
  quantity INTEGER DEFAULT 1,
  FOREIGN KEY (order_id) REFERENCES orders (id),
  FOREIGN KEY (item_id) REFERENCES items (id)
);
