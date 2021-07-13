import { getPetsNames, getPetImage } from './thirdPartyCalls.js';
import RequiredParameterError from '../helpers/errors.js';

test('Return parameter exception', async () => {
    expect.assertions(1);
    await expect(getPetImage()).rejects.toThrow(RequiredParameterError);
});

test('Return valid response', async ()=> {
    expect.assertions(3);
    let responseImage = await getPetImage( 'cotondetulear' );
    expect(responseImage.length).toBeGreaterThan(0);
    expect(responseImage.indexOf('https://images.dog.ceo/breeds/cotondetulear/')).toBeGreaterThan(-1);
    let responsePetNames = await getPetsNames(  );
    expect(responsePetNames.length).toBeGreaterThan(0);
});