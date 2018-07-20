create table users (id serial primary key, username varchar unique, password varchar);



create table artist (artistid serial primary key, name text);

create table album (artistid int, name text, tracks int, foreign key (artistid) references artist(artistid));
