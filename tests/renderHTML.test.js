const { renderHTML } = require('../lib/renderHTML');
const Circle = require('../lib/circle');
const Square = require('../lib/square');
const Triangle = require('../lib/triangle');

describe('RenderHTML', () => {
    describe('Shape Type', () => {
        it('should throw an error if no shape type is provided', () => {
            const answers = { shapeType:'notAShape' };
            const cb = () => renderHTML(answers);
            const err = new Error('You must provide a shape type.');
            
            expect(cb).toThrowError(err);
        });
    });

    describe('Circle HTML', () => {
        it('should return the string value from Circle Constructor render() method', () => {
            const answers = { shapeColor: 'red', shapeType: 'circle' };
            const circle = renderHTML(answers);
            
            expect(circle).toEqual('<circle cx="150" cy="105" r="80" fill="red"/>')
        });
    });
    
    describe('Square HTML', () => {
        it('should return the string value from Square Constructor render() method', () => {
            const answers = { shapeColor: 'green', shapeType: 'square' };
            const square = renderHTML(answers);
            
            expect(square).toEqual('<rect x="75" y="30" width="150" height="150" fill="green"/>')
        });
    });

    describe('Triangle HTML', () => {
        it('should return the string value from Triangle Constructor render() method', () => {
            const answers = { shapeColor: 'yellow', shapeType: 'triangle' };
            const triangle = renderHTML(answers);
            
            expect(triangle).toEqual('<polygon points="95,35 250,105 95,180" fill="yellow"/>')
        });
    });

    // xit('should throw an error if text parameter is greater than three characters long', () => {
    //     const text = 'HELLO'
    //     const cb = () => new Circle(text);
    //     const err = new Error('Text input must be 3 characters long.');
        
    //     expect(cb).toThrowError(err);
    // });
    
    // xit('should pass when the input is 3 characters long', () => {
    //     const text = 'ABC'
    //     const cb = () => new Circle(text);
    //     const err = new Error('Text input must be 3 characters long.');
        
    //     expect(cb).not.toThrowError(err);
    // });

    // describe('Text Color Parameter', () => {
    //     // Can not get test to pass -> ask in class
    //     xit('should throw an error if textColor input is not a valid color keyword', () => {
    //         const cb = () => new Circle('ABC', 'oaidhf')
    //         const err = new Error('Invalid color keyword.')
    //         console.log(Circle)
            
    //         expect(cb).toThrowError(err);
    //     });
    // });
});