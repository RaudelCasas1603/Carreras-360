
//Creacion de la tabla Usuario 
CREATE TABLE `id21487144_carreras360`.`Usuario` (`id` INT NOT NULL AUTO_INCREMENT ,
 `Nombre` VARCHAR(30) NOT NULL , `Estado` VARCHAR(20) NOT NULL , `Carrera` INT(3) NOT NULL , 
 PRIMARY KEY (`id`)) ENGINE = InnoDB;

 //Creacion de la tabla Carrera
 CREATE TABLE `id21487144_carreras360`.`Carrera` (`idCarrera` INT(3) NOT NULL AUTO_INCREMENT ,
  `NombreCarrera` VARCHAR(30) NOT NULL , `Campus` VARCHAR(30) NOT NULL , 
  PRIMARY KEY (`idCarrera`)) ENGINE = InnoDB;

  //Creacion de la tabla Post 
  CREATE TABLE `id21487144_carreras360`.`Post` (`idPost` INT NOT NULL AUTO_INCREMENT , 
  `idCarrera` INT NOT NULL , `idUsuario` INT NOT NULL , `Texto` VARCHAR(200) NOT NULL , 
  PRIMARY KEY (`idPost`)) ENGINE = InnoDB;