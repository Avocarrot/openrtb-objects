'use strict'

const util = require('util');
const Bid = require('../../lib/openrtb2_3/bid').object;
const BidBuilder = require('../../lib/openrtb2_3/bid').builder;
const RtbObject = require('../../lib/rtbObject');

describe("The Bid object should", () => {
	let bidBuilder;
	beforeEach(() => {
		bidBuilder = new BidBuilder();
		//Add basic bid info
		bidBuilder
		.status(1)
		.id('1234')
		.price(1.15)
		.impid('6789');
	});

	it("be an instance of RtbObject", () => {
		const bid = new Bid();
		bid.should.be.an.instanceof(RtbObject);
	});

	it("replace macros in a given string", () => {
		const clearPrice = 0.9;
		const bidResponseId = '1234';
		const bid = bidBuilder
			.clearPrice(clearPrice)
			.build();

		const imptracker = "http://trackimp.com/Pixel/Impression/?bidPrice=${AUCTION_PRICE}&bidResId=${AUCTION_ID}&data=OuJifVtEKZqw3Hw7456F-etFgvhJpYOu0&type=img";
		bid.replaceMacros(imptracker, {
			'${AUCTION_ID}': bidResponseId
		}).should.equal(util.format("http://trackimp.com/Pixel/Impression/?bidPrice=%s&bidResId=%s&data=OuJifVtEKZqw3Hw7456F-etFgvhJpYOu0&type=img", clearPrice, bidResponseId));
		
	});

	it("isBelowFloor(bidfloor) should return true if bid price is below floor", () => {
		const bid = bidBuilder
			.price(2)
			.build();

		bid.isBelowFloor(3).should.equal(true);
		bid.isBelowFloor(2).should.equal(false);
		bid.isBelowFloor(1).should.equal(false);
	});

	it("hasAdm() should return true if bid contains a property adm", () => {
		const bid = bidBuilder
			.adm('{}')
			.build();

		bid.hasAdm().should.equal(true);
		delete bid.adm;
		bid.hasAdm().should.equal(false);
		bid.adm = null;
		bid.hasAdm().should.equal(false);
		bid.adm = '';
		bid.hasAdm().should.equal(false);
		bid.adm = undefined;
		bid.hasAdm().should.equal(false);
	});

	it("isBlockedAdomain(badv) should return true if bid is a blocked adomain", () => {
		const bid = bidBuilder
			.adomain(['advertiser.com'])
			.build();

		bid.isBlockedAdomain(['advertiser.com']).should.equal(true);
		bid.isBlockedAdomain(['google.com']).should.equal(false);
		bid.isBlockedAdomain(['google.com, example.com']).should.equal(false);

		(() => {
			bid.isBlockedAdomain();
		}).should.throw('badv should be an array');

	});

	it("isBlockedCat(bcat) should return true if bid is a blocked category", () => {
		const bid = bidBuilder
			.cat('IAB3')
			.build();

		bid.isBlockedCat(['IAB3']).should.equal(true);
		bid.isBlockedCat(['IAB2']).should.equal(false);
		bid.isBlockedCat(['IAB2, IAB1']).should.equal(false);

		(() => {
			bid.isBlockedCat();
		}).should.throw('bcat should be an array');

	});

	it("throw an error if we try to replace macros without a clearPrice", () => {
		const bid = bidBuilder.build();

		(() => {
			bid.replaceMacros('http://trackwin.com/win?pid=784170&data=OuJifVtEK&price=${AUCTION_PRICE}');
		}).should.throw('Cannot replace macros without a clear price');
	});

	it("throw an error if we try to replace macros without passing a string", () => {
		const bid = bidBuilder.build();
		const bidResponseId = '1234';

		(() => {
			bid.replaceMacros({
				'${AUCTION_ID}': bidResponseId
			});
		}).should.throw('Invalid string argument');
	});

	it("throw an error if we try to replace macros on empty string", () => {
		const bid = bidBuilder.build();
		const bidResponseId = '1234';

		(() => {
			bid.replaceMacros('', {
				'${AUCTION_ID}': bidResponseId
			});
		}).should.throw('Invalid string argument');
	});

});






