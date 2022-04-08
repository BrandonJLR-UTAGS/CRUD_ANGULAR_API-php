-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-03-2022 a las 02:36:22
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda_online`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `activo` int(11) NOT NULL,
  `DescuentoProducto` tinyint(3) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `id_categoria`, `activo`, `DescuentoProducto`) VALUES
(1, 'bocho tuneado gris con aleron', 'Bonito bocho tuneado papeles en regla\r\njala al 100', '40000.00', 2, 1, 10),
(2, 'mini cuper redbull', 'minicuper modificado con logo de redbull y lata gigante, la lata es solo de decoracion', '60000.00', 2, 1, 0),
(3, 'Nissan GTR blanco', 'Nissan GTR interiores rojos, nuevo, se uso nomas para ver si jalaba', '1300000.00', 1, 1, 0),
(4, 'Nissan Tsuru tuneado', 'Super Tsuru tuneado estilo taxi japones CDMX, sale machin, rines rojos sangre, estilo vintage, interioes en tactopiel buferr que retumba machin, incluto usb con rolas de los temerarios', '70000.00', 2, 1, 0),
(5, 'Turbo cargador ', 'turbo cargador para modificación de carros incrementa hasta 200 caballos facil', '8000.00', 3, 1, 0),
(6, 'Camion de transporte tuneado', 'camion de ruta tuneado, palanca de velocidades de calabera, luces led perronas, motor modificado aca chido, corre perron, bafles y bocinas swonder, luces exteriores como interiores, cristo en el retrovisor', '200000.00', 2, 1, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
