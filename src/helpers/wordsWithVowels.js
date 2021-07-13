import { numberOfVowels } from './amountVowels.js';
import requiredParam from './required-param.js';


export default function wordsWithVowels ( arrayOfWords = requiredParam('arrayOfWords'), amountOfVowels=requiredParam('amountOfVowels')  ){
    if (!arrayOfWords || !amountOfVowels || arrayOfWords.length === 0) {
        console.log('Invalid parameters');
    }
    let result = arrayOfWords.map ( ( word )  => parseInt(numberOfVowels( word )) > parseInt(amountOfVowels) ? word : null).filter( word => word !== null);
    return result;
}

