import { InvalidParameterError } from './errors.js';
import requiredParam from './required-param.js';

export function numberOfVowels ( word = requiredParam('word') ) {
    if (word.split(' ').length > 1 ){
        throw new InvalidParameterError(`Input parameter should be a simple word not several words`);
    }
    return countVowelsRegex( word );
}

function countVowelsRegex( text ){
    let matchingInstances = text.match(/[aeiou]/gi);

    if (matchingInstances) {
        return matchingInstances.length
    } else {
        return 0;
    }
}
