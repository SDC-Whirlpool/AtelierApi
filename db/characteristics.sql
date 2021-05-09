CREATE DATABASE IF NOT EXISTS sdc;

CREATE SCHEMA IF NOT EXISTS sdctables;

CREATE TABLE sdctables.characteristics (
  id INT NOT NULL,
  product_id INT NOT NULL,
  name text
);

