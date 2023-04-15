const Shape = require('../lib/shapes');

describe('Shape', () => {
    it('should throw an error if generateSVG() is called', () => {
        const shape = new Shape();
        const err = new Error('Child class must implement a generateSVG() method.');
        expect(shape.generateSVG).toThrow(err);
    });
});