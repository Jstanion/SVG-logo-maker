describe('Text Parameter', () => {
    xit('should throw an error if text parameter is less than three characters long', () => {
        const text = 'HI'
        const cb = () => new Circle(text);
        const err = new Error('Text input must be 3 characters long.');

        expect(cb).toThrowError(err);
    });
    
    xit('should throw an error if text parameter is greater than three characters long', () => {
        const text = 'HELLO'
        const cb = () => new Circle(text);
        const err = new Error('Text input must be 3 characters long.');

        expect(cb).toThrowError(err);
    });
    
    xit('should pass when the input is 3 characters long', () => {
        const text = 'ABC'
        const cb = () => new Circle(text);
        const err = new Error('Text input must be 3 characters long.');

        expect(cb).not.toThrowError(err);
    });
});

describe('Text Color Parameter', () => {
    // Can not get test to pass -> ask in class
    xit('should throw an error if textColor input is not a valid color keyword', () => {
        const cb = () => new Circle('ABC', 'oaidhf')
        const err = new Error('Invalid color keyword.')
        console.log(Circle)

        expect(cb).toThrowError(err);
    });
});