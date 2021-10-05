const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');

const output = path.resolve(__dirname, 'output', 'output.html');

const emp = [];

function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter Manager Name: ',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter Manager ID: ',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter Manager Email: ',
      },
      {
        type: 'input',
        name: 'number',
        message: 'Enter Manager Office Number',
      },
    ])
    .then((answers) => {
      let { name, id, email, number } = answers;
      let manager = Manager(name, id, email, number);
      emp.push(manager);
      console.info('Successfully Added Manager!');
      addTeam();
    });
}

function addTeam() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'addMember',
        message: 'Add A Team Member?',
        choices: ['Add Engineer', 'Add Intern', 'Done Adding Team Members'],
      },
    ])

    .then((answers) => {
      eSwitch = answers.addMember;

      switch (eSwitch) {
        case 'Add Engineer':
          addEngineer();
          break;

        case 'Add Intern':
          addIntern();
          break;

        case 'Done Adding Team Members':
          makeTeam();
          break;
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter Engineer Name: ',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter Engineer ID: ',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter Engineer Email: ',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter Engineer Github Username',
      },
    ])
    .then((answers) => {
      var { name, id, email, github } = answers;
      var engineer = Engineer(name, id, email, github);
      emp.push(engineer);
      console.info('Successfully Added Engineer!');
      addTeam();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter Intern Name: ',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter Intern ID: ',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter Intern Email: ',
      },
      {
        type: 'input',
        name: 'school',
        message: 'Enter Intern School Name: ',
      },
    ])
    .then((answers) => {
      var { name, id, email, school } = answers;
      var intern = Intern(name, id, email, school);
      emp.push(intern);
      console.info('Successfully Added Intern!');
      addTeam();
    });
}

function makeTeam() {
  fs.writeFileSync(output, renderMain(emp), 'utf-8');
}

init();
