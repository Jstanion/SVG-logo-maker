class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    };
    render() {
        throw new Error('Child class must implement this method');
    };
};

module.exports = Shape;