const BuilderFactory = require('../lib/builderFactory');
const BidRequestBuilder = require('../lib/openrtb2_3/bidRequest').builder;
const BidResponseBuilder = require('../lib/openrtb2_3/bidResponse').builder;
const SeatbidBuilder = require('../lib/openrtb2_3/seatbid').builder;
const AppBuilder = require('../lib/openrtb2_3/app').builder;
const DeviceBuilder = require('../lib/openrtb2_3/device').builder;
const ImpBuilder = require('../lib/openrtb2_3/imp').builder;
const NativeBuilder = require('../lib/openrtb2_3/native').builder;
const BannerBuilder = require('../lib/openrtb2_3/banner').builder;
const PublisherBuilder = require('../lib/openrtb2_3/publisher').builder;
const UserBuilder = require('../lib/openrtb2_3/user').builder;
const BidBuilder = require('../lib/openrtb2_3/bid').builder;
const PmpBuilder = require('../lib/openrtb2_3/pmp').builder;
const DealBuilder = require('../lib/openrtb2_3/deal').builder;

describe("The BuilderFactory should", () => {
  
  before(() => {
    this.builderFactory = new BuilderFactory();
  });

  it("construct and return a bid request builder", () => {
    const builder = this.builderFactory.getBuilder({
      builderType: 'bidRequest'
    });    
    builder.should.be.an.instanceOf(BidRequestBuilder);
  });

  it("construct and return a bid response builder", () => {
    const builder = this.builderFactory.getBuilder({
      builderType: 'bidResponse'
    });
    builder.should.be.an.instanceOf(BidResponseBuilder);
  });

  it("construct and return a seatbid builder", () => {
    const builder = this.builderFactory.getBuilder({
      builderType: 'seatbid'
    });
    builder.should.be.an.instanceOf(SeatbidBuilder);
  });

  it("construct and return a bid builder", () => {
    const builder = this.builderFactory.getBuilder({
      builderType: 'bid'
    });
    builder.should.be.an.instanceOf(BidBuilder);
  });

  it("construct and return an app builder", () => {
    const builder = this.builderFactory.getBuilder({
      builderType: 'app'
    });
    builder.should.be.an.instanceOf(AppBuilder);
  });

  it("construct and return a user builder", () => {
    const builder = this.builderFactory.getBuilder({
      builderType: 'user'
    });
    builder.should.be.an.instanceOf(UserBuilder);
  });

  it("construct and return a publisher builder", () => {
    const builder = this.builderFactory.getBuilder({
      builderType: 'publisher'
    });
    builder.should.be.an.instanceOf(PublisherBuilder);
  });

  it("construct and return a device builder", () => {
    const builder = this.builderFactory.getBuilder({
      builderType: 'device'
    });
    builder.should.be.an.instanceOf(DeviceBuilder);
  });

  it("construct and return an imp builder", () => {
    const builder = this.builderFactory.getBuilder({
      builderType: 'imp'
    });
    builder.should.be.an.instanceOf(ImpBuilder);
  });

  it("construct and return a native builder", () => {
    const builder = this.builderFactory.getBuilder({
      builderType: 'native'
    });
    builder.should.be.an.instanceOf(NativeBuilder);
  });

  it("construct and return a banner builder", () => {
    const builder = this.builderFactory.getBuilder({
      builderType: 'banner'
    });
    builder.should.be.an.instanceOf(BannerBuilder);
  });

  it("construct and return a pmp builder", () => {
    const builder = this.builderFactory.getBuilder({
      builderType: 'pmp'
    });
    builder.should.be.an.instanceOf(PmpBuilder);
  });

  it("construct and return a deal builder", () => {
    const builder = this.builderFactory.getBuilder({
      builderType: 'deal'
    });
    builder.should.be.an.instanceOf(DealBuilder);
  });

});
