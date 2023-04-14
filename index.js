// Imports the inquirer package
const inquirer = require('inquirer');
const fs = require('fs');

// Function to prompt user input
const svgInit = () => {

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
        console.log(answers); 
        
        // Generated SVG code is set to an object here
        const svgCode = 'test code';

        // Write the generated SVG code to a file called logo.svg using the fs module.
        fs.writeFileSync('./examples/logo.svg', svgCode, (err) =>
        err ? console.log(err) : console.log('success'));
    });
};

    // Call function to intialize application
    svgInit()