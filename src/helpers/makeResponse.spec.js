import { makeResponse } from './makeResponse.js';
import RequiredParameterError from '../helpers/errors.js';

test('Return required parameters error', async ()=>{
    expect.assertions(1);
    await expect(makeResponse()).rejects.toThrow(RequiredParameterError);
})

test('Return expected result', async () => {
    expect.assertions(1);
    let arrayOfPets = ["affenpinscher", "african", "airedale", "akita", "appenzeller", "australian"];
    try {
        let arrayResolved = await makeResponse(arrayOfPets);
        expect(arrayResolved.length).toBe(6);
    } catch(e) {
        console.log(e);
    }
})