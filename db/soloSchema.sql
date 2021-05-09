CREATE DATABASE IF NOT EXISTS sdc;

CREATE SCHEMA IF NOT EXISTS sdctables;

CREATE TABLE sdctables.fixdate (
  id text,
  date timestamp
  );

CREATE TABLE sdctables.longerdate (
  id text,
  date timestamp
);

CREATE TABLE sdctables.shorterdate (
  id text,
  date timestamp
)


