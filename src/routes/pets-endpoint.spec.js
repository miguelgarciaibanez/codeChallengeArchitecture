import handle from '.';
import InvalidParameterError from '../helpers/errors.js';

test('it will not response to post request', async () => {
    expect.assertions(1);

    const result = await handle({
        method: 'POST',
        body: JSON.stringify({
            nomatter: 'value'
        })
    });

    expect(result).toEqual(
        {
            headers: { 'Content-Type': 'application/json' },
            statusCode: 405,
            data: '{"success":false,"error":"POST method not allowed."}'
        }
    )
})


test('it will not response to wrong parameters', async () => {
    expect.assertions(2);

    await expect(handle({
        method: 'GET',
        pathParams: {
            vowels: ''
        }
    })).rejects.toThrow(InvalidParameterError);

    await expect(handle({
        method: 'GET',
        pathParams: {
            vowels: -2
        }
    })).rejects.toThrow(InvalidParameterError);
})