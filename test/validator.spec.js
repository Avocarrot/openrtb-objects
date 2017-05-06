const should = require('should');
const validator = require('../lib/validator');
const bidResponseSchema = require('../lib/openrtb2_3/schemas/bidResponse');
const mockResponse = require('./mocks/mockResponse');

describe('The Validator should', () => {

	it('return an empty array if the object is valid', () => {
		const result = validator.validate(bidResponseSchema, mockResponse);
		result.length.should.be.equal(0);
	});

	it('return an array of errors if the object is invalid', () => {
		const invalidBidResponse = JSON.parse(JSON.stringify(mockResponse));
		invalidBidResponse.seatbid[0].bid[0].adomain = 42;	//this is invalid because adomain should be an array of strings
		const result = validator.validate(bidResponseSchema, invalidBidResponse);
		result.length.should.be.equal(1);
		result.should.be.eql([{ 
			keyword: 'type',
			dataPath: '.seatbid[0].bid[0].adomain',
			message: 'should be array' 
		}]);
	});

});