import express from 'express';
import { getPetImagesWithVowels } from '../models/petRequests.js';
import invalidResponse from '../helpers/invalid-response.js';
import adaptRequest from '../helpers/adapt-request.js';
import handlePetsRequest from './index.js';

var router = express.Router();

router.get( '/breedsimages/:vowels', petsController );

async function petsController ( req, res ) {
    const httpRequest = adaptRequest( req );
    try {
        const result = await handlePetsRequest( httpRequest );
        res
            .set( result.headers )
            .status( result.statusCode )
            .send( result.data )
    } catch (error ) {
        res.status(500).end();
    }
}

export default router;