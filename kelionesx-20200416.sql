-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2020 at 01:30 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kelionesx`
--

-- --------------------------------------------------------

--
-- Table structure for table `autobusai`
--

CREATE TABLE `autobusai` (
  `id` int(10) UNSIGNED NOT NULL,
  `modelis` varchar(256) NOT NULL,
  `metai` int(4) UNSIGNED NOT NULL,
  `klase` varchar(256) NOT NULL,
  `kaina_km` double UNSIGNED NOT NULL,
  `kaina_val` double UNSIGNED NOT NULL,
  `vietu_sk` int(10) UNSIGNED NOT NULL,
  `imones_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `autobusai`
--

INSERT INTO `autobusai` (`id`, `modelis`, `metai`, `klase`, `kaina_km`, `kaina_val`, `vietu_sk`, `imones_id`) VALUES
(1, 'SCANIA Touring K410', 2018, 'liukso', 0.7, 77, 50, 3),
(2, 'VOLKSWAGEN CRAFTER mikroautobusas', 2016, 'ekonomine', 0.6, 67, 20, 3),
(5, 'MAN 14.280', 2005, 'liukso', 0.8, 85.5, 40, 5),
(6, 'SETRA 315H', 2001, 'ekonomine', 0.85, 90.5, 52, 5),
(7, 'ISUZU”HARMONY”', 2007, 'liukso', 0.73, 78.5, 27, 5),
(8, 'Volkswagen Crafter', 2017, 'ekonomine', 0.5, 55.5, 19, 5);

-- --------------------------------------------------------

--
-- Table structure for table `imones`
--

CREATE TABLE `imones` (
  `id` int(10) UNSIGNED NOT NULL,
  `pav` varchar(256) NOT NULL,
  `kontaktai` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `imones`
--

INSERT INTO `imones` (`id`, `pav`, `kontaktai`) VALUES
(1, 'Kautra', 'A. Juozapavičiaus pr. 84, 45501 Kaunas\r\nTel. ( 8 37) 34 24 40, faks. ( 8 37) 34 18 88\r\nEl. paštas info@kautra.lt'),
(2, 'Girobusas', 'Raudondvario pl. 242b\r\nKaunas LT-3021\r\nTel.: +370 37 38 55 44\r\n        +370 37 47 86 99\r\nel. paštas: info@girobusas.lt\r\n'),
(3, 'TOKS', 'Sodų g. 22, LT-03211 Vilnius\r\nRaštinė tel.+370 5 216 0054\r\nFaksas +370 5 213 5428\r\nEl. p. office@toks.lt'),
(4, 'Artransa', 'Vyčio Kryžiaus g. 185, Jonučių k. Telefonas\r\n8 37 339 339\r\nEl. paštas\r\ninfo@artransa.lt'),
(5, 'Ukmerges autobusai', 'Vytauto g. 111, LT-20184, Ukmergė\r\nTel./faks. 8-340-51132');

-- --------------------------------------------------------

--
-- Table structure for table `keliones`
--

CREATE TABLE `keliones` (
  `id` int(10) UNSIGNED NOT NULL,
  `pav` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `apras` text COLLATE utf8_lithuanian_ci NOT NULL,
  `flag_poilsines` tinyint(3) NOT NULL,
  `flag_pazintines` tinyint(3) NOT NULL,
  `flag_viskas_isk` tinyint(3) NOT NULL,
  `kaina` decimal(12,2) UNSIGNED NOT NULL,
  `trukme_val` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `keliones`
--

INSERT INTO `keliones` (`id`, `pav`, `apras`, `flag_poilsines`, `flag_pazintines`, `flag_viskas_isk`, `kaina`, `trukme_val`) VALUES
(1, 'po LDK pilis ir pilaites', 'visos LDK pilys Baltarusijoje', 1, 1, 1, '150.00', 20),
(2, 'Ventės ragas', 'paukščių žiedavimas ir kt. ', 1, 0, 0, '60.00', 12),
(3, 'Neringa', 'fwwfe', 1, 0, 0, '300.00', 30),
(4, 'fef', 'srth', 0, 1, 0, '100.00', 10),
(5, 'herh', 'edgtj', 1, 0, 0, '1999.00', 20);

-- --------------------------------------------------------

--
-- Table structure for table `keliones_miestai`
--

CREATE TABLE `keliones_miestai` (
  `id` int(10) UNSIGNED NOT NULL,
  `miestai_id` int(10) UNSIGNED NOT NULL,
  `keliones_id` int(10) UNSIGNED NOT NULL,
  `trukme_val` int(10) UNSIGNED NOT NULL DEFAULT 3
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `keliones_miestai`
--

INSERT INTO `keliones_miestai` (`id`, `miestai_id`, `keliones_id`, `trukme_val`) VALUES
(2, 2, 1, 3),
(3, 3, 1, 2),
(4, 4, 1, 4),
(5, 3, 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `miestai`
--

CREATE TABLE `miestai` (
  `id` int(10) UNSIGNED NOT NULL,
  `pav` varchar(64) COLLATE utf8_lithuanian_ci NOT NULL,
  `kodas_salies` char(3) COLLATE utf8_lithuanian_ci NOT NULL,
  `apras` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `miestai`
--

INSERT INTO `miestai` (`id`, `pav`, `kodas_salies`, `apras`) VALUES
(1, 'Lyda', 'LT', 'kazkas'),
(2, 'Gardinas', '', ''),
(3, 'Nesvyžius', '', ''),
(4, 'Naugardukas', '', ''),
(5, 'Myras', 'LT', 'lialialia'),
(6, 'Rusnė', '', ''),
(10, 'Kaunas', 'LT', 'murrr'),
(11, 'Kaunas', 'LT', 'murrrrrrrr'),
(12, 'Kaunas', 'LT', 'labukas'),
(13, 'Vilnius', 'LT', 'sostine');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `autobusai`
--
ALTER TABLE `autobusai`
  ADD PRIMARY KEY (`id`),
  ADD KEY `imones_id` (`imones_id`);

--
-- Indexes for table `imones`
--
ALTER TABLE `imones`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `keliones`
--
ALTER TABLE `keliones`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `keliones_miestai`
--
ALTER TABLE `keliones_miestai`
  ADD PRIMARY KEY (`id`),
  ADD KEY `keliones_id` (`keliones_id`),
  ADD KEY `miestai_id` (`miestai_id`);

--
-- Indexes for table `miestai`
--
ALTER TABLE `miestai`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `autobusai`
--
ALTER TABLE `autobusai`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `imones`
--
ALTER TABLE `imones`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `keliones`
--
ALTER TABLE `keliones`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `keliones_miestai`
--
ALTER TABLE `keliones_miestai`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `miestai`
--
ALTER TABLE `miestai`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `autobusai`
--
ALTER TABLE `autobusai`
  ADD CONSTRAINT `autobusai_ibfk_1` FOREIGN KEY (`imones_id`) REFERENCES `imones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `keliones_miestai`
--
ALTER TABLE `keliones_miestai`
  ADD CONSTRAINT `keliones_miestai_ibfk_1` FOREIGN KEY (`keliones_id`) REFERENCES `keliones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `keliones_miestai_ibfk_2` FOREIGN KEY (`miestai_id`) REFERENCES `miestai` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
