-- create the database for the project
DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

--create the department table based on the asset/png file
CREATE TABLE department (
    id INT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

--create the role table based from on asset/png file
CREATE TABLE role (
    id INT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (deparmtent_id),
    REFERENCES department(id)
);

--create the employee table based on the asset/png file
CREATE TABLE employee (
    id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id),
    REFERENCES role(id),
    PRIMARY KEY (id)
    --FOREIGN KEY (manager_id),???
    --REFERENCES employee(id)???
);
