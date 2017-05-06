const RtbObject = require('../rtbObject');
const NativeBuilder = require('./native').builder;
const BannerBuilder = require('./banner').builder;
const VideoBuilder = require('./video').builder;
const PmpBuilder = require('./pmp').builder;
const removeEmptyValues = require('../utils').removeEmptyValues;

var Imp = function(id, bidfloor, tagid, native, banner, video, secure, pmp){
  this.id = id;
  this.bidfloor = bidfloor;
  this.tagid = tagid;
  this.native = native;
  this.banner = banner;
  this.video = video;
  this.secure = secure;
  this.pmp = pmp;
};

Imp.prototype = Object.create(RtbObject.prototype);

var ImpBuilder = function(){};

ImpBuilder.prototype.id = function(id){
  this._id = id;
  return this;
};

ImpBuilder.prototype.bidfloor = function(bidfloor){
  this._bidfloor = bidfloor;
  return this;
};

ImpBuilder.prototype.tagid = function(tagid){
  this._tagid = tagid;
  return this;
};

ImpBuilder.prototype.native = function(native){
  const builder = new NativeBuilder();
  this._native = builder
                .request(native.request)
                .ver(native.ver)
                .api(native.api)
                .battr(native.battr)
                .ext(native.ext)
                .build();
  return this;
};

ImpBuilder.prototype.banner = function(banner){
  const builder = new BannerBuilder();
  this._banner = builder
                .w(banner.w)
                .h(banner.h)
                .wmax(banner.wmax)
                .hmax(banner.hmax)
                .wmin(banner.wmin)
                .hmin(banner.hmin)
                .id(banner.id)
                .btype(banner.btype)
                .battr(banner.battr)
                .pos(banner.pos)
                .mimes(banner.mimes)
                .topframe(banner.topframe)
                .expdir(banner.expdir)
                .api(banner.api)
                .ext(banner.ext)
                .build();
  return this;
};

ImpBuilder.prototype.video = function(video){
  const builder = new VideoBuilder();
  this._video = builder
                .mimes(video.mimes)
                .minduration(video.minduration)
                .maxduration(video.maxduration)
                .protocols(video.protocols)
                .w(video.w)
                .h(video.h)
                .startdelay(video.startdelay)
                .linearity(video.linearity)
                .sequence(video.sequence)
                .battr(video.battr)
                .maxextended(video.maxextended)
                .minbitrate(video.minbitrate)
                .maxbitrate(video.maxbitrate)
                .boxingallowed(video.boxingallowed)
                .playbackmethod(video.playbackmethod)
                .delivery(video.delivery)
                .pos(video.pos)
                .companionad(video.companionad)
                .api(video.api)
                .companiontype(video.companiontype)
                .ext(video.ext)
                .build();
  return this;
};

ImpBuilder.prototype.secure = function(secure){
  this._secure = secure;
  return this;
};

ImpBuilder.prototype.pmp = function(pmp) {
  const builder = new PmpBuilder();
  this._pmp = builder
              .privateAuction(pmp.private_auction)
              .deals(pmp.deals)
              .build();
  return this;
};

ImpBuilder.prototype.build = function() {
  const imp = new Imp(this._id, this._bidfloor, this._tagid, this._native, this._banner, this._video, this._secure, this._pmp);
  return removeEmptyValues(imp);
};

module.exports = {
  object: Imp,
  builder: ImpBuilder
};
