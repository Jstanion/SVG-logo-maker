const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
        this.shapeType = 'triangle';
    };
};

module.exports = Square;