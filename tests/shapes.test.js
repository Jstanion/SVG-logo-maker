const Shape = require('../lib/shapes');

describe('Shape', () => {
    it('should throw an error if render() is called', () => {
        const shape = new Shape();
        const err = new Error('Child class must implement a render() method.');
        expect(shape.render).toThrow(err);
    });
});