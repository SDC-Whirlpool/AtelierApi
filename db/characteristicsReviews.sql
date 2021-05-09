CREATE DATABASE IF NOT EXISTS sdc;

CREATE SCHEMA IF NOT EXISTS sdctables;

CREATE TABLE sdctables.reviewchars (
  id INT NOT NULL,
  characteristic_id INT NOT NULL,
  review_id INT NOT NULL,
  value INT NOT NULL
);

