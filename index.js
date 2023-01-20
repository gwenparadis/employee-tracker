const inquirer = require("inquirer");
const mysql = require("mysql2/promise");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "",
    database: "employeetracker_db",
  },
  console.log(`Connected to the employeetracker_db database.`)
);

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
  .then((answers) => {
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

//insert the following functions into the if/then??

// view departments query
const viewDepartments = function () {
  db.query(`SELECT id, name FROM departments`, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    return rows;
  });
};

// view roles query
const viewRoles = function () {
  db.query(
    `SELECT job title, id, department, salary FROM roles`,
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      return rows;
    }
  );
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
const addDepartment = function () {
  const params = [body.name];

  db.query(
    `INSERT INTO departments (name)
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
