// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Inquirer question prompts
const questions = [
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
            choices: ['Apache 2.0','MIT', 'Mozilla','None',]
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be ran to install dependecies?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be ran to run tests?',
        },
        {
            type:'input',
            name: 'contribution',
            message: 'How can the user contribute to this project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?',
        },
     ]


// write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log('Successfully created README!')
  });
  }

  
// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((input) => {
        writeToFile('README.md', generateMarkdown(input));
    }
    )
}

// Function call to initialize app
init();
