import { getPetImagesWithVowels } from '../models/petRequests.js';
import makeHttpError from '../helpers/http-error.js';


export default function makePetsEndpointHandler ( ) {
    return async function handle( httpRequest ) {
        switch( httpRequest.method ) {
            case 'GET':
                return getPetsResponse( httpRequest )
            default:
                return makeHttpError({
                    statusCode: 405,
                    errorMessage: `${httpRequest.method} method not allowed.`
                  })
        }
    }
}

async function getPetsResponse ( httpRequest ) {
    const amountOfVowles = httpRequest.pathParams.vowels || {};

    const result = await getPetImagesWithVowels( amountOfVowles );
    return {
        heders: {
            'Content-Type': 'application/json'
        },
        statusCode: 200,
        data: result
    }
}