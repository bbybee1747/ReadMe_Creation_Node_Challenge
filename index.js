// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import colors from 'colors';

import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?', 
    'Provide a short description explaining the what, why, and how of your project:', 
    'What are the installation instructions?', 
    'Write out the instructions for How to use the application:',
    'Make a list of all contributors to your project. List collaborators, as well as third party assets. Include links.',
    'What are the tests instructions for your application?',
    'What license did you use?', 
    'What additional features were used in your project that you would like to add?',
    'What is your email address?',
    'What is your GitHub username?'
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('README file successfully created!'.green);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title'
            
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contributors'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'tests'
        },
        {
            type: 'list',
            message: questions[6],
            choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None'],
            name: 'license'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'features'
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email'
        },
        {
            type: 'input',
            message: questions[9],
            name: 'github'
        }
    ])
    .then((response) => {
        writeToFile('./generatedReadme/readMe.md', generateMarkdown(response));
    });
}

// Function call to initialize app
 {
    console.log('Welcome to the README Generator!'.blue);
    console.log('Please answer the following questions to generate your README file.'.blue);
    console.log('Please note that all fields are required.'.red);
    init();
    console.log('Thank you for using the README Generator!'.blue);
}
