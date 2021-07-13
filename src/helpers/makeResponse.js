import { getPetImage } from '../thirdParty/thirdPartyCalls.js';
import requiredParam from '../helpers/required-param.js';
import makePetImage from '../models/petImage.js';
import invalidResponse from '../helpers/invalid-response.js';

export async function makeResponse ( arrayOfPets = requiredParam( 'arrayOfPets' )) {
    let petObjectsResponseArray = []
    try {
        petObjectsResponseArray = await Promise.all(
            arrayOfPets.map( async pet => {
                let petUrl = await getPetImage( pet );
                return makePetImage( { petName: pet, petImage: petUrl } );
            })
        );
    } catch (error) {
        throw new invalidResponse('response Error on getPetImage');
    }    
    return petObjectsResponseArray;
}
