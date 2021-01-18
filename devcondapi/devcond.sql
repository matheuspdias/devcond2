-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 15-Jan-2021 às 03:20
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `devcond`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `areadisableddays`
--

CREATE TABLE `areadisableddays` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_area` int(11) NOT NULL,
  `day` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `areadisableddays`
--

INSERT INTO `areadisableddays` (`id`, `id_area`, `day`) VALUES
(1, 2, '2021-01-16');

-- --------------------------------------------------------

--
-- Estrutura da tabela `areas`
--

CREATE TABLE `areas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `allowed` int(11) NOT NULL DEFAULT 1,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cover` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `days` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `areas`
--

INSERT INTO `areas` (`id`, `allowed`, `title`, `cover`, `days`, `start_time`, `end_time`) VALUES
(1, 1, 'Academia', 'gym.jpg', '1,2,4,5', '06:00:00', '22:00:00'),
(2, 1, 'Piscina', 'pool.jpg', '1,2,3,4,5', '07:00:00', '23:00:00'),
(3, 1, 'Churrasqueira', 'barbecue.jpg', '4,5,6', '09:00:00', '22:00:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `billets`
--

CREATE TABLE `billets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_unit` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fileurl` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `billets`
--

INSERT INTO `billets` (`id`, `id_unit`, `title`, `fileurl`) VALUES
(1, 1, 'Dez/20', '1_dez20.pdf');

-- --------------------------------------------------------

--
-- Estrutura da tabela `docs`
--

CREATE TABLE `docs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fileurl` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `docs`
--

INSERT INTO `docs` (`id`, `title`, `fileurl`) VALUES
(1, 'Regras do condominio', 'regras.pdf'),
(2, 'Financeiro de Dez/20', 'fin_dez20.pdf');

-- --------------------------------------------------------

--
-- Estrutura da tabela `foundandlost`
--

CREATE TABLE `foundandlost` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'LOST',
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `where` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `datecreated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `foundandlost`
--

INSERT INTO `foundandlost` (`id`, `status`, `photo`, `description`, `where`, `datecreated`) VALUES
(1, 'LOST', 'alguma.jpg', 'carteira azul cheia de dinheiro', 'No patio', '2021-01-13'),
(2, 'RECOVERED', 'achado.jpg', 'pente verde', 'parquinho B', '2021-01-13'),
(3, 'LOST', 'v54yAULdj3aSyp0vYwpCeDRp1xpr7GQnJuuzGnOV.jpg', 'Achei uma foto de alguem', 'no meio da rua', '2021-01-13');

-- --------------------------------------------------------

--
-- Estrutura da tabela `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2021_01_12_021028_createalltables', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `reservations`
--

CREATE TABLE `reservations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_unit` int(11) NOT NULL,
  `id_area` int(11) NOT NULL,
  `reservation_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 
-- Extraindo dados da tabela `reservations`
--

INSERT INTO `reservations` (`id`, `id_unit`, `id_area`, `reservation_date`) VALUES
(2, 2, 1, '2021-01-15 07:00:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `unitpeoples`
--

CREATE TABLE `unitpeoples` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_unit` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthdate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `unitpeoples`
--

INSERT INTO `unitpeoples` (`id`, `id_unit`, `name`, `birthdate`) VALUES
(1, 2, 'Paulo', '2000-12-20'),
(2, 2, 'Fernanda', '2000-12-20');

-- --------------------------------------------------------

--
-- Estrutura da tabela `unitpets`
--

CREATE TABLE `unitpets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_unit` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `race` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `unitpets`
--

INSERT INTO `unitpets` (`id`, `id_unit`, `name`, `race`) VALUES
(2, 2, 'Seth', 'Gato');

-- --------------------------------------------------------

--
-- Estrutura da tabela `units`
--

CREATE TABLE `units` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_owner` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `units`
--

INSERT INTO `units` (`id`, `name`, `id_owner`) VALUES
(1, 'APT 100', 1),
(2, 'APT 101', 1),
(3, 'APT 200', 0),
(4, 'APT 201', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `unitvehicles`
--

CREATE TABLE `unitvehicles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_unit` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `plate` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `unitvehicles`
--

INSERT INTO `unitvehicles` (`id`, `id_unit`, `title`, `color`, `plate`) VALUES
(2, 2, 'Celta 1.0', 'preto', 'preto');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cpf` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `cpf`, `password`) VALUES
(1, 'Matheus', 'matheus@gmail.com', '47623171879', '$2y$10$KS9llFIpWjL3lqoDMW.ePOqFtus.r2nTLmoinCh7UXOtkFfB00TMy');

-- --------------------------------------------------------

--
-- Estrutura da tabela `walllikes`
--

CREATE TABLE `walllikes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_wall` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `walllikes`
--

INSERT INTO `walllikes` (`id`, `id_wall`, `id_user`) VALUES
(5, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `walls`
--

CREATE TABLE `walls` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `datecreated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `walls`
--

INSERT INTO `walls` (`id`, `title`, `body`, `datecreated`) VALUES
(1, 'Título de Aviso de Teste', 'Lorem ipsum blablalba  lorem ipsim', '2020-12-20 15:00:00'),
(2, 'Alerta geral para todos', 'Cuidado com blablalba  lorem ipsim', '2020-12-20 18:00:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `warnings`
--

CREATE TABLE `warnings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_unit` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'IN_REVIEW',
  `datecreated` date NOT NULL,
  `photos` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `warnings`
--

INSERT INTO `warnings` (`id`, `id_unit`, `title`, `status`, `datecreated`, `photos`) VALUES
(1, 2, 'Vizinho é chato', 'IN_REVIEW', '2021-01-12', 'foto1.jpg,foto2.jpg'),
(2, 2, 'Vizinho chato via api', 'IN_REVIEW', '2021-01-12', ''),
(3, 2, 'Vizinho feio com foto', 'IN_REVIEW', '2021-01-12', 'M5rGfitZ2MXH0CnLQbqKuIgLQXxyIGJuFiG1jrBk.png,M5rGfitZ2MXH0CnLQbqKuIgLQXxyIGJuFiG1jrBk.png');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `areadisableddays`
--
ALTER TABLE `areadisableddays`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `areas`
--
ALTER TABLE `areas`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `billets`
--
ALTER TABLE `billets`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `docs`
--
ALTER TABLE `docs`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `foundandlost`
--
ALTER TABLE `foundandlost`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `unitpeoples`
--
ALTER TABLE `unitpeoples`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `unitpets`
--
ALTER TABLE `unitpets`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `unitvehicles`
--
ALTER TABLE `unitvehicles`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_cpf_unique` (`cpf`);

--
-- Índices para tabela `walllikes`
--
ALTER TABLE `walllikes`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `walls`
--
ALTER TABLE `walls`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `warnings`
--
ALTER TABLE `warnings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `areadisableddays`
--
ALTER TABLE `areadisableddays`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `areas`
--
ALTER TABLE `areas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `billets`
--
ALTER TABLE `billets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `docs`
--
ALTER TABLE `docs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `foundandlost`
--
ALTER TABLE `foundandlost`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `unitpeoples`
--
ALTER TABLE `unitpeoples`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `unitpets`
--
ALTER TABLE `unitpets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `units`
--
ALTER TABLE `units`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `unitvehicles`
--
ALTER TABLE `unitvehicles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `walllikes`
--
ALTER TABLE `walllikes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `walls`
--
ALTER TABLE `walls`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `warnings`
--
ALTER TABLE `warnings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
