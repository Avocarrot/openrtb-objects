'use strict'

const RtbObject = require('../rtbObject');
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

PmpBuilder.prototype.deals = function(deals){
  this._deals = deals;
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