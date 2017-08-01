\c grocery_store

COPY items (name, price, section)
FROM '/Users/DangerMaus/LearnersGuild/phase-3-challenge/part-2/grocery.csv' DELIMITER ',' CSV HEADER;

INSERT INTO shoppers (name)
  VALUES ('Jane Doe'), ('John Smith'), ('Abe Simson'), ('Bernie Sanders'), ('Mohammed Ali');

INSERT INTO orders (shopper_id)
  VALUES (3), (4), (4), (5), (1);

INSERT INTO order_items (order_id, item_id)
  VALUES (1,3), (1,5), (2,7), (2,11), (3,13), (3,17), (3,19), (4, 29), (5,31);
