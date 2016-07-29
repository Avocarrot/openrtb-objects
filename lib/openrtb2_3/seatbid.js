const RtbObject = require('../rtbObject');
const BidBuilder = require('./bid').builder;
const removeEmptyValues = require('../utils').removeEmptyValues;

const Seatbid = function(seat, bid, group, ext){
  this.seat = seat;
  this.bid = bid;
  this.group = group;
  this.ext = ext;
};

Seatbid.prototype = Object.create(RtbObject.prototype);

const SeatbidBuilder = function(){};

SeatbidBuilder.prototype.seat = function(seat){
  this._seat = seat;
  return this;
};

SeatbidBuilder.prototype.bid = function(bid){
  const builder = new BidBuilder();
  this._bid = bid.map((b) => {
    return builder
      .status(b.status)
      .nurl(b.nurl)
      .adm(b.adm)
      .adid(b.adid)
      .adomain(b.adomain)
      .id(b.id)
      .dealid(b.dealid)
      .price(b.price)
      .cid(b.cid)
      .clearPrice(b.clearPrice)
      .crid(b.crid)
      .iurl(b.iurl)
      .impid(b.impid)
      .ext(b.ext)
      .build();
  });
  return this;
};

SeatbidBuilder.prototype.group = function(group){
  this._group = group;
  return this;
};

SeatbidBuilder.prototype.ext = function(ext){
  this._ext = ext;
  return this;
};

SeatbidBuilder.prototype.build = function() {
  const _bid = this._bid.map(function(b){
    return b;
  });

  this._bid = _bid;
  const seatbid = new Seatbid(this._seat, this._bid, this._group, this._ext);
  return removeEmptyValues(seatbid);
};

module.exports = {
  object: Seatbid,
  builder: SeatbidBuilder  
};