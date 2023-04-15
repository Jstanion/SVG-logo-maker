const Shape = require('./shapes');

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
        this.shapeType = 'circle';
    };
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}"/>`
    }
}

module.exports = Circle;
