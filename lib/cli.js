// Imports the inquirer package and other functions needed
const inquirer = require('inquirer');
const { renderHTML } = require('./renderHTML');
const { writeFile } = require('fs/promises')

// Class constructor for index.js file to run completed application
class CLI {
    constructor() {

        // Prompts for required user input to generate SVG file
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

            // Prints requested string and values selected by user in an onject format
            console.log('Generated logo.svg');
            console.log(answers);

            // Stores opening tag, text element, shape element, and closing tag into separate variables
            const svgOpenTag = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
            const svgTextEl = `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text></svg>`
            const svgShapeEl = renderHTML(answers);

            // Method that will create a logo.svg file and append the generated data to that file
            return writeFile('./examples/logo.svg',`${svgOpenTag}${svgShapeEl}${svgTextEl}`);
        })
        .catch((err) => {
            console.log('Error found:', err);
        });
    };
};

// Exports class constructor
module.exports = CLI;