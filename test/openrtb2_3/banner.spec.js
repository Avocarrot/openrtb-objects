const Banner = require('../../lib/openrtb2_3/banner').object;
const BannerBuilder = require('../../lib/openrtb2_3/banner').builder;
const RtbObject = require('../../lib/rtbObject');

describe('The Banner object should', () => {
	it('be an instance of RtbObject', () => {
		const banner = new Banner();
		banner.should.be.an.instanceof(RtbObject);      
	});
});