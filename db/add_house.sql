INSERT INTO houses(property_name, address, city, state, zip)
VALUES ($(property_name), $(address), $(city), $(state), $(zip));

select * from houses;