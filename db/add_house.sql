INSERT INTO houses(property_name, address, city, state, zip, image, mortgage, rent)
VALUES ($(property_name), $(address), $(city), $(state), $(zip), $(image), $(mortgage), $(rent));

select * from houses;