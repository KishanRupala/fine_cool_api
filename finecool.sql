-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 08, 2026 at 08:03 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `finecool`
--

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `contact_no` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role_name` varchar(50) NOT NULL DEFAULT 'Technician',
  `role_id` int(11) NOT NULL DEFAULT 3,
  `isActive` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `token` text DEFAULT NULL,
  `area` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `pincode` varchar(10) NOT NULL,
  `company_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `contact_no`, `email`, `password`, `role_name`, `role_id`, `isActive`, `createdAt`, `updatedAt`, `token`, `area`, `city`, `state`, `pincode`, `company_name`) VALUES
(1, 'sarang', '9879855819', NULL, '$2b$10$WV3u6fzgeSl6P3SoeWAvo.24JI9UC1rQh.OVg9LJQM7vdhMxUIlnG', 'technician', 3, 1, '2026-05-08 13:05:02', '2026-05-08 17:33:34', NULL, 'dfkbjn', '', '', '', ''),
(4, 'kishan', '9879855516', NULL, '$2b$10$BMagktkBjIt6VGS2el5JrO7QpsUZ8ruYCiBeMAsHm5qtS/eRH45BW', 'Technician', 3, 1, '2026-05-08 13:06:00', '2026-05-08 13:06:00', NULL, '', '', '', '', NULL),
(5, 'kKISHAN', '9879855517', 'kishan@gmail.com', '$2b$10$KGTRYvqJH6FI/8e2Hdu0kenvBQ/9AjYf3ej9ZgRQy/NKNJGb5me6K', 'Technician', 3, 1, '2026-05-08 13:19:48', '2026-05-08 13:19:48', NULL, '', '', '', '', NULL),
(6, '', '7567771000', NULL, '$2b$10$Pz15xmr4PhLNrpvYnTKsD.9XSGnK5vDtYi4UbXDt.7zF5jyH6sque', 'Technician', 3, 1, '2026-05-08 16:04:33', '2026-05-08 17:44:43', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImlhdCI6MTc3ODI2MjI4MywiZXhwIjoxNzc4MjY1ODgzfQ.1b5p7cTWgz9Hw5xDaj3KqBJjc7Uvm2869Bl9-n_LWEc', '', '', '', '', ''),
(7, '', '7567771004', NULL, '$2b$10$u.DQH9aA9HtkYQ1wpZALlu8tdqbyyOXsx34yJM1KBeSg0.cpSaRZS', 'Technician', 3, 1, '2026-05-08 16:05:33', '2026-05-08 16:05:33', NULL, '', '', '', '', ''),
(8, '', '7567791004', NULL, '$2b$10$UOmFx7H9Zw768iB54emSeOvQLeu59Toy5fJzptZPuYyExVJ08Ipwu', 'Technician', 3, 1, '2026-05-08 16:06:30', '2026-05-08 16:06:30', NULL, '', '', '', '', NULL),
(9, 'sarang', '9879855815', NULL, '$2b$10$I1PBNoV7xJ4AeHyiRK4R5enYcMCSUsGOxXBARQ5F7a70GzIJKo8LS', 'Technician', 3, 1, '2026-05-08 17:17:06', '2026-05-08 17:17:06', NULL, 'dfkbjn', '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`),
  ADD UNIQUE KEY `role_name` (`role_name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `contact_no` (`contact_no`),
  ADD UNIQUE KEY `contact_no_2` (`contact_no`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
