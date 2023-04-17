const Shape = require('./shapes');

class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<circle cx="150" cy="105" r="80" fill="${this.setColor(this.shapeColor)}"/>`
    };
};

module.exports = Circle;