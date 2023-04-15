const Circle = require('../lib/circle');

describe('Circle', () => {
    const text = 'Test Text';
    const textColor = 'white';
    const shapeColor = 'red';

    describe('Instantiate', () => {
        it('should create a new Circle object with the given data above', () => {
          const circle = new Circle(text, textColor, shapeColor);
          const newObject = {
            text: 'Test Text',
            textColor: 'white',
            shapeType: 'Circle',
            shapeColor: 'red'
          }
          expect(circle).toEqual(newObject);
        });
    });
});