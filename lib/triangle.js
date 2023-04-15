const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shapeType = 'triangle';
    };
};

module.exports = Triangle;