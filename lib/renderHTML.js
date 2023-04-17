const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

// Function to generate SVG file structure
const generateSVG = (newCircleObj, ) => {
  // add main svg formatted code with the shape instructions that are specific to each class constructor
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${newCircleObj}`
  
  
  
  
  
};
  //   if(answers.shapeType === 'Circle') {
//     return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="150" cy="105" r="80" fill="${answers.shapeColor}"/>
//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
//     </svg>`
//   } else if(answers.shapeType === 'Square') {
//     return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//     <rect x="75" y="30" width="150" height="150" fill="${answers.shapeColor}"/>
//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
//     </svg>`
//   } else {
//     return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//     <polygon points="95,35 250,105 95,180" fill="${answers.shapeColor}"/>
//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
//     </svg>`
//   };

module.exports = {generateSVG};