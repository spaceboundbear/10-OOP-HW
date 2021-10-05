const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');

const emp = [];

function prompt() {
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
      addTeam();
    });
}

function addTeam() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'addMembers',
        message: 'Add Team Member?',
        choices: ['Add Engineer', 'Add Intern', 'Done Adding Team Members'],
      },
    ])

    .then((answers) => {
      eSwitch = answers.addMembers;

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
