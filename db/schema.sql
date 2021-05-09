CREATE DATABASE IF NOT EXISTS sdc;

CREATE SCHEMA IF NOT EXISTS sdctables;

CREATE TABLE sdctables.reviews (
  id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  rating INTEGER NOT NULL,
  date date NOT NULL,
  summary text NOT NULL,
  body text NOT NULL,
  recommend BOOLEAN NOT NULL,
  reported BOOLEAN NOT NULL,
  reviewer_name text NOT NULL,
  reviewer_email text NOT NULL,
  response text,
  helpfulness INTEGER NOT NULL,
  PRIMARY KEY (id, product_id)
);