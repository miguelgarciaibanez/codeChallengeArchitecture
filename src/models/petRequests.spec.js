import { getPetImagesWithVowels } from './petRequests.js';
import RequiredParameterError from '../helpers/errors.js';
import InvalidParameterError from '../helpers/errors.js';

test('Return parameter exception', async () => {
    expect.assertions(1);
    await expect(getPetImagesWithVowels()).rejects.toThrow(RequiredParameterError);
});

test('Return invalid parameter error', async () => {
    expect.assertions(2);
    await expect(getPetImagesWithVowels('a')).rejects.toThrow(InvalidParameterError);
    await expect(getPetImagesWithVowels(-8)).rejects.toThrow(InvalidParameterError);
});

//with 6 check result
//with 5 check result

test('Return valid response', async ()=> {
    expect.assertions(2);
    let arrayResponse5 = await getPetImagesWithVowels( 5 );
    expect(arrayResponse5).toEqual(          
        expect.arrayContaining([      
          expect.objectContaining({   
            petName: 'cotondetulear'              
          })
        ])
      )
    //const expected = { "status": "unsuccess" };
    let arrayResponse6 = await getPetImagesWithVowels( 6 );
    expect(arrayResponse6).toEqual([]);
});