const Shape = require('./shapes');

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
        this.shapeType = 'circle';
    };
    generateSVG() {
        const draw = SVG().size(300, 200);
        const circle = draw.circle(100)
            .fill(this.shapeColor)
            .move(150, 100);
        const text = draw.text(this.text)
            .fill(this.textColor)
            .move(50, 50);
        return draw.svg()
    };
};

module.exports = Circle;