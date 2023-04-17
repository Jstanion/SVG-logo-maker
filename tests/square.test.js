const Square = require('../lib/square');

describe('Square', () => {
    describe('Instantiate', () => {
        it('should create a new Square Object', () => {
            const shape = new Square()

            expect(shape).toBeDefined();
        });

    describe('Values passed', () => {
        it('should return the passed color value to the rendered HTML string', () => {
            const shape = new Square();
            shape.setColor('orange')

            expect(shape.render()).toEqual('<rect x="75" y="30" width="150" height="150" fill="orange"/>');
            });
        });
    });
});