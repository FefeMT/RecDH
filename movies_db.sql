-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 07-12-2022 a las 03:22:06
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `movies_db`
--
CREATE DATABASE IF NOT EXISTS `movies_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `movies_db`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actors`
--

DROP TABLE IF EXISTS `actors`;
CREATE TABLE `actors` (
  `id` int(10) UNSIGNED NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `first_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `rating` decimal(3,1) DEFAULT NULL,
  `favorite_movie_id` int(10) UNSIGNED DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `actors`
--

INSERT INTO `actors` (`id`, `createdAt`, `updatedAt`, `first_name`, `last_name`, `rating`, `favorite_movie_id`, `deletedAt`) VALUES
(1, NULL, NULL, 'Sam', 'Worthington', '7.5', 1, NULL),
(2, NULL, NULL, 'Zoe', 'Saldana', '5.5', 2, NULL),
(3, NULL, NULL, 'Sigourney', 'Weaver', '9.7', NULL, NULL),
(4, NULL, NULL, 'Leonardo', 'Di Caprio', '3.5', 4, NULL),
(5, NULL, NULL, 'Kate', 'Winslet', '1.5', 5, NULL),
(6, NULL, NULL, 'Billy', 'Zane', '7.5', 6, NULL),
(7, NULL, NULL, 'Mark', 'Hamill', '6.5', 7, NULL),
(8, NULL, NULL, 'Harrison', 'Ford', '7.5', 8, NULL),
(9, NULL, NULL, 'Carrie', 'Fisher', '7.5', 9, NULL),
(10, NULL, NULL, 'Sam', 'Neill', '2.5', 10, NULL),
(11, NULL, NULL, 'Laura', 'Dern', '7.5', 11, NULL),
(12, NULL, NULL, 'Jeff', 'Goldblum', '4.5', NULL, NULL),
(13, NULL, NULL, 'Daniel', 'Radcliffe', '7.5', 13, NULL),
(14, NULL, NULL, 'Emma', 'Watson', '2.5', 14, NULL),
(15, NULL, NULL, 'Rupert', 'Grint', '6.2', 15, NULL),
(16, NULL, NULL, 'Shia', 'LaBeouf', '9.5', 16, NULL),
(17, NULL, NULL, 'Rosie', 'Huntington-Whiteley', '1.5', 17, NULL),
(18, NULL, NULL, 'Matthew', 'Broderick', '6.1', 18, NULL),
(19, NULL, NULL, 'James', 'Earl Jones', '7.5', 19, NULL),
(20, NULL, NULL, 'Jeremy', 'Irons', '7.2', 20, NULL),
(21, NULL, NULL, 'Johnny', 'Depp', '1.5', 21, NULL),
(22, NULL, NULL, 'Helena', 'Bonham Carter', '7.5', 1, NULL),
(23, NULL, NULL, 'Mia', 'Wasikowska', '7.5', 2, NULL),
(24, NULL, NULL, 'Albert', 'Brooks', '2.5', 3, NULL),
(25, NULL, NULL, 'Ellen', 'DeGeneres', '2.6', 4, NULL),
(26, NULL, NULL, 'Alexander', 'Gould', '7.5', 5, NULL),
(27, NULL, NULL, 'Tom', 'Hanks', '4.4', 6, NULL),
(28, NULL, NULL, 'Tim', 'Allen', '7.5', 7, NULL),
(29, NULL, NULL, 'Sean', 'Penn', '9.2', 8, NULL),
(30, NULL, NULL, 'Adam', 'Sandler', '3.1', 9, NULL),
(31, NULL, NULL, 'Renee', 'Zellweger', '9.5', 10, NULL),
(32, NULL, NULL, 'Emilia', 'Clarke', '8.2', 11, NULL),
(33, NULL, NULL, 'Peter', 'Dinklage', '2.3', 12, NULL),
(34, NULL, NULL, 'Kit', 'Harington', '2.4', NULL, NULL),
(35, NULL, NULL, 'Jared', 'Padalecki', '2.8', 14, NULL),
(36, NULL, NULL, 'Jensen', 'Ackles', '5.5', 15, NULL),
(37, NULL, NULL, 'Jim', 'Beaver', '2.6', 16, NULL),
(38, NULL, NULL, 'Andrew', 'Lincoln', '3.3', 17, NULL),
(39, NULL, NULL, 'Jon', 'Bernthal', '2.9', NULL, NULL),
(40, NULL, NULL, 'Sarah', 'Callies', '2.4', 19, NULL),
(41, NULL, NULL, 'Jim', 'Caviezel', '1.9', 20, NULL),
(42, NULL, NULL, 'Taraji', 'Henson', '5.9', 21, NULL),
(43, NULL, NULL, 'Kevin', 'Chapman', '2.9', 1, NULL),
(44, NULL, NULL, 'Johnny', 'Galecki', '2.3', 2, NULL),
(45, NULL, NULL, 'Jim', 'Parsons', '6.9', 3, NULL),
(46, NULL, NULL, 'Kaley', 'Cuoco', '2.3', 4, NULL),
(47, NULL, NULL, 'Bryan', 'Cranston', '7.9', NULL, NULL),
(48, NULL, NULL, 'Aaron', 'Paul', '5.9', 6, NULL),
(49, NULL, NULL, 'Anna', 'Gunn', '3.1', 7, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actor_movie`
--

DROP TABLE IF EXISTS `actor_movie`;
CREATE TABLE `actor_movie` (
  `id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `actor_id` int(10) UNSIGNED NOT NULL,
  `movie_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `actor_movie`
--

INSERT INTO `actor_movie` (`id`, `created_at`, `updated_at`, `actor_id`, `movie_id`) VALUES
(1, NULL, NULL, 1, 1),
(2, NULL, NULL, 2, 1),
(3, NULL, NULL, 3, 1),
(4, NULL, NULL, 4, 2),
(5, NULL, NULL, 5, 2),
(6, NULL, NULL, 6, 2),
(7, NULL, NULL, 7, 3),
(8, NULL, NULL, 7, 4),
(9, NULL, NULL, 8, 3),
(10, NULL, NULL, 8, 4),
(11, NULL, NULL, 9, 3),
(12, NULL, NULL, 9, 4),
(13, NULL, NULL, 10, 5),
(14, NULL, NULL, 11, 5),
(15, NULL, NULL, 12, 5),
(16, NULL, NULL, 13, 6),
(17, NULL, NULL, 13, 8),
(18, NULL, NULL, 13, 9),
(19, NULL, NULL, 14, 6),
(20, NULL, NULL, 14, 8),
(21, NULL, NULL, 14, 9),
(22, NULL, NULL, 15, 6),
(23, NULL, NULL, 15, 8),
(24, NULL, NULL, 15, 9),
(25, NULL, NULL, 16, 7),
(26, NULL, NULL, 17, 7),
(27, NULL, NULL, 18, 7),
(28, NULL, NULL, 19, 10),
(29, NULL, NULL, 20, 10),
(30, NULL, NULL, 21, 11),
(31, NULL, NULL, 22, 11),
(32, NULL, NULL, 22, 9),
(33, NULL, NULL, 23, 11),
(34, NULL, NULL, 24, 12),
(35, NULL, NULL, 25, 12),
(36, NULL, NULL, 26, 12),
(37, NULL, NULL, 27, 13),
(38, NULL, NULL, 27, 14),
(39, NULL, NULL, 27, 19),
(40, NULL, NULL, 28, 13),
(41, NULL, NULL, 28, 14),
(42, NULL, NULL, 29, 20),
(43, NULL, NULL, 30, 21);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

DROP TABLE IF EXISTS `genres`;
CREATE TABLE `genres` (
  `id` int(10) UNSIGNED NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `ranking` int(10) UNSIGNED NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `genres`
--

INSERT INTO `genres` (`id`, `createdAt`, `updatedAt`, `name`, `ranking`, `active`, `deletedAt`) VALUES
(1, '2016-07-04 03:00:00', NULL, 'Comedia', 1, 1, NULL),
(2, '2014-07-04 03:00:00', NULL, 'Terror', 2, 1, NULL),
(3, '2013-07-04 03:00:00', NULL, 'Drama', 3, 1, NULL),
(4, '2011-07-04 03:00:00', NULL, 'Accion', 4, 1, NULL),
(5, '2010-07-04 03:00:00', NULL, 'Ciencia Ficcion', 5, 1, NULL),
(6, '2013-07-04 03:00:00', NULL, 'Suspenso', 6, 1, NULL),
(7, '2005-07-04 03:00:00', NULL, 'Animacion', 7, 1, NULL),
(8, '2003-07-04 03:00:00', NULL, 'Aventuras', 8, 1, NULL),
(9, '2008-07-04 03:00:00', NULL, 'Documental', 9, 1, NULL),
(10, '2013-07-04 03:00:00', NULL, 'Infantiles', 10, 1, NULL),
(11, '2011-07-04 03:00:00', NULL, 'Fantasia', 11, 1, NULL),
(12, '2013-07-04 03:00:00', NULL, 'Musical', 12, 1, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

DROP TABLE IF EXISTS `movies`;
CREATE TABLE `movies` (
  `id` int(10) UNSIGNED NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `title` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `rating` decimal(3,1) UNSIGNED NOT NULL,
  `awards` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `release_date` datetime NOT NULL,
  `length` int(10) UNSIGNED DEFAULT NULL,
  `genre_id` int(10) UNSIGNED DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `createdAt`, `updatedAt`, `title`, `rating`, `awards`, `release_date`, `length`, `genre_id`, `deletedAt`) VALUES
(1, NULL, NULL, 'Avatar', '7.9', 3, '2010-10-04 00:00:00', 120, 5, NULL),
(2, NULL, NULL, 'Titanic', '7.7', 11, '1997-09-04 00:00:00', 320, 3, NULL),
(3, NULL, NULL, 'La Guerra de las galaxias: Episodio VI', '9.1', 7, '2004-07-04 00:00:00', NULL, 5, NULL),
(4, NULL, NULL, 'La Guerra de las galaxias: Episodio VII', '9.0', 6, '2003-11-04 00:00:00', 180, 5, NULL),
(5, NULL, NULL, 'Parque Jurasico', '8.3', 5, '1999-01-04 00:00:00', 270, 5, NULL),
(6, NULL, NULL, 'Harry Potter y las Reliquias de la Muerte - Parte 2', '9.0', 2, '2008-07-04 00:00:00', 190, 6, NULL),
(7, NULL, NULL, 'Transformers: el lado oscuro de la luna', '0.9', 1, '2005-07-04 00:00:00', NULL, 5, NULL),
(8, NULL, NULL, 'Harry Potter y la piedra filosofal', '10.0', 1, '2008-04-04 00:00:00', 120, 8, NULL),
(9, NULL, NULL, 'Harry Potter y la cámara de los secretos', '3.5', 2, '2009-08-04 00:00:00', 200, 8, NULL),
(10, NULL, NULL, 'El rey león', '9.1', 3, '2000-02-04 00:00:00', NULL, 10, NULL),
(11, NULL, NULL, 'Alicia en el país de las maravillas', '5.7', 2, '2008-07-04 00:00:00', 120, NULL, NULL),
(12, NULL, NULL, 'Buscando a Nemo', '8.3', 2, '2000-07-04 00:00:00', 110, 7, NULL),
(13, NULL, NULL, 'Toy Story', '6.1', 0, '2008-03-04 00:00:00', 150, 7, NULL),
(14, NULL, NULL, 'Toy Story 2', '3.2', 2, '2003-04-04 00:00:00', 120, 7, NULL),
(15, NULL, NULL, 'La vida es bella', '8.3', 5, '1994-10-04 00:00:00', NULL, 3, NULL),
(16, NULL, NULL, 'Mi pobre angelito', '3.2', 1, '1989-01-04 00:00:00', 120, 1, NULL),
(17, NULL, NULL, 'Intensamente', '9.0', 2, '2008-07-04 00:00:00', 120, 7, NULL),
(18, NULL, NULL, 'Carrozas de fuego', '9.9', 7, '1980-07-04 00:00:00', 180, NULL, NULL),
(19, NULL, NULL, 'Big', '7.3', 2, '1988-02-04 00:00:00', 130, 8, NULL),
(20, NULL, NULL, 'I am Sam', '9.0', 4, '1999-03-04 00:00:00', 130, 3, NULL),
(21, NULL, NULL, 'Hotel Transylvania', '7.1', 1, '2012-05-04 00:00:00', 90, 10, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `rol` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `createdAt`, `updatedAt`, `rol`) VALUES
(1, 'Edu', 'edu@edu.com', '123456', NULL, '2022-12-07 01:49:16', '2022-12-07 01:49:16', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actors`
--
ALTER TABLE `actors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `actors_favorite_movie_id_foreign` (`favorite_movie_id`);

--
-- Indices de la tabla `actor_movie`
--
ALTER TABLE `actor_movie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `actor_movie_actor_id_foreign` (`actor_id`),
  ADD KEY `actor_movie_movie_id_foreign` (`movie_id`);

--
-- Indices de la tabla `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `genres_ranking_unique` (`ranking`);

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `movies_genre_id_foreign` (`genre_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actors`
--
ALTER TABLE `actors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de la tabla `actor_movie`
--
ALTER TABLE `actor_movie`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actors`
--
ALTER TABLE `actors`
  ADD CONSTRAINT `actors_favorite_movie_id_foreign` FOREIGN KEY (`favorite_movie_id`) REFERENCES `movies` (`id`);

--
-- Filtros para la tabla `actor_movie`
--
ALTER TABLE `actor_movie`
  ADD CONSTRAINT `actor_movie_actor_id_foreign` FOREIGN KEY (`actor_id`) REFERENCES `actors` (`id`),
  ADD CONSTRAINT `actor_movie_movie_id_foreign` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`);

--
-- Filtros para la tabla `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `movies_genre_id_foreign` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
