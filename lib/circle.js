// Importing parent class constructor
const Shape = require('./shapes');

class Circle extends Shape {
    constructor(shapeColor) {
        // Inheriting common properties and methods from parent class
        super(shapeColor)
    }
    // Method that returns a code snippet to be used later in the logo.svg file
    render() {
        return `<circle cx="150" cy="105" r="80" fill="${this.setColor(this.shapeColor)}"/>`
    };
};

// Exports Circle class constructor
module.exports = Circle;