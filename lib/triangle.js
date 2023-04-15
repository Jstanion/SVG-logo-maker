const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
        this.shapeType = 'triangle';
    };
    render() {
        return `<polygon points="100,100,100" fill="${answers.shapeColor}"/>`
    };
};

module.exports = Triangle;