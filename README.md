# Employee Tracker

## Description

I created this Employee Tracker in order to create an interactive database to stor my Employee data. I am able to view Employees, company Roles, and company Departments, as well as data specific to each employee, such as one employee's first name, last name, title, salary, department, and manager. I am able to view Departments names, and Role titles and salaries, separately as well. I am also able to upload that data according to the prompt I choose (Add Department, Add Role, or Update Employee Role). This application utilizes node packages inquirer and mysql in order to function. I learned how to combine complex inquirer prompts (prompts that are dependent on previous answers) with mysql functionality to interact with the backend database. The entire application can be used in the Command Line of VS code.

## Installation

This webpage is a backend program, that has not been deployed publicly. The code can be access in the following Github repository: https://github.com/gwenparadis/employee-tracker

There is no visual for this application, as it does not have a front end.

## Usage

TO INITIALIZE the application, first clone the repository into VS code.
If the database is not seeded:
THEN seed the database by accessing mysql, (I use the command "mysql -uroot" beccause I do not use a password)
THEN send the command "source db/schema.sql" to create the database
THEN send the command "source db/seeds.sql" to seed the database.

When the database is created and seeded, the following acceptance criteria is accessible:
WHEN I INITIALIZE THE APPLICATION (node index.js)
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

## Credits

NA

## License

NA
