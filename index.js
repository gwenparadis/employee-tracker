// const cTable = require('console.table');
const inquirer = require('inquirer');
// const mysql = require('mysql2/promise');

const PORT = process.env.PORT || 3001;

inquirer
  .prompt([
    {
      type: 'list',
      name: 'introMessage',
      message: 'What would you like to do?',
      choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a role', 'Add an employee', 'Update an Employee Role'],
    },
  ])
  .then(answers => {
    console.info('Answer: ', answers.introMessage);
  });

// Connect to database
const db = await mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'employeetracker_db'
  },
  console.log(`Connected to the employeetracker_db database.`)
);

// view departments query
const viewDepartments = function () {
  db.query(`SELECT id, movie_name AS title FROM movies`, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    return rows;
  });
}

// view roles query
const viewRoles = function () {
  db.query(`SELECT id, movie_name AS title FROM movies`, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    return rows;
  });
}

// view employees query
const viewEmployees = function () {
  db.query(`SELECT id, movie_name AS title FROM movies`, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    return rows;
  });
}

// add department query
const addDepartment = function () {
  const params = [body.name];

  db.query(`INSERT INTO departments (name)
      VALUES (?)`, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    return body;
  });
}

// add role query
const addRole = function () {
  const params = [body.title, body.salary, body.department_id];

  db.query(`INSERT INTO roles (title, salary, department_id)
  VALUES (?)`, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    return body;
  });
}

// add employee query
const addEmployee = function () {
  const params = [body.first_name, body.last_name, body.role_id, body.manager_id];

  db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id)
  VALUES (?)`, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    return body;
  });
}

// Listening
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});