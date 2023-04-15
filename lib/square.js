const Shape = require('./shapes');

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shapeType = 'square';
    };
};

module.exports = Square;