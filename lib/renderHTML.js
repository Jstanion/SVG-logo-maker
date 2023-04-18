// Importing required classes
const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

// Function to generate SVG HTML formatting
const renderHTML = (answers) => {

  // Render new HTML string for svg format based on shape type.
  if(answers.shapeType === 'circle') {
    const newCircleObj = new Circle(answers.shapeColor).render();
    return newCircleObj;
  } else if (answers.shapeType === 'square') {
    const newSquareObj = new Square(answers.shapeColor).render();
    return newSquareObj;
  } else if (answers.shapeType === 'triangle') {
    const newTriangleObj = new Triangle(answers.shapeColor).render();
    return newTriangleObj;
  } else {
    // Exception error if no shape value is provided by user
    throw new Error('You must provide a shape type.')
  }
};

// Exports the renderHTML function
module.exports = {renderHTML};