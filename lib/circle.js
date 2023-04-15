const Shape = require('./shapes');

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shapeType = 'circle';
    };
};

module.exports = Circle;