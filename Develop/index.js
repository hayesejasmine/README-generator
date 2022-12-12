// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

inquirer
    .prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a brief description of your project.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What type of license should your project have?',
            choices: ['Apache 2.0','GNU General Public v3.0', 'MIT', 'BSD 2-Clause "Simplified"', 'BSD 3-Clause "New" or "Revised"','Boost Software 1.0',
            'Creative Commons Zero v1.0 Universal','Eclipse Public 2.0','GNU Affero General Public v3.0','GNU General Public v2.0','GNU Lesser General Public v2.1','Mozilla Public 2.0','The Unlicense','None',]
        },
        {
            type: 'input',
            name: 'dependencies',
            message: 'What command should be ran to install dependecies?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be ran to run tests?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What does the user need to know about using the repo?',
        },
     ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log('Successfully created README!')
  });
  }

  
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((input) => {
        writeToFile('README.md', generateMarkdown(input));
    }
    )
}

// Function call to initialize app
init();
