const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    describe('Values passed', () => {
        it('should return the passed color value to the rendered HTML string', () => {
            const shape = new Triangle();
            shape.setColor('purple')

            expect(shape.render()).toEqual('<polygon points="95,35 250,105 95,180" fill="purple"/>');
        });
    });
});