// Parent class constructor
class Shape {
    // Parameters passing values from renderHTML.js
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    setColor(color) {
        return this.shapeColor = color
    }
    // Error message if the parent class is called to run the render method
    render() {
     throw new Error('Child class must implement a render() method.')
    }
};

// Exports parent class constructor
module.exports = Shape;