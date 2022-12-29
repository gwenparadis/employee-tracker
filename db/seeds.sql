USE employeetracker_db;

INSERT INTO department (name)
VALUES
("Community"),
("Leadership");

INSERT INTO role (title, salary, department_id)
VALUES
("Specialist", 60000, 1),
("Expansion Specialist", 70000, 1),
("Clinical Supervisor", 90000, 2),
("Regional Supervisor", 120000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Jenna", "Doe", 1, 3),
("Mikayla", "James", 1, 3),
("Ricky", "Pierre", 2, 4),
("Beth", "Eager", 2, NULL),
("Jeremy", "Doe", 1, 4);