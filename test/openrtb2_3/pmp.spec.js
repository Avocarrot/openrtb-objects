const Pmp = require('../../lib/openrtb2_3/pmp').object;
const PmpBuilder = require('../../lib/openrtb2_3/pmp').builder;
const RtbObject = require('../../lib/rtbObject');

describe("The Pmp object should", function() {
  it("be an instance of RtbObject", function() {
    const pmp = new Pmp();
    pmp.should.be.an.instanceof(RtbObject);      
  });
});