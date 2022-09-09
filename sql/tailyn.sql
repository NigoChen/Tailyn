-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2022-09-09 17:59:15
-- 伺服器版本： 5.6.51
-- PHP 版本： 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `tailyn`
--

-- --------------------------------------------------------

--
-- 資料表結構 `employee`
--

CREATE TABLE `employee` (
  `e_Id` int(11) NOT NULL,
  `e_Name` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '姓名',
  `e_Email` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT '信箱',
  `e_JobNumber` varchar(10) COLLATE utf8_unicode_ci NOT NULL COMMENT '工號',
  `e_PassWord` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT '密碼',
  `e_Lv` tinyint(1) NOT NULL COMMENT '權限'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 傾印資料表的資料 `employee`
--

INSERT INTO `employee` (`e_Id`, `e_Name`, `e_Email`, `e_JobNumber`, `e_PassWord`, `e_Lv`) VALUES
(1, 'NIgo', 'az7712456az@gmail.com', '4138', '202cb962ac59075b964b07152d234b70', 3),
(2, 'nikki', 'nikki@yahoo.com.tw', '1120', '202cb962ac59075b964b07152d234b70', 2),
(3, 'andy', 'andy@yahoo.com', '2210', '202cb962ac59075b964b07152d234b70', 2),
(4, 'Joe', 'joe@yahoo.com.tw', '3340', '202cb962ac59075b964b07152d234b70', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `repair`
--

CREATE TABLE `repair` (
  `r_Id` int(11) NOT NULL,
  `r_JobNumber` varchar(10) COLLATE utf8_unicode_ci NOT NULL COMMENT '工號',
  `r_SerialNumber` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT '序號',
  `r_WorkOrder` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT '訂單',
  `r_Model` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT '機種',
  `r_EorrCode` varchar(10) COLLATE utf8_unicode_ci NOT NULL COMMENT '錯誤代碼',
  `r_Process` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT '查修過程',
  `r_BadResons` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT '不良原因',
  `r_WorkTime` tinyint(4) NOT NULL COMMENT '工時',
  `r_Status` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '狀態',
  `r_Client` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '客戶',
  `r_Remark` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT '備註',
  `r_Time` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT '開始日期'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `tutorial`
--

CREATE TABLE `tutorial` (
  `t_Id` int(11) NOT NULL,
  `t_Title` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '標題',
  `t_User` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '創作者',
  `t_Content` text COLLATE utf8_unicode_ci NOT NULL COMMENT '內容',
  `t_DateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '日期'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `work`
--

CREATE TABLE `work` (
  `w_Id` int(11) NOT NULL,
  `w_Order` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '工單',
  `w_Model` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '機種',
  `w_Title` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '站別',
  `w_WorkTime` tinyint(3) NOT NULL COMMENT '工時',
  `w_OverWorkTime` tinyint(3) NOT NULL COMMENT '加班工時',
  `w_Quantity` tinyint(3) NOT NULL COMMENT '數量',
  `w_Remark` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT '備註',
  `w_DateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '日期'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`e_Id`);

--
-- 資料表索引 `repair`
--
ALTER TABLE `repair`
  ADD PRIMARY KEY (`r_Id`);

--
-- 資料表索引 `tutorial`
--
ALTER TABLE `tutorial`
  ADD PRIMARY KEY (`t_Id`);

--
-- 資料表索引 `work`
--
ALTER TABLE `work`
  ADD PRIMARY KEY (`w_Id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `employee`
--
ALTER TABLE `employee`
  MODIFY `e_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `repair`
--
ALTER TABLE `repair`
  MODIFY `r_Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `tutorial`
--
ALTER TABLE `tutorial`
  MODIFY `t_Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `work`
--
ALTER TABLE `work`
  MODIFY `w_Id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
