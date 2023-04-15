class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    generateSVG() {
     throw new Error('Child class must implement a generateSVG() method.')
    }
};

module.exports = Shape;