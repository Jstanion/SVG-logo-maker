// Imports the inquirer package
const inquirer = require('inquirer');

// Prompts for required user input to generate SVG file
inquirer
    .prompt([
        {
            name: 'text',
            message: 'Enter up to three characters:'
        },
        {
            name: 'textColor',
            message: 'Enter text color keyword (OR a hexidecimal number):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape from the following list:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            name: 'shapeColor',
            message: 'Enter shape color keyword (OR a hexidecimal number):'
        }
    ])
    .then((answers) => {
        console.log('Generated logo.svg');
        console.log(answers); // Code to generate SVG logo goes here
    });