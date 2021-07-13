import { getPetsNames } from '../thirdParty/thirdPartyCalls.js';
import requiredParam from '../helpers/required-param.js';
import wordsWithVowels from '../helpers/wordsWithVowels.js';
import { makeResponse } from '../helpers/makeResponse.js'
import invalidResponse from '../helpers/invalid-response.js';
import { InvalidParameterError } from '../helpers/errors.js';

export async function getPetImagesWithVowels( amountOfVowels = requiredParam( 'amountOfVowels' ) ) {
    let result = [];
    if ( isNaN( amountOfVowels ) || amountOfVowels < 0 ){
        throw new InvalidParameterError('Input shoud be a number');
    } 
    try {
        let petNames = await getPetsNames();
        if (petNames && petNames.length > 0) { //todo check with errors
            let petArray = wordsWithVowels (petNames, amountOfVowels );
            try {
                result = await makeResponse( petArray );
            } catch ( e ) {
                throw new invalidResponse('Error making response');
            }
        }
    } catch (error ) {
        throw new invalidResponse('Error getting Pet names');
    }
    return result;
}