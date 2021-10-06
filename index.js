const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const renderHTML = require('./src/renderHTML');

const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');

const output = path.resolve(__dirname, 'dist', 'output.html');

const emp = [];

const cIntern = require('./src/tempIntern');
const cEngineer = require('./src/tempEngineer');
const cManager = require('./src/tempManager');

const start = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'mName',
        message: 'Enter Manager Name: ',
      },
      {
        type: 'input',
        name: 'mID',
        message: 'Enter Manager ID: ',
      },
      {
        type: 'input',
        name: 'mEmail',
        message: 'Enter Manager Email: ',
      },
      {
        type: 'input',
        name: 'mNumber',
        message: 'Enter Manager Office Number',
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.mName,
        response.mID,
        response.mEmail,
        response.mNumber
      );
      const mTemplate = cManager(manager);
      emp.push(mTemplate);
      console.info('Successfully Added Manager!');
      addTeam();
    });
};

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
        name: 'engName',
        message: 'Enter Engineer Name: ',
      },
      {
        type: 'input',
        name: 'engID',
        message: 'Enter Engineer ID: ',
      },
      {
        type: 'input',
        name: 'engEmail',
        message: 'Enter Engineer Email: ',
      },
      {
        type: 'input',
        name: 'engGithub',
        message: 'Enter Engineer Github Username',
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.engName,
        response.engID,
        response.engEmail,
        response.engGithub
      );
      const engTemplate = cEngineer(engineer);
      emp.push(engTemplate);
      console.info('Successfully Added Engineer!');
      addTeam();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'intName',
        message: 'Enter Intern Name: ',
      },
      {
        type: 'input',
        name: 'intID',
        message: 'Enter Intern ID: ',
      },
      {
        type: 'input',
        name: 'intEmail',
        message: 'Enter Intern Email: ',
      },
      {
        type: 'input',
        name: 'intSchool',
        message: 'Enter Intern School Name: ',
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.intName,
        response.intID,
        response.intEmail,
        response.intSchool
      );
      const intTemplate = cIntern(intern);
      emp.push(intTemplate);
      console.info('Successfully Added Intern!');
      addTeam();
    });
}

function makeTeam() {
  const endTeam = emp.join('');
  fs.writeFileSync(output, renderHTML(endTeam), 'utf-8');
}

start();
