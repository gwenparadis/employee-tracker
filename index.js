const inquirer = require("inquirer");
const mysql = require("mysql2/promise");
const bluebird = require("bluebird");
let db;

const menu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "introMessage",
        message: "What would you like to do?",
        choices: [
          "View all Departments",
          "View all Roles",
          "View all Employees",
          "Add a Department",
          "Add a role",
          "Add an employee",
          "Update an Employee Role",
        ],
      },
    ])
    .then(async (answers) => {
      // Connect to database
      switch (answers.introMessage) {
        case "View all Departments":
          viewDepartments();
          break;
        case "View all Roles":
          viewRoles();
          break;
        case "View all Employees":
          viewEmployees();
          break;
        case "Add a Department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an Employee Role":
          updateEmployeeRole();
          break;

        default:
          break;
      }
    });
};

const init = async () => {
  db = await mysql.createConnection(
    {
      host: "localhost",
      // MySQL username,
      user: "root",
      // MySQL password
      password: "",
      database: "employeetracker_db",
      Promise: bluebird,
    },
    console.log(`Connected to the employeetracker_db database.`)
  );
  menu();
};

// view departments
const viewDepartments = async () => {
  const [rows, fields] = await db.execute("SELECT * FROM departments");
  console.table(rows);
  menu();
};

// view roles
const viewRoles = async () => {
  const [rows, fields] = await db.execute(
    "SELECT r.title, r.id, d.department, r.salary from roles r JOIN departments d ON r.department_id = d.id"
  );
  console.table(rows);
  return menu();
};

// view employees
const viewEmployees = async () => {
  const [rows, fields] = await db.execute(
    "SELECT e.first_name, e.last_name, r.title, d.department, r.salary, e.manager_id from employees e JOIN roles r on e.role_id = r.id JOIN departments d on r.department_id = d.id"
  );
  console.table(rows);
  return menu();
};

// add department
const addDepartment = async function () {
  let answers = await inquirer.prompt([
    {
      type: "input",
      message: "What is the department name?",
      name: "department",
    },
  ]);
  console.log(answers);
  const [rows, fields] = await db.execute(
    `INSERT INTO departments (department) VALUES ("${answers.department}")`
  );

  return viewDepartments();
};

// add role
const addRole = async function () {
  let answers = await inquirer.prompt([
    {
      type: "input",
      message: "What is the role name?",
      name: "role",
    },
    {
      type: "input",
      message: "What is the salary for this role?",
      name: "salary",
    },
    {
      type: "input",
      message: "What is the department id for this role?",
      name: "department",
    },
  ]);
  console.log(answers);
  const [rows, fields] = await db.execute(
    `INSERT INTO roles (title, salary, department_id) VALUES ("${answers.role}", "${answers.salary}", "${answers.department}")`
  );
  return viewRoles();
};

// add employee
const addEmployee = async function () {
  let answers = await inquirer.prompt([
    {
      type: "input",
      message: "What is the employee's first name?",
      name: "firstName",
    },
    {
      type: "input",
      message: "What is the employee's last name?",
      name: "lastName",
    },
    {
      type: "input",
      message: "What is the role id for this employee?",
      name: "role",
    },
    {
      type: "input",
      message: "What is the manager id for this employee?",
      name: "manager",
    },
  ]);
  console.log(answers);
  const [rows, fields] = await db.execute(
    `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("${answers.firstName}", "${answers.lastName}", "${answers.role}", "${answers.manager}")`
  );
  return viewEmployees();
};

//update employee role
const updateEmployeeRole = function () {
  db(
    `UPDATE employees SET role WHERE (role_id)
  VALUES (?)`,
    (err, result) => {
      if (err) {
        res.status(400).json({ error: errormessage });
        return;
      }
      return rows;
    }
  );
};

init();
