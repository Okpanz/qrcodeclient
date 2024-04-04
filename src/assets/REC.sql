-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.6.3-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;



-- Dumping structure for table recruitment.api_payments
CREATE TABLE IF NOT EXISTS `api_payments` (
  `idapi_payments` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `service_id` text DEFAULT NULL,
  `PaymentLogId` varchar(150) NOT NULL DEFAULT '',
  `CustReference` varchar(45) NOT NULL,
  `AlternateCustReference` varchar(45) DEFAULT NULL,
  `Amount` decimal(50,2) NOT NULL,
  `PaymentMethod` varchar(45) NOT NULL,
  `PaymentReference` text NOT NULL,
  `TerminalId` varchar(45) DEFAULT NULL,
  `ChannelName` varchar(45) DEFAULT NULL,
  `Location` text DEFAULT NULL,
  `PaymentDate` datetime NOT NULL,
  `InstitutionId` text DEFAULT NULL,
  `InstitutionName` text DEFAULT NULL,
  `BranchName` varchar(50) DEFAULT NULL,
  `BankName` varchar(50) DEFAULT NULL,
  `CustomerName` text DEFAULT NULL,
  `OtherCustomerInfo` text DEFAULT NULL,
  `ReceiptNo` varchar(45) DEFAULT NULL,
  `CollectionsAccount` varchar(45) DEFAULT NULL,
  `BankCode` varchar(45) DEFAULT '1',
  `CustomerAddress` varchar(200) DEFAULT NULL,
  `CustomerPhoneNumber` varchar(45) DEFAULT NULL,
  `DepositorName` text DEFAULT NULL,
  `DepositSlipNumber` varchar(45) DEFAULT NULL,
  `PaymentCurrency` varchar(45) DEFAULT NULL,
  `IsReversal` varchar(45) DEFAULT NULL,
  `ItemName` varchar(200) DEFAULT NULL,
  `ItemCode` varchar(45) DEFAULT NULL,
  `ItemAmount` decimal(50,2) DEFAULT NULL,
  `locked` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `revenue_id` int(11) DEFAULT NULL,
  `invoice_no` varchar(120) DEFAULT NULL,
  `ServiceUrl` text DEFAULT NULL,
  `ServiceUsername` text DEFAULT NULL,
  `ServicePassword` text DEFAULT NULL,
  `FtpUrl` text DEFAULT NULL,
  `FtpUsername` text DEFAULT NULL,
  `FtpPassword` text DEFAULT NULL,
  `IsRepeated` text DEFAULT NULL,
  `ProductGroupCode` text DEFAULT NULL,
  `SettlementDate` text DEFAULT NULL,
  `BranchNam` text DEFAULT NULL,
  `FeeName` text DEFAULT NULL,
  `ThirdPartyCode` text DEFAULT NULL,
  `LeadBankCode` text DEFAULT NULL,
  `LeadBankCbnCode` text DEFAULT NULL,
  `LeadBankName` text DEFAULT NULL,
  `CategoryCode` text DEFAULT NULL,
  `CategoryName` text DEFAULT NULL,
  `ItemQuantity` varchar(200) DEFAULT NULL,
  `OriginalPaymentLogId` varchar(200) DEFAULT NULL,
  `OriginalPaymentReference` varchar(200) DEFAULT NULL,
  `Teller` varchar(200) DEFAULT NULL,
  `synch_status` tinyint(1) NOT NULL DEFAULT 0,
  `found_taxpayer` text DEFAULT NULL,
  `found_invoice` text DEFAULT NULL,
  `settled` varchar(200) DEFAULT NULL,
  `logged_date` timestamp NULL DEFAULT current_timestamp(),
  `service_charge` decimal(50,2) NOT NULL DEFAULT 0.00,
  `amount_net` decimal(50,2) NOT NULL DEFAULT 0.00,
  `sources` varchar(255) DEFAULT NULL,
  `taxpayer_rin` varchar(255) DEFAULT NULL,
  `created_by` varchar(100) DEFAULT NULL,
  `payload` longtext DEFAULT NULL,
  `tax_office_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idapi_payments`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

-- Dumping data for table recruitment.api_payments: ~2 rows (approximately)
/*!40000 ALTER TABLE `api_payments` DISABLE KEYS */;
INSERT INTO `api_payments` (`idapi_payments`, `service_id`, `PaymentLogId`, `CustReference`, `AlternateCustReference`, `Amount`, `PaymentMethod`, `PaymentReference`, `TerminalId`, `ChannelName`, `Location`, `PaymentDate`, `InstitutionId`, `InstitutionName`, `BranchName`, `BankName`, `CustomerName`, `OtherCustomerInfo`, `ReceiptNo`, `CollectionsAccount`, `BankCode`, `CustomerAddress`, `CustomerPhoneNumber`, `DepositorName`, `DepositSlipNumber`, `PaymentCurrency`, `IsReversal`, `ItemName`, `ItemCode`, `ItemAmount`, `locked`, `revenue_id`, `invoice_no`, `ServiceUrl`, `ServiceUsername`, `ServicePassword`, `FtpUrl`, `FtpUsername`, `FtpPassword`, `IsRepeated`, `ProductGroupCode`, `SettlementDate`, `BranchNam`, `FeeName`, `ThirdPartyCode`, `LeadBankCode`, `LeadBankCbnCode`, `LeadBankName`, `CategoryCode`, `CategoryName`, `ItemQuantity`, `OriginalPaymentLogId`, `OriginalPaymentReference`, `Teller`, `synch_status`, `found_taxpayer`, `found_invoice`, `settled`, `logged_date`, `service_charge`, `amount_net`, `sources`, `taxpayer_rin`, `created_by`, `payload`, `tax_office_id`) VALUES
	(1, NULL, '3680286109', '1712071841328', 'wooa9dtcmg', 3000.00, 'card', '3680286109wooa9dtcmg', NULL, 'PAYSTACK', NULL, '2024-04-02 18:47:48', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, 'NGN', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'Successful', '2024-04-02 19:56:23', 0.00, 0.00, NULL, NULL, NULL, NULL, NULL),
	(2, NULL, '3680462598', '1712087913433', 'xwbvx5snv9', 3000.00, 'card', '3680462598xwbvx5snv9', NULL, 'PAYSTACK', NULL, '2024-04-02 19:59:42', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, 'NGN', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'Successful', '2024-04-02 21:01:52', 0.00, 0.00, NULL, NULL, NULL, NULL, NULL),
	(3, NULL, '3680479256', '1712088416585', 'dqsb2ndtlk', 3000.00, 'card', '3680479256dqsb2ndtlk', NULL, 'PAYSTACK', NULL, '2024-04-02 20:08:35', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, 'NGN', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'Successful', '2024-04-02 21:09:36', 0.00, 0.00, NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `api_payments` ENABLE KEYS */;

-- Dumping structure for table recruitment.applicant_education
CREATE TABLE IF NOT EXISTS `applicant_education` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_of_school` varchar(255) DEFAULT NULL,
  `from` int(11) DEFAULT 0,
  `to` int(11) DEFAULT 0,
  `school_type` varchar(50) DEFAULT NULL,
  `application_code` varchar(50) DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table recruitment.applicant_education: ~0 rows (approximately)
/*!40000 ALTER TABLE `applicant_education` DISABLE KEYS */;
INSERT INTO `applicant_education` (`id`, `name_of_school`, `from`, `to`, `school_type`, `application_code`, `created_on`) VALUES
	(5, 'federal polytechnic bida', 2019, 2021, 'HND', '1712087913433', '2024-04-03 04:21:59'),
	(6, 'FEDERAL POLYTECHNIC BIDA', 2019, 2021, 'HND/UPPER CREDIT', '1712121944769', '2024-04-04 08:38:59'),
	(7, 'FEDERAL POLYTECHNIC  IDAH', 2016, 2018, 'ND/LOWER CREDIT', '1712121944769', '2024-04-04 08:38:59'),
	(8, 'GSS UGBOKPO', 2007, 2013, 'WAEC/NECO', '1712121944769', '2024-04-04 08:38:59');
/*!40000 ALTER TABLE `applicant_education` ENABLE KEYS */;

-- Dumping structure for table recruitment.application_bio_data
CREATE TABLE IF NOT EXISTS `application_bio_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `firstName` varchar(50) DEFAULT NULL,
  `middleName` varchar(50) DEFAULT NULL,
  `surname` varchar(50) DEFAULT NULL,
  `other_names` varchar(50) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `g` varchar(50) DEFAULT NULL,
  `ms` varchar(50) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `soo` varchar(255) DEFAULT NULL,
  `lga` varchar(255) DEFAULT NULL,
  `ward` varchar(255) DEFAULT NULL,
  `pob` varchar(255) DEFAULT NULL,
  `home_town` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `village` varchar(255) DEFAULT NULL,
  `physically_challenged` tinyint(1) DEFAULT 0,
  `extra_curricula_activities` text DEFAULT NULL,
  `summary_of_profile` text DEFAULT NULL,
  `process_number` varchar(255) DEFAULT NULL,
  `application_code` varchar(255) DEFAULT NULL,
  `application_date` date DEFAULT current_timestamp(),
  `application_status` tinyint(4) DEFAULT 0,
  `employed` tinyint(4) DEFAULT 0,
  `children_or_child` tinyint(4) DEFAULT 0,
  `next_of_kin` tinyint(4) DEFAULT 0,
  `present_employee_info` tinyint(4) DEFAULT 0,
  `work_experience` tinyint(4) DEFAULT 0,
  `position_applied_fo` varchar(50) DEFAULT NULL,
  `department` varchar(50) DEFAULT NULL,
  `age` varchar(50) DEFAULT NULL,
  `temporary_address` varchar(50) DEFAULT NULL,
  `nationality` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `town` varchar(50) DEFAULT NULL,
  `boys` varchar(50) DEFAULT NULL,
  `bAges` varchar(50) DEFAULT NULL,
  `girls` varchar(50) DEFAULT NULL,
  `gAges` varchar(50) DEFAULT NULL,
  `hight` double DEFAULT NULL,
  `weight` double DEFAULT NULL,
  `detail_of_health` text DEFAULT NULL,
  `disability` text DEFAULT NULL,
  `more_than_five_days` text DEFAULT NULL,
  `teams_condition` tinyint(4) DEFAULT NULL,
  `position_held` text DEFAULT NULL,
  `details_other_training` text DEFAULT NULL,
  `professional_qualification_obtained` text DEFAULT NULL,
  `ask_to_resign` tinyint(4) DEFAULT NULL,
  `circumstance` text DEFAULT NULL,
  `most_recent_post` text DEFAULT NULL,
  `doc1` varchar(50) DEFAULT NULL,
  `doc2` varchar(50) DEFAULT NULL,
  `doc3` varchar(50) DEFAULT NULL,
  `doc4` varchar(50) DEFAULT NULL,
  `doc5` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table recruitment.application_bio_data: ~4 rows (approximately)
/*!40000 ALTER TABLE `application_bio_data` DISABLE KEYS */;
INSERT INTO `application_bio_data` (`id`, `name`, `firstName`, `middleName`, `surname`, `other_names`, `phone`, `email`, `dob`, `g`, `ms`, `address`, `soo`, `lga`, `ward`, `pob`, `home_town`, `district`, `village`, `physically_challenged`, `extra_curricula_activities`, `summary_of_profile`, `process_number`, `application_code`, `application_date`, `application_status`, `employed`, `children_or_child`, `next_of_kin`, `present_employee_info`, `work_experience`, `position_applied_fo`, `department`, `age`, `temporary_address`, `nationality`, `country`, `town`, `boys`, `bAges`, `girls`, `gAges`, `hight`, `weight`, `detail_of_health`, `disability`, `more_than_five_days`, `teams_condition`, `position_held`, `details_other_training`, `professional_qualification_obtained`, `ask_to_resign`, `circumstance`, `most_recent_post`, `doc1`, `doc2`, `doc3`, `doc4`, `doc5`) VALUES
	(5, 'JUDE PAUL IKWOBE ', 'JUDE', 'PAUL', 'IKWOBE ', NULL, '08122334744', 'ikwobepaul@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, '1712071841328', '2024-04-02', 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(6, 'DONE TEST TEST', 'DONE', 'TEST', 'TEST', NULL, '09122332244', 'test@gmail.com', '1990-04-12', NULL, 'Single', 'SHADADI YORUBA MOSQUE', NULL, NULL, NULL, 'SHADADI YORUBA MOSQUE', NULL, NULL, NULL, 0, NULL, NULL, NULL, '1712087913433', '2024-04-02', 0, 0, 0, 0, 0, 0, 'Assistant Lecturer BSc. Practical Geograph ', 'Assistant Lecturer', '30', 'SHADADI YORUBA MOSQUE', 'NIGERIA', 'Nigeria', 'KUJE', '3', '13', '2', '15', 3994, 3563, 'NONE', 'NO', 'No', 0, 'NODE', 'HELLO', 'HELLO', 1, 'hELLO JUSO', 'HHGGG', '86400-1712190008546.jpeg', '86400-1712190422276.pdf', '86400-1712190685002.pdf', '86400-1712190736389.pdf', '86400-1712190746733.pdf'),
	(7, 'EATER EATER EATER', 'EATER', 'EATER', 'EATER', NULL, '0912346754', 'easter@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, '1712088416585', '2024-04-02', 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(8, 'CALEB PAUL IKWOBE', 'CALEB', 'PAUL', 'IKWOBE', NULL, '08123433843', 'calebpaul@gmil.com', '2024-04-06', NULL, 'Single', 'OFOKE OJOPE', NULL, NULL, NULL, 'OFOKE OJOPE', NULL, NULL, NULL, 0, NULL, NULL, NULL, '1712121944769', '2024-04-03', 0, 0, 0, 0, 0, 0, 'Lecturer III History', 'Government', '30', 'OFOKE OJOPE', 'NIGERIA', 'Nigeria', 'OFOKE OJOPE', '0', '0', '0', '0', 38, 45, 'NONE', 'NO', 'No', 0, 'NONE', 'NONE', 'NONE', 1, '', 'NONE', '86400-1712218533631.jpeg', '86400-1712217373123.pdf', '86400-1712217382014.pdf', '86400-1712217394834.pdf', '86400-1712217403402.pdf'),
	(9, 'ikwobe  PAUL', 'ikwobe', '', 'PAUL', NULL, '08122332233', 'ikwobejude@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, '1712125083082', '2024-04-03', 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `application_bio_data` ENABLE KEYS */;

-- Dumping structure for table recruitment.assessments
CREATE TABLE IF NOT EXISTS `assessments` (
  `assessment_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `assessment_ref` varchar(50) DEFAULT NULL,
  `assessment_date` timestamp NULL DEFAULT current_timestamp(),
  `tax_payer_type` varchar(110) DEFAULT NULL COMMENT 'Companies Individuals ',
  `tax_payer_rin` varchar(50) DEFAULT NULL COMMENT 'Companies Individuals ',
  `tax_payer_name` varchar(100) DEFAULT NULL,
  `asset_type` varchar(110) DEFAULT NULL,
  `asset_rin` varchar(110) DEFAULT NULL COMMENT 'Business Buildings Vehicles ',
  `profile_ref` varchar(110) DEFAULT NULL,
  `assessment_rule` varchar(110) DEFAULT NULL,
  `tax_year` int(4) DEFAULT NULL,
  `assessment_amount` decimal(50,2) NOT NULL DEFAULT 0.00,
  `assessment_amount_remaining` decimal(50,2) NOT NULL DEFAULT 0.00,
  `assessment_amount_paid` decimal(50,2) NOT NULL DEFAULT 0.00,
  `settlement_due_date` date DEFAULT NULL,
  `settlement_status` varchar(15) DEFAULT '0' COMMENT '1=paid, 0=not paid and due',
  `settlement_date` datetime DEFAULT NULL,
  `settlement_method` varchar(50) DEFAULT NULL,
  `service_id` varchar(150) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_by` varchar(255) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `first_reminder_date` date DEFAULT NULL,
  `second_reminder_date` date DEFAULT NULL,
  `third_reminder_date` date DEFAULT NULL,
  `fourth_reminder_date` date DEFAULT NULL,
  `date_move_defaulter` date DEFAULT NULL,
  `batch_number` varchar(114) DEFAULT NULL,
  `cancelled` tinyint(1) NOT NULL DEFAULT 0,
  `source` varchar(255) DEFAULT NULL,
  `tax_month` varchar(50) DEFAULT NULL,
  `waiver_amount` decimal(50,2) NOT NULL DEFAULT 0.00,
  `wavier_date` datetime DEFAULT NULL,
  `wavier_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '1=approved, 0=not approved ',
  `assessment_item` varchar(255) DEFAULT NULL,
  `assessment_note` varchar(255) DEFAULT NULL,
  `asset_name` varchar(255) DEFAULT NULL,
  `tax_office_id` int(11) DEFAULT NULL,
  `street_id` int(11) DEFAULT NULL,
  `ward_id` int(11) DEFAULT NULL,
  `zone_id` int(11) DEFAULT NULL,
  `invoice_number` varchar(45) DEFAULT NULL,
  `case_type` varchar(50) DEFAULT NULL,
  `case_process` varchar(50) DEFAULT NULL,
  `approve_and_append_signature` tinyint(2) DEFAULT 0,
  `approveBy` varchar(50) DEFAULT NULL,
  `approvedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`assessment_id`) USING BTREE,
  UNIQUE KEY `tax_payer_rin` (`tax_payer_rin`,`asset_rin`,`service_id`,`invoice_number`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table recruitment.assessments: ~9 rows (approximately)
/*!40000 ALTER TABLE `assessments` DISABLE KEYS */;
INSERT INTO `assessments` (`assessment_id`, `assessment_ref`, `assessment_date`, `tax_payer_type`, `tax_payer_rin`, `tax_payer_name`, `asset_type`, `asset_rin`, `profile_ref`, `assessment_rule`, `tax_year`, `assessment_amount`, `assessment_amount_remaining`, `assessment_amount_paid`, `settlement_due_date`, `settlement_status`, `settlement_date`, `settlement_method`, `service_id`, `created_by`, `created_at`, `updated_by`, `updated_at`, `first_reminder_date`, `second_reminder_date`, `third_reminder_date`, `fourth_reminder_date`, `date_move_defaulter`, `batch_number`, `cancelled`, `source`, `tax_month`, `waiver_amount`, `wavier_date`, `wavier_status`, `assessment_item`, `assessment_note`, `asset_name`, `tax_office_id`, `street_id`, `ward_id`, `zone_id`, `invoice_number`, `case_type`, `case_process`, `approve_and_append_signature`, `approveBy`, `approvedOn`) VALUES
	(82, 'jcx9q5u6rv', '2024-04-02 19:31:07', NULL, '1712071841328', NULL, NULL, NULL, '8lk479evuiwrjhk', NULL, 2024, 3000.00, 0.00, 0.00, NULL, '0', NULL, NULL, '1698460693', NULL, '2024-04-02 19:31:07', NULL, '2024-04-02 19:31:07', NULL, NULL, NULL, NULL, NULL, NULL, 0, 'APPLICATION FEE', '4', 0.00, NULL, 0, 'APPLICATION FEE', 'https://checkout.paystack.com/8lk479evuiwrjhk', NULL, NULL, NULL, NULL, NULL, 'jcx9q5u6rv', 'APPLICATION FEE', NULL, 0, NULL, NULL),
	(83, '8cmwfx3ojl', '2024-04-02 19:31:15', NULL, '1712071841328', NULL, NULL, NULL, 'y2oo2wk23dwwj6u', NULL, 2024, 3000.00, 0.00, 0.00, NULL, '0', NULL, NULL, '1698460693', NULL, '2024-04-02 19:31:15', NULL, '2024-04-02 19:31:15', NULL, NULL, NULL, NULL, NULL, NULL, 0, 'APPLICATION FEE', '4', 0.00, NULL, 0, 'APPLICATION FEE', 'https://checkout.paystack.com/y2oo2wk23dwwj6u', NULL, NULL, NULL, NULL, NULL, '8cmwfx3ojl', 'APPLICATION FEE', NULL, 0, NULL, NULL),
	(84, 'r4wxovjpna', '2024-04-02 19:33:36', NULL, '1712071841328', NULL, NULL, NULL, 'd1cpf0dsykkjxa3', NULL, 2024, 3000.00, 0.00, 0.00, NULL, '0', NULL, NULL, '1698460693', NULL, '2024-04-02 19:33:36', NULL, '2024-04-02 19:33:36', NULL, NULL, NULL, NULL, NULL, NULL, 0, 'APPLICATION FEE', '4', 0.00, NULL, 0, 'APPLICATION FEE', 'https://checkout.paystack.com/d1cpf0dsykkjxa3', NULL, NULL, NULL, NULL, NULL, 'r4wxovjpna', 'APPLICATION FEE', NULL, 0, NULL, NULL),
	(85, 'wooa9dtcmg', '2024-04-02 19:34:14', NULL, '1712071841328', NULL, NULL, NULL, 'r183cpp9od6uvtw', NULL, 2024, 3000.00, 0.00, 3000.00, NULL, '1', '2024-04-02 18:56:23', NULL, '1698460693', NULL, '2024-04-02 19:34:14', NULL, '2024-04-02 19:34:14', NULL, NULL, NULL, NULL, NULL, NULL, 0, 'APPLICATION FEE', '4', 0.00, NULL, 0, 'APPLICATION FEE', 'https://checkout.paystack.com/r183cpp9od6uvtw', NULL, NULL, NULL, NULL, NULL, 'wooa9dtcmg', 'APPLICATION FEE', NULL, 0, NULL, NULL),
	(86, 'xwbvx5snv9', '2024-04-02 20:59:35', NULL, '1712087913433', NULL, NULL, NULL, 'smm36jp0wgrxxfo', NULL, 2024, 3000.00, 0.00, 3000.00, NULL, '1', '2024-04-02 20:01:52', NULL, '1698460693', NULL, '2024-04-02 20:59:35', NULL, '2024-04-02 20:59:35', NULL, NULL, NULL, NULL, NULL, NULL, 0, 'APPLICATION FEE', '4', 0.00, NULL, 0, 'APPLICATION FEE', 'https://checkout.paystack.com/smm36jp0wgrxxfo', NULL, NULL, NULL, NULL, NULL, 'xwbvx5snv9', 'APPLICATION FEE', NULL, 0, NULL, NULL),
	(87, 'dqsb2ndtlk', '2024-04-02 21:07:48', NULL, '1712088416585', NULL, NULL, NULL, 'wix8pmrsb0ztpt0', NULL, 2024, 3000.00, 0.00, 3000.00, NULL, '1', '2024-04-02 20:09:36', NULL, '1698460693', NULL, '2024-04-02 21:07:48', NULL, '2024-04-02 21:07:48', NULL, NULL, NULL, NULL, NULL, NULL, 0, 'APPLICATION FEE', '4', 0.00, NULL, 0, 'APPLICATION FEE', 'https://checkout.paystack.com/wix8pmrsb0ztpt0', NULL, NULL, NULL, NULL, NULL, 'dqsb2ndtlk', 'APPLICATION FEE', NULL, 0, NULL, NULL),
	(88, 'kp7gi9jv72', '2024-04-03 06:26:22', NULL, '1712121944769', NULL, NULL, NULL, 'lds6gimejzwas6t', NULL, 2024, 3000.00, 0.00, 0.00, NULL, '0', NULL, NULL, '1698460693', NULL, '2024-04-03 06:26:22', NULL, '2024-04-03 06:26:22', NULL, NULL, NULL, NULL, NULL, NULL, 0, 'APPLICATION FEE', '4', 0.00, NULL, 0, 'APPLICATION FEE', 'https://checkout.paystack.com/lds6gimejzwas6t', NULL, NULL, NULL, NULL, NULL, 'kp7gi9jv72', 'APPLICATION FEE', NULL, 0, NULL, NULL),
	(89, 'emuh8c6eqv', '2024-04-03 07:18:40', NULL, '1712125083082', NULL, NULL, NULL, 'szh64xt7qpj6w0k', NULL, 2024, 3000.00, 0.00, 0.00, NULL, '0', NULL, NULL, '1698460693', NULL, '2024-04-03 07:18:40', NULL, '2024-04-03 07:18:40', NULL, NULL, NULL, NULL, NULL, NULL, 0, 'APPLICATION FEE', '4', 0.00, NULL, 0, 'APPLICATION FEE', 'https://checkout.paystack.com/szh64xt7qpj6w0k', NULL, NULL, NULL, NULL, NULL, 'emuh8c6eqv', 'APPLICATION FEE', NULL, 0, NULL, NULL),
	(90, 'x0iscm8c5f', '2024-04-03 07:19:08', NULL, '1712125083082', NULL, NULL, NULL, '59939yx6z5i2mf3', NULL, 2024, 3000.00, 0.00, 0.00, NULL, '0', NULL, NULL, '1698460693', NULL, '2024-04-03 07:19:08', NULL, '2024-04-03 07:19:08', NULL, NULL, NULL, NULL, NULL, NULL, 0, 'APPLICATION FEE', '4', 0.00, NULL, 0, 'APPLICATION FEE', 'https://checkout.paystack.com/59939yx6z5i2mf3', NULL, NULL, NULL, NULL, NULL, 'x0iscm8c5f', 'APPLICATION FEE', NULL, 0, NULL, NULL);
/*!40000 ALTER TABLE `assessments` ENABLE KEYS */;

-- Dumping structure for table recruitment.assessment_item_invoices
CREATE TABLE IF NOT EXISTS `assessment_item_invoices` (
  `id_assessment_item_invoices` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ref_no` varchar(100) DEFAULT NULL,
  `taxpayer_rin` varchar(45) DEFAULT NULL,
  `assessment_item_id` bigint(20) DEFAULT NULL,
  `case_type` varchar(50) DEFAULT NULL,
  `case_process` varchar(50) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `amount` decimal(50,2) DEFAULT NULL,
  `date_log` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `invoice_number` varchar(45) DEFAULT NULL,
  `asset_rin` varchar(45) DEFAULT NULL,
  `locked` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `paid` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `service_id` varchar(45) DEFAULT NULL,
  `created_by` varchar(55) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `expiration_length_days` int(11) DEFAULT 0,
  `expiration_date` date DEFAULT NULL,
  `tax_office_id` int(11) DEFAULT NULL,
  `assessment_ref` varchar(50) DEFAULT NULL,
  `street_id` int(11) DEFAULT NULL,
  `profile_ref` varchar(50) DEFAULT NULL,
  `item_category` varchar(255) DEFAULT NULL,
  `revenue_stream` varchar(255) DEFAULT NULL,
  `tax_month` varchar(255) DEFAULT NULL,
  `tax_year` int(5) DEFAULT NULL,
  `print` tinyint(1) NOT NULL DEFAULT 0,
  `compulsory` tinyint(1) DEFAULT 0,
  `qty` int(11) DEFAULT NULL,
  `unit_price` decimal(50,2) DEFAULT 0.00,
  `approve_and_append_signature` tinyint(2) DEFAULT 0,
  PRIMARY KEY (`id_assessment_item_invoices`) USING BTREE,
  UNIQUE KEY `DUPLICATE_REF_NUMBER` (`ref_no`,`service_id`,`id_assessment_item_invoices`) USING BTREE,
  UNIQUE KEY `duplicate_item_name` (`assessment_item_id`,`asset_rin`,`invoice_number`,`taxpayer_rin`) USING BTREE,
  KEY `RTININ` (`ref_no`,`taxpayer_rin`,`assessment_item_id`,`invoice_number`,`asset_rin`,`locked`,`paid`,`service_id`,`id_assessment_item_invoices`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=356 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=COMPACT;

-- Dumping data for table recruitment.assessment_item_invoices: ~9 rows (approximately)
/*!40000 ALTER TABLE `assessment_item_invoices` DISABLE KEYS */;
INSERT INTO `assessment_item_invoices` (`id_assessment_item_invoices`, `ref_no`, `taxpayer_rin`, `assessment_item_id`, `case_type`, `case_process`, `description`, `amount`, `date_log`, `invoice_number`, `asset_rin`, `locked`, `paid`, `service_id`, `created_by`, `created_at`, `expiration_length_days`, `expiration_date`, `tax_office_id`, `assessment_ref`, `street_id`, `profile_ref`, `item_category`, `revenue_stream`, `tax_month`, `tax_year`, `print`, `compulsory`, `qty`, `unit_price`, `approve_and_append_signature`) VALUES
	(347, 'luiptd5m_17120826677380_5069041972426527', '1712071841328', NULL, NULL, NULL, 'APPLICATION FEE', 3000.00, '2024-04-02 19:31:07', 'jcx9q5u6rv', '1712071841328', 0, 0, '1698460693', NULL, '2024-04-02 19:31:07', 0, NULL, NULL, 'jcx9q5u6rv', NULL, '8lk479evuiwrjhk', 'APPLICATION FEE', 'APPLICATION FEE', '4', 2024, 0, 0, NULL, 0.00, 0),
	(348, 'luiptjhc_17120826759360_2040372176044163', '1712071841328', NULL, NULL, NULL, 'APPLICATION FEE', 3000.00, '2024-04-02 19:31:15', '8cmwfx3ojl', '1712071841328', 0, 0, '1698460693', NULL, '2024-04-02 19:31:15', 0, NULL, NULL, '8cmwfx3ojl', NULL, 'y2oo2wk23dwwj6u', 'APPLICATION FEE', 'APPLICATION FEE', '4', 2024, 0, 0, NULL, 0.00, 0),
	(349, 'luipwjo4_17120828161480_139365232838341', '1712071841328', NULL, NULL, NULL, 'APPLICATION FEE', 3000.00, '2024-04-02 19:33:36', 'r4wxovjpna', '1712071841328', 0, 0, '1698460693', NULL, '2024-04-02 19:33:36', 0, NULL, NULL, 'r4wxovjpna', NULL, 'd1cpf0dsykkjxa3', 'APPLICATION FEE', 'APPLICATION FEE', '4', 2024, 0, 0, NULL, 0.00, 0),
	(350, 'luipxcxf_17120828540670_6191984853175949', '1712071841328', NULL, NULL, NULL, 'APPLICATION FEE', 3000.00, '2024-04-02 19:56:23', 'wooa9dtcmg', '1712071841328', 1, 1, '1698460693', NULL, '2024-04-02 19:34:14', 0, NULL, NULL, 'wooa9dtcmg', NULL, 'r183cpp9od6uvtw', 'APPLICATION FEE', 'APPLICATION FEE', '4', 2024, 0, 0, NULL, 0.00, 0),
	(351, 'luisz4fl_17120879752170_8950623876487225', '1712087913433', NULL, NULL, NULL, 'APPLICATION FEE', 3000.00, '2024-04-02 21:01:52', 'xwbvx5snv9', '1712087913433', 1, 1, '1698460693', NULL, '2024-04-02 20:59:35', 0, NULL, NULL, 'xwbvx5snv9', NULL, 'smm36jp0wgrxxfo', 'APPLICATION FEE', 'APPLICATION FEE', '4', 2024, 0, 0, NULL, 0.00, 0),
	(352, 'luit9ow4_17120884682920_27969400431735525', '1712088416585', NULL, NULL, NULL, 'APPLICATION FEE', 3000.00, '2024-04-02 21:09:36', 'dqsb2ndtlk', '1712088416585', 1, 1, '1698460693', NULL, '2024-04-02 21:07:48', 0, NULL, NULL, 'dqsb2ndtlk', NULL, 'wix8pmrsb0ztpt0', 'APPLICATION FEE', 'APPLICATION FEE', '4', 2024, 0, 0, NULL, 0.00, 0),
	(353, 'lujd80i4_17121219823480_7182915799313438', '1712121944769', NULL, NULL, NULL, 'APPLICATION FEE', 3000.00, '2024-04-03 06:26:22', 'kp7gi9jv72', '1712121944769', 0, 0, '1698460693', NULL, '2024-04-03 06:26:22', 0, NULL, NULL, 'kp7gi9jv72', NULL, 'lds6gimejzwas6t', 'APPLICATION FEE', 'APPLICATION FEE', '4', 2024, 0, 0, NULL, 0.00, 0),
	(354, 'lujf39o1_17121251201770_0634886075631158', '1712125083082', NULL, NULL, NULL, 'APPLICATION FEE', 3000.00, '2024-04-03 07:18:40', 'emuh8c6eqv', '1712125083082', 0, 0, '1698460693', NULL, '2024-04-03 07:18:40', 0, NULL, NULL, 'emuh8c6eqv', NULL, 'szh64xt7qpj6w0k', 'APPLICATION FEE', 'APPLICATION FEE', '4', 2024, 0, 0, NULL, 0.00, 0),
	(355, 'lujf3vcm_17121251482780_5841922664439958', '1712125083082', NULL, NULL, NULL, 'APPLICATION FEE', 3000.00, '2024-04-03 07:19:08', 'x0iscm8c5f', '1712125083082', 0, 0, '1698460693', NULL, '2024-04-03 07:19:08', 0, NULL, NULL, 'x0iscm8c5f', NULL, '59939yx6z5i2mf3', 'APPLICATION FEE', 'APPLICATION FEE', '4', 2024, 0, 0, NULL, 0.00, 0);
/*!40000 ALTER TABLE `assessment_item_invoices` ENABLE KEYS */;

-- Dumping structure for table recruitment.child_info
CREATE TABLE IF NOT EXISTS `child_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `application_code` varchar(50) NOT NULL,
  `fullName` varchar(200) DEFAULT NULL,
  `gender` varchar(200) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Dumping data for table recruitment.child_info: ~0 rows (approximately)
/*!40000 ALTER TABLE `child_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `child_info` ENABLE KEYS */;

-- Dumping structure for table recruitment.conferences
CREATE TABLE IF NOT EXISTS `conferences` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `conference_name` varchar(50) DEFAULT NULL,
  `paper_presentation` varchar(50) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `application_code` varchar(100) DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT current_timestamp(),
  `to` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table recruitment.conferences: ~0 rows (approximately)
/*!40000 ALTER TABLE `conferences` DISABLE KEYS */;
INSERT INTO `conferences` (`id`, `conference_name`, `paper_presentation`, `year`, `application_code`, `created_on`, `to`) VALUES
	(8, 'SRUM BOY', 'SCRUM DEVELOPER', 2023, '1712087913433', '2024-04-03 04:21:59', 2023),
	(9, 'SCRUM BODY', 'SCRUM DEVELOPER', 2023, '1712121944769', '2024-04-04 08:38:59', 2024),
	(10, 'ALLIENCE GRUOP', 'COMMUNICATION SKILLS', 2023, '1712121944769', '2024-04-04 08:38:59', 2024);
/*!40000 ALTER TABLE `conferences` ENABLE KEYS */;

-- Dumping structure for table recruitment.departments
CREATE TABLE IF NOT EXISTS `departments` (
  `departments_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `department` varchar(150) DEFAULT NULL,
  `department_code` varchar(45) DEFAULT NULL,
  `ministries_id` bigint(20) unsigned DEFAULT NULL,
  `service_id` varchar(150) NOT NULL,
  `mark_delete` tinyint(1) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `created_by` varchar(100) DEFAULT NULL,
  `updated_by` varchar(100) DEFAULT NULL,
  `head_employee_no` varchar(120) DEFAULT NULL,
  `max_population` int(11) NOT NULL DEFAULT 0,
  `min_population` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`departments_id`) USING BTREE,
  UNIQUE KEY `duplicate_department` (`departments_id`) USING BTREE,
  UNIQUE KEY `duplicate department per service` (`department`,`service_id`,`ministries_id`) USING BTREE,
  KEY `service_id` (`service_id`) USING BTREE,
  KEY `ministries_id` (`ministries_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=339 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table recruitment.departments: ~0 rows (approximately)
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;

-- Dumping structure for table recruitment.doc
CREATE TABLE IF NOT EXISTS `doc` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `doc_id` varchar(50) DEFAULT NULL,
  `doc_title` varchar(50) DEFAULT NULL,
  `doc_url` varchar(50) DEFAULT NULL,
  `application_code` varchar(50) DEFAULT NULL,
  `uploaded_on` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table recruitment.doc: ~6 rows (approximately)
/*!40000 ALTER TABLE `doc` DISABLE KEYS */;
INSERT INTO `doc` (`id`, `doc_id`, `doc_title`, `doc_url`, `application_code`, `uploaded_on`) VALUES
	(7, 'LUKHQ1ZF', 'Passport', '86400-1712190008546.jpeg', '1712087913433', '2024-04-04 00:20:08'),
	(8, 'LUKHYX3J', 'Primary school certificate', '86400-1712190422276.pdf', '1712087913433', '2024-04-04 00:27:02'),
	(9, 'LUKI4JU3', 'Secondary Certificate', '86400-1712190685002.pdf', '1712087913433', '2024-04-04 00:31:25'),
	(10, 'LUKI5NGU', 'University Certificate', '86400-1712190736389.pdf', '1712087913433', '2024-04-04 00:32:16'),
	(11, 'LUKI5VG3', 'Other Documents', '86400-1712190746733.pdf', '1712087913433', '2024-04-04 00:32:26'),
	(12, 'LUKY0415', 'Passport', '86400-1712217351569.jpeg', '1712121944769', '2024-04-04 07:55:51'),
	(13, 'LUKY0KK2', 'Primary school certificate', '86400-1712217373123.pdf', '1712121944769', '2024-04-04 07:56:13'),
	(14, 'LUKY0RE7', 'Secondary Certificate', '86400-1712217382014.pdf', '1712121944769', '2024-04-04 07:56:22'),
	(15, 'LUKY119E', 'University Certificate', '86400-1712217394834.pdf', '1712121944769', '2024-04-04 07:56:34'),
	(16, 'LUKY17VA', 'Other Documents', '86400-1712217403402.pdf', '1712121944769', '2024-04-04 07:56:43'),
	(17, 'LUKYPG0V', 'Passport', '86400-1712218533631.jpeg', '1712121944769', '2024-04-04 08:15:33');
/*!40000 ALTER TABLE `doc` ENABLE KEYS */;

-- Dumping structure for table recruitment.next_of_kin
CREATE TABLE IF NOT EXISTS `next_of_kin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(200) DEFAULT NULL,
  `occupation` varchar(200) DEFAULT NULL,
  `home_address` varchar(200) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `email_address` varchar(100) DEFAULT NULL,
  `application_code` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table recruitment.next_of_kin: ~0 rows (approximately)
/*!40000 ALTER TABLE `next_of_kin` DISABLE KEYS */;
INSERT INTO `next_of_kin` (`id`, `fullName`, `occupation`, `home_address`, `phone_number`, `email_address`, `application_code`) VALUES
	(1, 'PAUL SAMUEL', NULL, 'SHADADI YORUBA MOSQUE', NULL, NULL, '1712087913433'),
	(2, 'SAMUEL PAUL', NULL, 'OFOKE OJOPE', NULL, NULL, '1712121944769');
/*!40000 ALTER TABLE `next_of_kin` ENABLE KEYS */;

-- Dumping structure for table recruitment.present_employment_info
CREATE TABLE IF NOT EXISTS `present_employment_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `occupation` varchar(50) DEFAULT NULL,
  `present_position` varchar(50) DEFAULT NULL,
  `present_salary` decimal(20,2) NOT NULL DEFAULT 0.00,
  `present_employer` varchar(200) DEFAULT NULL,
  `employers_address` text DEFAULT NULL,
  `application_code` varchar(50) DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Dumping data for table recruitment.present_employment_info: ~0 rows (approximately)
/*!40000 ALTER TABLE `present_employment_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `present_employment_info` ENABLE KEYS */;

-- Dumping structure for table recruitment.progress
CREATE TABLE IF NOT EXISTS `progress` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `application_code` varchar(50) NOT NULL DEFAULT '0',
  `step` int(11) NOT NULL DEFAULT 0,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updates_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table recruitment.progress: ~4 rows (approximately)
/*!40000 ALTER TABLE `progress` DISABLE KEYS */;
INSERT INTO `progress` (`id`, `application_code`, `step`, `created_on`, `updates_on`) VALUES
	(3, '1712071841328', 1, '2024-04-02 16:30:41', '2024-04-02 16:30:41'),
	(4, '1712087913433', 8, '2024-04-02 20:58:33', '2024-04-04 01:46:37'),
	(5, '1712088416585', 1, '2024-04-02 21:06:56', '2024-04-02 21:06:56'),
	(6, '1712121944769', 8, '2024-04-03 06:25:44', '2024-04-04 09:15:33'),
	(7, '1712125083082', 1, '2024-04-03 07:18:03', '2024-04-03 07:18:03');
/*!40000 ALTER TABLE `progress` ENABLE KEYS */;

-- Dumping structure for table recruitment.reference
CREATE TABLE IF NOT EXISTS `reference` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `application_code` varchar(50) DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table recruitment.reference: ~0 rows (approximately)
/*!40000 ALTER TABLE `reference` DISABLE KEYS */;
INSERT INTO `reference` (`id`, `name`, `address`, `phone`, `status`, `application_code`, `created_on`) VALUES
	(1, 'PAUL IKWOBE JUDE', 'SHADADI YOURUBA MOSQUE', '0838484844', 'DEVELOPER', '1712087913433', NULL),
	(2, 'PAUL IKWOBE', 'DAFARA JUNCTION KUJE ABUJA', '09177364664', 'FATHER', '1712121944769', NULL),
	(3, 'PAUL GIDEON', 'DAFARA JUNCTION ABUJA', '08125566355', 'BROTHER', '1712121944769', NULL);
/*!40000 ALTER TABLE `reference` ENABLE KEYS */;

-- Dumping structure for table recruitment.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `group_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `user_phone` varchar(20) DEFAULT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `service_id` varchar(100) DEFAULT NULL,
  `service_code` varchar(10) DEFAULT NULL,
  `allowmobilelogin` tinyint(1) NOT NULL DEFAULT 0,
  `allowdesktoplogin` tinyint(1) NOT NULL DEFAULT 0,
  `first_use` tinyint(1) NOT NULL DEFAULT 1 COMMENT '1 for new users, 0 for old user',
  `prev_username` varchar(45) DEFAULT NULL,
  `updated_by` varchar(255) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `inactive` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `created_by` varchar(120) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `reset_token` longtext DEFAULT NULL,
  `reset_expiry_date` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `organization_id` varchar(150) DEFAULT NULL,
  `organization_code` varchar(4) DEFAULT NULL,
  `agency_id` int(11) DEFAULT NULL,
  `tax_office_id` int(11) DEFAULT NULL,
  `user_code` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `middlename` varchar(255) DEFAULT NULL,
  `ministry_admin` varchar(40) NOT NULL DEFAULT '0',
  `admin_ministry_id` varchar(255) DEFAULT NULL,
  `ministry_supervisor` varchar(255) DEFAULT NULL,
  `supervisor_ministry_id` int(11) DEFAULT NULL,
  `is_admin` varchar(255) DEFAULT NULL,
  `is_supervisor` varchar(255) DEFAULT NULL,
  `registered_on` varchar(255) DEFAULT NULL,
  `category_id` varchar(50) DEFAULT NULL,
  `business_id` int(11) DEFAULT NULL,
  `department_id` int(11) DEFAULT NULL,
  `lga_id` int(11) DEFAULT NULL,
  `service_logo` blob DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `uniqusername` (`username`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table recruitment.users: ~5 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `group_id`, `name`, `username`, `password`, `email`, `user_phone`, `remember_token`, `service_id`, `service_code`, `allowmobilelogin`, `allowdesktoplogin`, `first_use`, `prev_username`, `updated_by`, `updated_at`, `inactive`, `created_by`, `created_at`, `reset_token`, `reset_expiry_date`, `organization_id`, `organization_code`, `agency_id`, `tax_office_id`, `user_code`, `surname`, `firstname`, `middlename`, `ministry_admin`, `admin_ministry_id`, `ministry_supervisor`, `supervisor_ministry_id`, `is_admin`, `is_supervisor`, `registered_on`, `category_id`, `business_id`, `department_id`, `lga_id`, `service_logo`) VALUES
	(6, 10, 'JUDE PAUL IKWOBE ', 'ikwobepaul@gmail.com', '$2a$10$bLmzD3a0T169dNPp.njKMOLcHlSKxQWIpr4RM9lJmiyJSjyTFr8ZC', 'ikwobepaul@gmail.com', '08122334744', NULL, NULL, NULL, 0, 0, 1, NULL, NULL, NULL, 1, NULL, '2024-04-02 16:30:41', NULL, NULL, NULL, NULL, NULL, NULL, '1712071841328', 'IKWOBE ', 'JUDE', 'PAUL', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(7, 10, 'DONE TEST TEST', 'test@gmail.com', '$2a$10$zm4rZAW3el74L1CuaXhF9eou4Ee.lC6/zlPbTiMlTMSwTrrC.TAz6', 'test@gmail.com', '09122332244', NULL, NULL, NULL, 0, 0, 1, NULL, NULL, NULL, 1, NULL, '2024-04-02 20:58:33', NULL, NULL, NULL, NULL, NULL, NULL, '1712087913433', 'TEST', 'DONE', 'TEST', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(8, 10, 'EATER EATER EATER', 'easter@gmail.com', '$2a$10$AGVIRJzAWF3goYLTu9Y5h.TiYRs9YmSCYM6OplfQssLUZ87aa1E9a', 'easter@gmail.com', '0912346754', NULL, NULL, NULL, 0, 0, 1, NULL, NULL, NULL, 1, NULL, '2024-04-02 21:06:56', NULL, NULL, NULL, NULL, NULL, NULL, '1712088416585', 'EATER', 'EATER', 'EATER', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(9, 10, 'CALEB PAUL IKWOBE', 'calebpaul@gmil.com', '$2a$10$A96INKFpsaGSOs0BauKz7.A841q9Zm.OzCfwvtqm4a0bRs/5Mvnpy', 'calebpaul@gmil.com', '08123433843', NULL, NULL, NULL, 0, 0, 1, NULL, NULL, '2024-04-04 09:15:33', 1, NULL, '2024-04-03 06:25:44', NULL, '2024-04-04 08:15:33', NULL, NULL, NULL, NULL, '1712121944769', 'IKWOBE', 'CALEB', 'PAUL', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, _binary 0x38363430302d313731323231383533333633312e6a706567),
	(10, 10, 'ikwobe  PAUL', 'ikwobejude@gmail.com', '$2a$10$fwodNk4npFh/mkqHgf.nLuzekvBHZvDplmeRH6MzN7LBoHZM8IlNy', 'ikwobejude@gmail.com', '08122332233', NULL, NULL, NULL, 0, 0, 1, NULL, NULL, NULL, 1, NULL, '2024-04-03 07:18:03', NULL, NULL, NULL, NULL, NULL, NULL, '1712125083082', 'PAUL', 'ikwobe', '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table recruitment.user_groups
CREATE TABLE IF NOT EXISTS `user_groups` (
  `idgroups` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `group_id` int(10) unsigned NOT NULL,
  `group_name` varchar(45) NOT NULL,
  PRIMARY KEY (`idgroups`) USING BTREE,
  UNIQUE KEY `Duplicate Group` (`group_id`) USING BTREE,
  UNIQUE KEY `Duplicate Group Name` (`group_name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 ROW_FORMAT=COMPACT;

-- Dumping data for table recruitment.user_groups: ~0 rows (approximately)
/*!40000 ALTER TABLE `user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_groups` ENABLE KEYS */;

-- Dumping structure for table recruitment.work_experience
CREATE TABLE IF NOT EXISTS `work_experience` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `occupation` varchar(50) DEFAULT NULL,
  `post_held` varchar(50) DEFAULT NULL,
  `from` int(11) DEFAULT NULL,
  `to` int(11) DEFAULT NULL,
  `salary_per_annum` decimal(20,2) DEFAULT NULL,
  `application_code` varchar(50) DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table recruitment.work_experience: ~0 rows (approximately)
/*!40000 ALTER TABLE `work_experience` DISABLE KEYS */;
INSERT INTO `work_experience` (`id`, `occupation`, `post_held`, `from`, `to`, `salary_per_annum`, `application_code`, `created_on`) VALUES
	(1, 'SMARTAPPS SOFTWARE COMPANY', 'TEAM LEAD', 2024, 2021, 260000.00, '1712087913433', '2024-04-03 05:00:38'),
	(2, 'ALPHA PAY/ TECH COMPANY', 'DEVELOPER', 2020, 2022, 150000.00, '1712121944769', '2024-04-04 08:43:08'),
	(3, 'SMARTAPPS', 'TEAM LEAD', 2023, 2024, 260000.00, '1712121944769', '2024-04-04 08:43:08');
/*!40000 ALTER TABLE `work_experience` ENABLE KEYS */;

-- Dumping structure for table recruitment._states
CREATE TABLE IF NOT EXISTS `_states` (
  `state_id` bigint(20) unsigned NOT NULL DEFAULT 1,
  `state` varchar(45) DEFAULT NULL,
  `state_code` varchar(45) DEFAULT NULL,
  `country_id` int(11) unsigned DEFAULT NULL,
  `shipping_price` decimal(50,2) NOT NULL DEFAULT 0.00,
  PRIMARY KEY (`state_id`) USING BTREE,
  UNIQUE KEY `school_id` (`state_id`) USING BTREE,
  KEY `country_id` (`country_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Dumping data for table recruitment._states: ~37 rows (approximately)
/*!40000 ALTER TABLE `_states` DISABLE KEYS */;
INSERT INTO `_states` (`state_id`, `state`, `state_code`, `country_id`, `shipping_price`) VALUES
	(1, 'ABIA', '01', 1, 2000.00),
	(2, 'ADAMAWA', '02', 1, 2000.00),
	(3, 'AKWA IBOM', '03', 1, 1000.00),
	(4, 'ANAMBRA', '04', 1, 1000.00),
	(5, 'BAUCHI', '05', 1, 0.00),
	(6, 'BAYELSA', '06', 1, 0.00),
	(7, 'BENUE', '07', 1, 0.00),
	(8, 'BORNO', '08', 1, 0.00),
	(9, 'CROSS RIVER', '09', 1, 0.00),
	(10, 'DELTA', '10', 1, 0.00),
	(11, 'EBONYI', '11', 1, 0.00),
	(12, 'EDO', '12', 1, 0.00),
	(13, 'EKITI', '13', 1, 0.00),
	(14, 'ENUGU', '14', 1, 0.00),
	(15, 'FCT', '37', 1, 0.00),
	(16, 'GOMBE', '15', 1, 0.00),
	(17, 'IMO', '16', 1, 0.00),
	(18, 'JIGAWA', '17', 1, 0.00),
	(19, 'KADUNA', '18', 1, 0.00),
	(20, 'KANO', '19', 1, 0.00),
	(21, 'KATSINA', '20', 1, 0.00),
	(22, 'KEBBI', '21', 1, 0.00),
	(23, 'KOGI', '22', 1, 0.00),
	(24, 'KWARA', '23', 1, 0.00),
	(25, 'LAGOS', '24', 1, 1000.00),
	(26, 'NASARAWA', '25', 1, 0.00),
	(27, 'NIGER', '26', 1, 0.00),
	(28, 'OGUN', '27', 1, 0.00),
	(29, 'ONDO', '28', 1, 0.00),
	(30, 'OSUN', '29', 1, 0.00),
	(31, 'OYO', '30', 1, 0.00),
	(32, 'PLATEAU', '31', 1, 0.00),
	(33, 'RIVERS', '32', 1, 0.00),
	(34, 'SOKOTO', '33', 1, 0.00),
	(35, 'TARABA', '34', 1, 0.00),
	(36, 'YOBE', '35', 1, 0.00),
	(37, 'ZAMFARA', '36', 1, 0.00);
/*!40000 ALTER TABLE `_states` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
