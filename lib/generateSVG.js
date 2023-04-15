// Function to generate SVG file structure
const generateSVG = (answers) => {
  if(answers.shapeType === 'circle') {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${answers.shapeColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>`
  } else if(answers.shapeType === 'square') {
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="30" height="30" fill="${answers.shapeColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>`
  } else {
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100,100,100" fill="${answers.shapeColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>`
  };
};
// const answers = {
//   text: 'hello', 
//   textColor: 'white', 
//   shapeType: 'circle',
//   shapeColor: 'green'
// }
// console.log(generateSVG(answers))
module.exports = {generateSVG};