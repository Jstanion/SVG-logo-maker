class Shape {
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

module.exports = Shape;