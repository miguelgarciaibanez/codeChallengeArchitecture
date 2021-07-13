import makePetImage from './petImage.js';
import RequiredParameterError from '../helpers/errors.js';
import InvalidParameterError from '../helpers/errors.js';

test('Returns a valid petImage', ()=>{
    const result = makePetImage({petName:'pet', petImage:'image'});
    expect(result).toStrictEqual({petName:'pet', petImage:'image'});
});

test('Return parameter exception', () => {

    expect(()=>{
        makePetImage({petName:'pet'})
    }).toThrow('param can not be null or undefined.');
});

test('Return required parameters error', ()=>{
    expect( () => {
        makePetImage({petName:'pet'})
    }).toThrowError(RequiredParameterError);
})


test('Return Invalid parameters error', ()=>{
    expect( () => {
        makePetImage({petName:'', petImage:''})
    }).toThrowError(InvalidParameterError);
})
