-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2020 at 11:20 AM
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
-- Database: `demografija`
--

-- --------------------------------------------------------

--
-- Table structure for table `gyventojai`
--

CREATE TABLE `gyventojai` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_miesto` int(10) UNSIGNED NOT NULL,
  `amz_grupes` int(11) NOT NULL,
  `lytis` enum('vyr','mot') COLLATE utf8_lithuanian_ci NOT NULL,
  `kiekis` int(11) NOT NULL,
  `flag_gyv_mieste` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `gyventojai`
--

INSERT INTO `gyventojai` (`id`, `id_miesto`, `amz_grupes`, `lytis`, `kiekis`, `flag_gyv_mieste`) VALUES
(1, 1, 5, 'vyr', 1742, 1),
(2, 1, 5, 'mot', 1502, 1),
(3, 3, 10, 'vyr', 12354, 0),
(4, 3, 10, 'mot', 41231, 0),
(5, 4, 5, 'mot', 1234, 1),
(6, 4, 5, 'vyr', 1423, 1),
(7, 4, 10, 'mot', 5134, 0),
(8, 4, 10, 'vyr', 5423, 0),
(9, 5, 15, 'mot', 2457, 1),
(10, 5, 15, 'vyr', 6546, 1),
(11, 6, 10, 'mot', 1235, 1),
(12, 6, 10, 'vyr', 4213, 1),
(13, 8, 10, 'mot', 45671, 1),
(14, 8, 10, 'vyr', 54236, 1),
(15, 8, 15, 'mot', 23445, 0),
(16, 8, 15, 'vyr', 23645, 0),
(17, 9, 15, 'vyr', 54631, 1),
(18, 12, 5, 'vyr', 45324, 1),
(19, 12, 5, 'mot', 22510, 1),
(20, 12, 10, 'vyr', 1203, 0),
(21, 12, 10, 'mot', 4452, 0),
(22, 12, 15, 'vyr', 8745, 0),
(23, 12, 15, 'mot', 6547, 0),
(24, 13, 20, 'mot', 45212, 1),
(25, 13, 20, 'vyr', 65321, 1),
(26, 13, 5, 'vyr', 21312, 0),
(27, 13, 5, 'mot', 32214, 0),
(28, 14, 15, 'vyr', 1100101, 1),
(29, 14, 15, 'mot', 1234567, 1),
(30, 14, 10, 'mot', 23478, 1),
(31, 14, 10, 'vyr', 45213, 1),
(32, 15, 5, 'vyr', 42314, 1),
(33, 15, 5, 'mot', 23344, 1),
(34, 15, 10, 'vyr', 21445, 1),
(35, 15, 10, 'mot', 577664, 1),
(36, 15, 15, 'mot', 457987, 1),
(37, 15, 15, 'vyr', 374875, 1);

-- --------------------------------------------------------

--
-- Table structure for table `miestai`
--

CREATE TABLE `miestai` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_salies` int(10) UNSIGNED NOT NULL,
  `pavadinimas` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `id_miesto_raj_centro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `miestai`
--

INSERT INTO `miestai` (`id`, `id_salies`, `pavadinimas`, `id_miesto_raj_centro`) VALUES
(1, 1, 'Kaunas', 2),
(2, 1, 'Vilnius', 3),
(3, 1, 'Rokiskis', 4),
(4, 1, 'Alytus', 5),
(5, 1, 'Birzai', 6),
(6, 1, 'Kapsukas', 7),
(7, 1, 'Klaipeda', 8),
(8, 2, 'Glasgow', 2),
(9, 2, 'Liverpool', 3),
(10, 2, 'Blacpool', 4),
(11, 2, 'Ramsgate', 5),
(12, 2, 'London', 6),
(13, 2, 'Cardiff', 7),
(14, 4, 'Tokyo', 1),
(15, 4, 'Osaka', 2),
(16, 4, 'Sendai', 3),
(17, 5, 'Niigata', 4);

-- --------------------------------------------------------

--
-- Table structure for table `salys`
--

CREATE TABLE `salys` (
  `id` int(10) UNSIGNED NOT NULL,
  `pav` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `kodas` char(3) COLLATE utf8_lithuanian_ci NOT NULL,
  `valiuta` varchar(64) COLLATE utf8_lithuanian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `salys`
--

INSERT INTO `salys` (`id`, `pav`, `kodas`, `valiuta`) VALUES
(1, 'Lietuva', 'LTL', 'Euros'),
(2, 'UK', 'UK', 'Svaras'),
(3, 'Lenkija', 'POL', 'Zlotas'),
(4, 'Japonija', 'JP', 'Juanis'),
(5, 'Kinija', 'CH', 'Pinigs');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gyventojai`
--
ALTER TABLE `gyventojai`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_miesto` (`id_miesto`,`amz_grupes`,`lytis`,`flag_gyv_mieste`);

--
-- Indexes for table `miestai`
--
ALTER TABLE `miestai`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_salies` (`id_salies`);

--
-- Indexes for table `salys`
--
ALTER TABLE `salys`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `miestai`
--
ALTER TABLE `miestai`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `salys`
--
ALTER TABLE `salys`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `miestai`
--
ALTER TABLE `miestai`
  ADD CONSTRAINT `miestai_ibfk_1` FOREIGN KEY (`id_salies`) REFERENCES `salys` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
