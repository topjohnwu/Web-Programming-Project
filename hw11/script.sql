CREATE DATABASE testDB;
USE testDB;
CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(255) NOT NULL UNIQUE,
	name VARCHAR(255) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE post (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	user_id INT NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(id),
	title VARCHAR(255) NOT NULL,
	content TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE tag (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL
);

CREATE TABLE post_tag (
	post_id INT NOT NULL,
	tag_id INT NOT NULL,
	FOREIGN KEY (post_id) REFERENCES post(id),
	FOREIGN KEY (tag_id) REFERENCES tag(id)
);

INSERT INTO user (email, name) VALUES ('topjohnwu@gmail.com', 'topjohnwu');

INSERT INTO post (user_id, title, content) VALUES (1, 'Hello :)', 'Hello World!!');

INSERT INTO tag (name) VALUES ('NTU');

INSERT INTO post_tag (post_id, tag_id) VALUES (1, 1);
