const Circle = require('../lib/circle');

describe('Circle', () => {
    describe('Instantiate', () => {
        it('should create a new Circle object with the given data', () => {
            const circle = new Circle('ABC', 'white', 'red');
            const newObject = {
                text: 'ABC',
                textColor: 'white',
                shapeType: 'Circle',
                shapeColor: 'red'
            }

            expect(circle).toEqual(newObject);
        });
    });

    describe('Text Parameter', () => {
        it('should throw an error if text parameter is less than three characters long', () => {
            const text = 'HI'
            const cb = () => new Circle(text);
            const err = new Error('Text input must be 3 characters long.');

            expect(cb).toThrowError(err);
        });
        
        it('should throw an error if text parameter is greater than three characters long', () => {
            const text = 'HELLO'
            const cb = () => new Circle(text);
            const err = new Error('Text input must be 3 characters long.');

            expect(cb).toThrowError(err);
        });
        
        it('should pass when the input is 3 characters long', () => {
            const text = 'ABC'
            const cb = () => new Circle(text);
            const err = new Error('Text input must be 3 characters long.');

            expect(cb).not.toThrowError(err);
        });
    });

    describe('Text Color Parameter', () => {
        xit('should throw an error if textColor input is not a color keyword', () => {
            const cb = () => new Circle('color')
            const err = new Error('Invalid color keyword.')
            console.log(Circle)

            expect(cb).toThrowError(err);
        });
    });
});