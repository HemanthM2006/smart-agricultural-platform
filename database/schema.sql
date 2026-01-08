-- database/schema.sql

CREATE DATABASE IF NOT EXISTS smart_agriculture;
USE smart_agriculture;

CREATE TABLE soil_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ph FLOAT NOT NULL,
  moisture FLOAT NOT NULL,
  temperature FLOAT NOT NULL,
  nitrogen INT NOT NULL,
  phosphorus INT NOT NULL,
  potassium INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE marketplace (
  id INT AUTO_INCREMENT PRIMARY KEY,
  crop VARCHAR(100) NOT NULL,
  quantity VARCHAR(50) NOT NULL,
  price VARCHAR(50) NOT NULL,
  contact VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
