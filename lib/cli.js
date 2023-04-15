// Imports the inquirer package
const inquirer = require('inquirer');
const { generateSVG } = require('./generateSVG');
const fs = require('fs');
const { writeFile } = require('fs/promises')

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
            name: 'shapeType',
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
        console.log(answers);
        return writeFile('../examples/logo.svg', JSON.stringify(answers))
    })
    .catch((err) => {
        console.log('Error found:', err);
    })
        
    //    generateSVG.generateSVG(answers)
       
        // call writeFile method here using the imported svg code