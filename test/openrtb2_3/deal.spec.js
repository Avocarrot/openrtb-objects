const Deal = require('../../lib/openrtb2_3/deal').object;
const DealBuilder = require('../../lib/openrtb2_3/deal').builder;
const RtbObject = require('../../lib/rtbObject');

describe("The Deal object should", function() {
  it("be an instance of RtbObject", function() {
    const deal = new Deal();
    deal.should.be.an.instanceof(RtbObject);      
  });
});