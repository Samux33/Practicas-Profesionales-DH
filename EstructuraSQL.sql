CREATE DATABASE IF NOT EXISTS `recruitingrh` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `recruitingrh`;

DROP TABLE IF EXISTS `aspirante_profesion`;
CREATE TABLE `aspirante_profesion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `aspirante_id` int(11) NOT NULL,
  `profesion_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `aspirante_id_idx` (`aspirante_id`),
  KEY `profesion_id_idx` (`profesion_id`),
  CONSTRAINT `aspirante_id` FOREIGN KEY (`aspirante_id`) REFERENCES `aspirantes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `profesion_id` FOREIGN KEY (`profesion_id`) REFERENCES `profesiones` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `aspirantes`;
CREATE TABLE `aspirantes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `dni` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `linkedIn` varchar(45) NOT NULL,
  `nacimiento` varchar(45) NOT NULL,
  `genero_id` int(11) NOT NULL,
  `imagen` varchar(45) NOT NULL DEFAULT 'default.png',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `dni_UNIQUE` (`dni`),
  KEY `genero_id_idx` (`genero_id`),
  CONSTRAINT `genero_id` FOREIGN KEY (`genero_id`) REFERENCES `generos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `generos`;
CREATE TABLE `generos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
INSERT INTO `generos` VALUES (2,'femenino'),(1,'masculino');
/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `profesiones`;
CREATE TABLE `profesiones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
