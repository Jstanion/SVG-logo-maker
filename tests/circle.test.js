const Circle = require('../lib/circle');

describe('Circle', () => {
    describe('Instantiate', () => {
        it('should create a new Circle Object', () => {
            const shape = new Circle()

            expect(shape).toBeDefined();
        });

    describe('Values passed', () => {
        it('should return the passed color value to the rendered HTML string', () => {
            const shape = new Circle();
            shape.setColor('blue')

            expect(shape.render()).toEqual('<circle cx="150" cy="105" r="80" fill="blue"/>');
            });
        });
    });
});