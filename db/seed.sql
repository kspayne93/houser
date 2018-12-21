create table houses(
    id serial PRIMARY KEY,
    property_name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer
)


insert into houses(property_name, address, city, state, zip)
values('Kyles House', '123 Main St', 'Spanish Fork', 'UT', 84660)

insert into houses(property_name, address, city, state, zip)
values('Milos House', '456 Center St', 'Salt Lake City', 'UT', 85858)

insert into houses(property_name, address, city, state, zip)
values('Marisas House', '789 East St', 'Los Angeles', 'CA', 90210)