const Shape = require('./shapes');

class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
        this.shapeType = 'square';
    };
    render() {
        return `<rect x="10" y="10" width="30" height="30" fill="${answers.shapeColor}"/>`
    };
};

module.exports = Square;