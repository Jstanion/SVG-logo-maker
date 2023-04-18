// Importing parent class constructor
const Shape = require('./shapes');

class Square extends Shape {
    constructor(shapeColor) {
        // Inheriting common properties and methods from parent class
        super(shapeColor)
    }
    // Method that returns a code snippet to be used later in the logo.svg file
    render() {
        return `<rect x="75" y="30" width="150" height="150" fill="${this.setColor(this.shapeColor)}"/>`
    };
};

// Exports Square class constructor
module.exports = Square;