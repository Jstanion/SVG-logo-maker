const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

// Function to generate SVG file structure
const generateSVG = (answers) => {
  const circle = new Circle().render();
  const square = new Square().render();
  const triangle = new Triangle().render();
  if(shape.type === 'circle') {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${circle}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>`
  } else if(shape.type === 'square') {
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${square}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>`
  } else {
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${triangle}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>`
  };
};

module.exports = {generateSVG};