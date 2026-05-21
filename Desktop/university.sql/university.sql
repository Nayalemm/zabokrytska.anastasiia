CREATE DATABASE university;
USE university;

CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    group_name VARCHAR(20),
    birth_date DATE
);

CREATE TABLE grades (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    subject VARCHAR(50),
    grade INT,
    FOREIGN KEY (student_id) REFERENCES students(id)
    ON DELETE CASCADE
);

CREATE TABLE scholarships (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    amount DECIMAL(8,2),
    type VARCHAR(30),
    FOREIGN KEY (student_id) REFERENCES students(id)
    ON DELETE SET NULL
);

CREATE TABLE attendance (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    date DATE,
    status ENUM('present', 'absent', 'late'),
    FOREIGN KEY (student_id) REFERENCES students(id)
    ON DELETE SET NULL
);

INSERT INTO students (first_name, last_name, group_name, birth_date) VALUES
('Ivan', 'Petrenko', 'A1', '2003-05-10'),
('Anna', 'Shevchenko', 'A1', '2004-02-15'),
('Oleh', 'Koval', 'B2', '2002-11-20'),
('Maria', 'Bondar', 'B2', '2003-07-01'),
('Dmytro', 'Tkachenko', 'A1', '2001-09-09');

INSERT INTO grades (student_id, subject, grade) VALUES
(1, 'Math', 90),
(1, 'Physics', 85),
(2, 'Math', 95),
(2, 'Physics', 88),
(3, 'Math', 70),
(3, 'Physics', 75),
(4, 'Math', 80),
(4, 'Physics', 82),
(5, 'Math', 60),
(5, 'Physics', 65);

INSERT INTO scholarships (student_id, amount, type) VALUES
(1, 1500.00, 'academic'),
(2, 2000.00, 'social'),
(3, 1200.00, 'academic');

INSERT INTO attendance (student_id, date, status) VALUES
(1, '2026-05-01', 'present'),
(1, '2026-05-02', 'absent'),
(2, '2026-05-01', 'present'),
(2, '2026-05-02', 'late'),
(3, '2026-05-01', 'present'),
(3, '2026-05-02', 'present'),
(4, '2026-05-01', 'absent'),
(4, '2026-05-02', 'present'),
(5, '2026-05-01', 'late'),
(5, '2026-05-02', 'present');

UPDATE students
SET last_name = 'Ivanenko'
WHERE id = 1;

UPDATE grades
SET grade = 100
WHERE student_id = 2 AND subject = 'Math';

DELETE FROM students WHERE id = 3;