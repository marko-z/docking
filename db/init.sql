-- CREATE USER docker;
-- CREATE DATABASE test_db;
-- GRANT ALL PRIVILEGES ON DATABASE test_db TO docker;

CREATE TABLE cars (
  id SERIAL PRIMARY KEY,
  -- brand varchar(255) NOT NULL,
  brand character varying(255) NOT NULL,
  model character varying(255) NOT NULL
);

INSERT INTO cars (brand, model) VALUES
('toyota','supra'),
('honda','civic'),
('mercedez','benz');
