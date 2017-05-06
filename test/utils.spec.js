const { removeEmptyValues } = require('../lib/utils');

describe('Utils module tests', () => {

  it('removeEmptyValues() should remove properties witn null or undefined values', () => {
    const obj = {
      prop1: 'prop1',
      prop2: null,
      prop3: undefined,
      prop4: {
        nested1: 'nested1',
        nested2: null
      }
    };

    const cleaned = removeEmptyValues(obj);
    cleaned.should.have.property('prop1', 'prop1');
    cleaned.should.not.have.property('prop2');
    cleaned.should.not.have.property('prop3');
    cleaned.should.have.property('prop4', {
      nested1: 'nested1'
    });
  });

});
