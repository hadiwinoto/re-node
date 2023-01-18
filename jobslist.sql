# Host: localhost  (Version 5.5.5-10.4.10-MariaDB)
# Date: 2023-01-14 14:42:27
# Generator: MySQL-Front 6.0  (Build 2.20)


CREATE DATABASE IF NOT EXISTS `jobslist`;

#
# Structure for table "profiles"
#

CREATE TABLE `jobslist`.`profiles` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `inisial` text DEFAULT NULL,
  `name` text DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `division` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `profiles_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `rhrdatacatalog`.`profiles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `profiles_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `rhrdatacatalog`.`users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

#
# Data for table "profiles"
#

INSERT INTO `profiles` VALUES (1,1,'SAS','Admin','admin@admin.com','021934353223','Jl. Karet Karya No.9, Setia Budi',NULL,NULL,NULL,'2022-08-23 00:00:00','2022-08-23 00:00:00');

#
# Structure for table "roles"
#

CREATE TABLE `jobslist`.`roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

#
# Data for table "roles"
#

INSERT INTO `roles` VALUES (1,'user','2022-08-23 08:48:38','2022-08-23 08:48:38'),(2,'moderator','2022-08-23 08:48:38','2022-08-23 08:48:38'),(3,'admin','2022-08-23 08:48:38','2022-08-23 08:48:38');

#
# Structure for table "user_roles"
#

CREATE TABLE `jobslist`.`user_roles` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `role_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`role_id`,`user_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `rhrdatacatalog`.`roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `rhrdatacatalog`.`users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

#
# Data for table "user_roles"
#

INSERT INTO `user_roles` VALUES ('2022-10-27 00:00:00','2022-10-27 00:00:00',3,1);

#
# Structure for table "users"
#

CREATE TABLE `jobslist`.`users` (
  `id` int(11) NOT NULL,
  `nama` text DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

#
# Data for table "users"
#

INSERT INTO `users` VALUES (1,'Admin','admin','admin@admin.com','$2y$10$Y2gdDyMuyomx72JVWfdL0Oqi6jQxETaIw5NUZw5Aen3XConFo3GJ.','2022-08-23 00:00:00','2022-08-23 00:00:00');
