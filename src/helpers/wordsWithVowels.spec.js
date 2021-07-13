import wordsWithVowels from './wordsWithVowels.js';
import { RequiredParameterError } from './errors.js';

test('Return array of required words with 2 vowels', ( ) => {
    const result = wordsWithVowels( ['mama','papa','rdrer','Nadal'] , 1 );
    expect(result.length).toBe(3);
});

test('Return required parameters error', ()=>{
    expect( () => {
        wordsWithVowels()
    }).toThrowError(RequiredParameterError);
})