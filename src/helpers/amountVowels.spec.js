import { InvalidParameterError } from './errors.js';
import { numberOfVowels } from './amountVowels.js';
import { RequiredParameterError } from './errors.js';

test('Returns the number of vowels', ()=>{
    const result = numberOfVowels( 'Padre' );
    expect(result).toBe(2);
});

test('Returns no vowels', ()=>{
    const result = numberOfVowels( 'ph' );
    expect(result).toBe(0);
})

test('Return exception to more than one word', () => {
    
    expect( () => {
        numberOfVowels('More than one word')
    }).toThrowError(InvalidParameterError);
});

test('Return required parameters error', ()=>{
    expect( () => {
        numberOfVowels()
    }).toThrowError(RequiredParameterError);
})