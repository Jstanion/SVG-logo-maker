// Function to generate SVG file structure
const generateSVG = (answers) => {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${answers.shape} cx="150" cy="100" r="80" fill="${answers.shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
  
  </svg>`

};

module.exports = {generateSVG};