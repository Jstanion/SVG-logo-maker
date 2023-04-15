const Shape = require('./shapes');

class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
        this.shapeType = 'square';
    };
};

module.exports = Square;