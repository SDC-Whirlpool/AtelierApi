CREATE DATABASE IF NOT EXISTS sdc;

CREATE SCHEMA IF NOT EXISTS sdctables;

CREATE TABLE sdctables.reviewphotos (
  id INT NOT NULL,
  review_id INT NOT NULL,
  url text
);