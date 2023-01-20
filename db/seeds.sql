USE employeetracker_db;

INSERT INTO departments (name)
VALUES
("Community"),
("Leadership");

INSERT INTO roles (title, salary, department_id)
VALUES
("Specialist", 60000, 1),
("Expansion Specialist", 70000, 1),
("Clinical Supervisor", 90000, 2),
("Regional Supervisor", 120000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("Jenna", "Doe", 1, NULL),
("Mikayla", "James", 1, NULL),
("Ricky", "Pierre", 2, NULL),
("Beth", "Eager", 2, NULL),
("Jeremy", "Doe", 1, NULL);