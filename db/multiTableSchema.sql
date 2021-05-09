CREATE DATABASE IF NOT EXISTS sdc;

CREATE SCHEMA IF NOT EXISTS sdctables;

CREATE TABLE sdctables.datashift (
  id text,
  date text,
  summary text,
  body text,
  recommend text,
  reported text,
  reviewer_name text,
  reviewer_email text,
  response text,
  helpfulness text
);
