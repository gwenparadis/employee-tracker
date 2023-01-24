const inquirer = require("inquirer");
const mysql = require("mysql2/promise");
const bluebird = require("bluebird");
var db;
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

//insert the following functions into the if/then??
// view departments query
const viewDepartments = async () => {
  const [rows, fields] = await db.execute("SELECT * FROM departments");
  console.table(rows);
  menu();
};

// view roles query
const viewRoles = async () => {
  const [rows, fields] = await db.execute(
    "SELECT r.title, r.salary, d.name from roles r JOIN departments d ON r.department_id = d.id"
  );
  console.table(rows);
  return menu();
};

// view employees query
const viewEmployees = function () {
  db.query(
    `CREATE TABLE viewEmployees (id, first_name, last_name, title, department_id, salary, manager_id)`,
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      return rows;
    }
  );
};

// add department query
const addDepartment = async function () {
  var answers = await inquirer.prompt([
    {
      type: "input",
      message: "Wha'ts the department name",
      name: "dept_name",
    },
  ]);
  console.log(answers);
  const [rows, fields] = await db.execute(
    `INSERT INTO departments (name) VALUES ("${answers.dept_name}")`
  );

  return viewDepartments();
};

// add role query
const addRole = function () {
  const params = [body.title, body.salary, body.department_id];

  db.query(
    `INSERT INTO roles (title, salary, department_id)
  VALUES (?)`,
    params,
    (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      return body;
    }
  );
};

// add employee query
const addEmployee = function () {
  const params = [
    body.first_name,
    body.last_name,
    body.role_id,
    body.manager_id,
  ];

  db.query(
    `INSERT INTO employees (first_name, last_name, role_id, manager_id)
  VALUES (?)`,
    params,
    (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      return body;
    }
  );
};

//update employee role
const updateEmployeeRole = function () {
  db.query(
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
