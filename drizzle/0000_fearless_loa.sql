CREATE TABLE `game` (
	`id` int AUTO_INCREMENT NOT NULL,
	`game_type` int,
	`duration` int,
	`game_date` datetime,
	`created_at` datetime,
	`updated_at` datetime,
	CONSTRAINT `game_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `team` (
	`id` int AUTO_INCREMENT NOT NULL,
	`team_name` varchar(255),
	`level` varchar(255),
	`created_at` datetime,
	`updated_at` datetime,
	CONSTRAINT `team_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `team_record` (
	`team_id` int NOT NULL,
	`game_id` int NOT NULL,
	`duration` int,
	`game_date` datetime,
	`created_at` datetime,
	`updated_at` datetime,
	CONSTRAINT `team_record_team_id_game_id_pk` PRIMARY KEY(`team_id`,`game_id`)
);
--> statement-breakpoint
CREATE TABLE `team_users` (
	`team_id` int NOT NULL,
	`user_id` int NOT NULL,
	`created_at` datetime,
	`updated_at` datetime,
	CONSTRAINT `team_users_team_id_user_id_pk` PRIMARY KEY(`team_id`,`user_id`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_name` varchar(255),
	`age` int,
	`gender` varchar(1),
	`phone_number` varchar(20),
	`position` varchar(255),
	`user_level` int,
	`blood_type` varchar(10),
	`created_at` datetime,
	`updated_at` datetime,
	CONSTRAINT `user_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user_record` (
	`user_id` int NOT NULL,
	`game_id` int NOT NULL,
	`game_quoter` int,
	`goal` int,
	`assist` int,
	`deced` int,
	`created_at` datetime,
	`updated_at` datetime,
	CONSTRAINT `user_record_user_id_game_id_pk` PRIMARY KEY(`user_id`,`game_id`)
);
--> statement-breakpoint
ALTER TABLE `team_record` ADD CONSTRAINT `team_record_team_id_team_id_fk` FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `team_record` ADD CONSTRAINT `team_record_game_id_game_id_fk` FOREIGN KEY (`game_id`) REFERENCES `game`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `team_users` ADD CONSTRAINT `team_users_team_id_team_id_fk` FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `team_users` ADD CONSTRAINT `team_users_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `user_record` ADD CONSTRAINT `user_record_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `user_record` ADD CONSTRAINT `user_record_game_id_game_id_fk` FOREIGN KEY (`game_id`) REFERENCES `game`(`id`) ON DELETE no action ON UPDATE no action;