-- database/seed.sql

USE smart_agriculture;

INSERT INTO soil_data (ph, moisture, temperature, nitrogen, phosphorus, potassium)
VALUES
(6.7, 45, 28, 60, 40, 35),
(7.1, 38, 30, 55, 35, 30);

INSERT INTO marketplace (crop, quantity, price, contact)
VALUES
("Wheat", "25 Quintals", "₹2300 / Quintal", "9876543210"),
("Rice", "40 Quintals", "₹2100 / Quintal", "9123456789"),
("Maize", "30 Quintals", "₹1900 / Quintal", "9988776655");
