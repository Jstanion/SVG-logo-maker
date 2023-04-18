// Imports the inquirer package
const inquirer = require('inquirer');
const { renderHTML } = require('./renderHTML');
const { writeFile } = require('fs/promises')

// Prompts for required user input to generate SVG file
class CLI {
    constructor() {
        inquirer
        .prompt([
            {
                name: 'text',
                message: 'Enter up to three characters:',
            },
            {
                name: 'textColor',
                message: 'Enter text color keyword (OR a hexidecimal number):',
            },
            {
                type: 'list',
                name: 'shapeType',
                message: 'Select a shape from the following list:',
                choices: ['circle', 'triangle', 'square']
            },
            {
                name: 'shapeColor',
                message: 'Enter shape color keyword (OR a hexidecimal number):'
            }
        ])
        .then((answers) => {
            console.log('Generated logo.svg');
            console.log(answers);
            const svgOpenTag = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
            const svgTextEl = `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text></svg>`
            const svgShapeEl = renderHTML(answers);
            return writeFile('./examples/logo.svg',`${svgOpenTag}${svgShapeEl}${svgTextEl}`);
        })
        .catch((err) => {
            console.log('Error found:', err);
        });
    };
};

module.exports = CLI;