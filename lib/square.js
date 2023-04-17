const Shape = require('./shapes');

class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<rect x="75" y="30" width="150" height="150" fill="${this.setColor(this.shapeColor)}"/>`
    };
};

module.exports = Square;