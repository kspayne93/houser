create table houses(
    id serial PRIMARY KEY,
    property_name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer
)

insert into houses(id, property_name, address, city, state, zip)
values(1, 'Kyles House', '123 Main St', 'Spanish Fork', 'UT', 84660)

insert into houses(id, property_name, address, city, state, zip)
values(2, 'Milos House', '456 Center St', 'Salt Lake City', 'UT', 85858)

insert into houses(id, property_name, address, city, state, zip)
values(3, 'Marisas House', '789 East St', 'Los Angeles', 'CA', 90210);