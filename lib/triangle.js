const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<polygon points="95,35 250,105 95,180" fill="${this.setColor(this.shapeColor)}"/>`
    };
};

module.exports = Triangle;