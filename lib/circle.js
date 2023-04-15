const Shape = require('./shapes');

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
        this.shapeType = 'circle';
    };
};

module.exports = Circle;
