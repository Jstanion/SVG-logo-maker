const Shape = require('./shapes');
const jsdom = require('jsdom');

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shapeType = 'Circle';
        if(this.text.length !== 3) {
            throw new Error('Text input must be 3 characters long.');
        };
        if(CSS.supports('color', this.textColor)) {
            console.log(`The color keyword is valid.`)
        } else {
            throw new Error('Invalid color keyword.')
        };
    };

    generateSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="105" r="80" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    };
};

module.exports = Circle;