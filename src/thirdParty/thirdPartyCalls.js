import fetch from 'node-fetch';
import dotenv from 'dotenv';
import invalidResponse from '../helpers/invalid-response.js';
import requiredParam from '../helpers/required-param.js';

dotenv.config();

const PETS_URL = process.env.PETS_URL;
const IMAGES_URL = process.env.IMAGES_URL;

export async function getPetsNames () {
    try {
        const response = await fetch ( PETS_URL) ;
        const json = await response.json();
        if (json.status === 'success'){
            return (json.message);
        } else {
            //throw new Error( json.status); //TODO CHECK ERROR
            throw new invalidResponse('Error getPetsNames:' + json.status);
        }
    } catch (err) {
        throw new invalidResponse('Error getPetsNames:' + JSON.stringify( err ) );
    }
}


export async function getPetImage ( pet = requiredParam( 'pet' ) ) {
    try {
        const response = await fetch( IMAGES_URL.replace( '{breedName}', pet ) );
        const json = await response.json();
        if (json.status === 'success'){
            return (json.message);
        } else {
            throw new invalidResponse('Error getPetsNames:' + json.status);
        }
    } catch ( err ) {
        throw new invalidResponse('Error getPetsNames:' + JSON.stringify( err ) );
    } 
}
