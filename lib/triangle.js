// Importing parent class constructor
const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(shapeColor) {
        // Inheriting common properties and methods from parent class
        super(shapeColor)
    }
    // Method that returns a code snippet to be used later in the logo.svg file
    render() {
        return `<polygon points="95,35 250,105 95,180" fill="${this.setColor(this.shapeColor)}"/>`
    };
};

// Exports Triangle class constructor
module.exports = Triangle;