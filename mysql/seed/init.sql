DROP DATABASE IF EXISTS test;
CREATE DATABASE test;
DROP TABLE IF EXISTS movies;

CREATE TABLE `movies` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `rating` varchar(5) NOT NULL,
  `category` varchar(10) NOT NULL,
  `purchased` date NOT NULL,
  PRIMARY KEY  (`id`)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `movies` (`title`,`rating`,`category`,`purchased`) VALUES ('Big Advenure','G','family','2002-03-06');
INSERT INTO `movies` (`title`,`rating`,`category`,`purchased`) VALUES ('Shiny Things, The','PG','drama','2002-03-06');
INSERT INTO `movies` (`title`,`rating`,`category`,`purchased`) VALUES ('End of the Line','R','misc','2001-02-05');
INSERT INTO `movies` (`title`,`rating`,`category`,`purchased`) VALUES ('A Rat named Darcy','G','family','2003-04-19');
INSERT INTO `movies` (`title`,`rating`,`category`,`purchased`) VALUES ('Head First Rules','R','action','2003-04-19');
INSERT INTO `movies` (`title`,`rating`,`category`,`purchased`) VALUES ('Mad Clowns','R','horror','1999-11-20');
INSERT INTO `movies` (`title`,`rating`,`category`,`purchased`) VALUES ('Greg: The Untold Story','PG','action','2001-02-05');
INSERT INTO `movies` (`title`,`rating`,`category`,`purchased`) VALUES ('Potentially Habitable Planet','PG','scifi','2001-02-05');
INSERT INTO `movies` (`title`,`rating`,`category`,`purchased`) VALUES ('Weird Things from Space','PG','scifi','2003-04-19');
INSERT INTO `movies` (`title`,`rating`,`category`,`purchased`) VALUES ('Shark Bait','G','misc','1999-11-20');