create database bd_televisao;
use bd_televisao;

create table tb_canal(
id_canal int primary key auto_increment,
nm_canal varchar(200),
nr_canal int,
bt_aberto bool
);

select*from tb_canal;

update tb_canal
set nm_canal = ?,
nr_canal = ?,
bt_aberto = ?
where id_canal = ?;

delete from tb_canal where id_canal = ?;

insert into tb_canal(nm_canal, nr_canal, bt_aberto)
values (?,?,?);

create table tb_programa(
id_canal_programa int primary key auto_increment,
id_canal int,
nm_programa varchar(200),
ds_genero varchar(200),
hr_programa varchar(200),
foreign key(id_canal) references tb_canal(id_canal) 
);

create table tb_usuario(
id_usuario int primary key auto_increment,
nm_usuario varchar(200)
);

create table tb_programa_favorito(
id_programa_favorito int primary key auto_increment,
id_usuario int,
id_canal_programa int,
vl_avaliacao int,
foreign key(id_usuario) references tb_usuario(id_usuario),
foreign key(id_canal_programa) references tb_programa(id_canal_programa)
);





