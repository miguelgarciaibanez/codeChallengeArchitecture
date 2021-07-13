import requiredParam from '../helpers/required-param.js';
import { InvalidParameterError } from '../helpers/errors.js';


export default function makePetImage ( petWithImage = requiredParam( 'petWithImage' ) ) { //add required param

    const validPetWithImage = validate( petWithImage );
    return Object.freeze(validPetWithImage);

    function validate( {
        petName = requiredParam( 'petName' ),
        petImage = requiredParam( 'petImage' ),
        ...otherInfo
    } = {} ){
        validatePetName( 'petName', petName );
        validatePetImage( 'petImage', petImage );
        return { petName, petImage, ...otherInfo };
    }

    function validatePetName( field, petName ){ 
        if ( petName.length === 0) {
            throw new InvalidParameterError(
                `A pet name cannot be empty.`
            );
        }
    }

    function validatePetImage( field, petImage ) {
        if ( petImage.length === 0 ) {
            throw new InvalidParameterError(
                `A pet image cannot be empty`
            );
        }
    }
}