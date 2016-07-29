'use strict'

const RtbObject = require('../rtbObject');
const DealBuilder = require('./deal').builder;
const removeEmptyValues = require('../utils').removeEmptyValues;
const pmpSchema = require('./schemas/pmp');
const ValidationError = require('../errors/ValidationError');
const validator = require('../validator');

var Pmp = function(privateAuction, deals, ext){
  this.private_auction = privateAuction;
  this.deals = deals;
  this.ext = ext;
};

Pmp.prototype = Object.create(RtbObject.prototype);

var PmpBuilder = function(){};

PmpBuilder.prototype.privateAuction = function(privateAuction){
  this._privateAuction = privateAuction;
  return this;
};

PmpBuilder.prototype.deals = function(deals) {
  const builder = new DealBuilder();
  this._deals = deals.map((d) => {
    return builder
      .id(d.id)
      .bidfloor(d.bidfloor)
      .bidfloorcur(d.bidfloorcur)
      .at(d.at)
      .wseat(d.wseat)
      .wadomain(d.wadomain)
      .ext(d.ext)
      .build()
  });
  return this;
};

PmpBuilder.prototype.ext = function(ext){
  this._ext = ext;
  return this;
};

PmpBuilder.prototype.build = function() {
  let pmp = new Pmp(this._privateAuction, this._deals, this._ext);
  pmp = removeEmptyValues(pmp);

  const validationErrors = validator.validate(pmpSchema, pmp);

  if (validationErrors.length > 0) {
    throw new ValidationError({
      message: "Validation failed",
      errors: validationErrors
    });
  }
  return pmp;
};

module.exports = {
  object: Pmp,
  builder: PmpBuilder
};