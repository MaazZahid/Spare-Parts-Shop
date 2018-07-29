-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 29, 2018 at 10:42 AM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sparepartdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'Maaz', '123');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `price` int(20) NOT NULL,
  `quantity` int(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `price` int(10) NOT NULL,
  `category` varchar(255) NOT NULL,
  `imageurl` varchar(255) NOT NULL,
  `quantity` int(20) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=68 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `category`, `imageurl`, `quantity`) VALUES
(59, 'Jetta Mk. IV Bumper', 5000, 'car', 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Jetta_Mk._IV_Bumper_Damage.jpg', 0),
(50, 'Civic Steering', 11000, 'car', 'https://upload.wikimedia.org/wikipedia/commons/c/c1/2007_honda_civic_srs_airbag.jpg', 0),
(53, 'Straight Handle', 2000, 'bicycle', 'https://upload.wikimedia.org/wikipedia/commons/2/21/Mountain_bike_handlebar.JPG', 0),
(55, 'Cylicer Kit', 6000, 'bike', 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Skutry_vyfuk.jpg', 0),
(56, 'Sports Bicycle', 20000, 'bicycle', 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Merida_27.5_hardtail_mountain_bike.jpg', 0),
(57, 'Jetta Mk. IV Bumper', 5000, 'car', 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Jetta_Mk._IV_Bumper_Damage.jpg', 0),
(58, 'Sports Bicycle', 20000, 'bicycle', 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Merida_27.5_hardtail_mountain_bike.jpg', 0),
(63, 'Disc Brakes', 6000, 'bicycle', 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Bicycle_disc_brake.jpg', 0),
(61, 'Ford Tire', 30000, 'truck', 'https://upload.wikimedia.org/wikipedia/commons/9/96/Goodyear_Off_Road_Tire_Crandon_2012.jpg', 0),
(62, 'Mercedes S-Class LED Tail Light', 40000, 'car', 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Mercedes_S-Class_LED_Tail_Light_%28W222%29.jpg', 0),
(67, 'Trail HeadLight', 10000, 'bike', 'https://upload.wikimedia.org/wikipedia/commons/9/97/Senke_motorbike_SK150GY.jpg', 0),
(65, 'Disc Brakes', 6000, 'bicycle', 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Bicycle_disc_brake.jpg', 0),
(66, 'Trail HeadLight', 10000, 'bike', 'https://upload.wikimedia.org/wikipedia/commons/9/97/Senke_motorbike_SK150GY.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `selecteditems`
--

DROP TABLE IF EXISTS `selecteditems`;
CREATE TABLE IF NOT EXISTS `selecteditems` (
  `id` int(20) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` int(20) NOT NULL,
  `quantity` int(20) NOT NULL,
  `imageurl` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `selecteditems`
--

INSERT INTO `selecteditems` (`id`, `title`, `price`, `quantity`, `imageurl`) VALUES
(57, 'Jetta Mk. IV Bumper', 5000, 1, 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Jetta_Mk._IV_Bumper_Damage.jpg'),
(56, 'Sports Bicycle', 20000, 1, 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Merida_27.5_hardtail_mountain_bike.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `shipping`
--

DROP TABLE IF EXISTS `shipping`;
CREATE TABLE IF NOT EXISTS `shipping` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
