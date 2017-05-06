const RtbObject = require('../lib/rtbObject');

describe('The RtbObject should', () => {
  let rtbObject;
  beforeEach(() => {
    rtbObject = new RtbObject();
  });

  it("convert to JSON string", () => {
    rtbObject.prop1 = 'prop1';
    rtbObject.prop2 = {
      nestedProp: 'nestedProp'
    };
    rtbObject.prop3 = () => {
      return 'prop3';
    };
    const stringified = rtbObject.stringify();
    stringified.should.be.an.instanceOf(String);
    stringified.should.equal('{"prop1":"prop1","prop2":{"nestedProp":"nestedProp"}}');
  });

});
