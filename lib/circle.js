const Shape = require('./shapes');

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
        this.shapeType = 'circle';
    };
    generateSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="green" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
      
      </svg>`
    }
}

module.exports = Circle;
