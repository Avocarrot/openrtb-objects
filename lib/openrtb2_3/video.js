const RtbObject = require('../rtbObject');
const { removeEmptyValues } = require('../utils');

const Video = function(
  mimes, 
  minduration, 
  maxduration, 
  protocols, 
  w, 
  h, 
  startdelay, 
  linearity, 
  sequence,
  battr,
  maxextended,
  minbitrate,
  maxbitrate,
  boxingallowed,
  playbackmethod,
  delivery,
  pos,
  companionad,
  api,
  companiontype,
  ext
) {
  this.mimes = mimes;
  this.minduration = minduration;
  this.maxduration = maxduration;
  this.protocols = protocols;
  this.w = w;
  this.h = h;
  this.startdelay = startdelay;
  this.linearity = linearity;
  this.sequence = sequence;
  this.battr = battr;
  this.maxextended = maxextended;
  this.minbitrate = minbitrate;
  this.maxbitrate = maxbitrate;
  this.boxingallowed = boxingallowed;
  this.playbackmethod = playbackmethod;
  this.delivery = delivery;
  this.pos = pos;
  this.companionad = companionad;
  this.api = api;
  this.companiontype = companiontype;
  this.ext = ext;
};

Video.prototype = Object.create(RtbObject.prototype);

const VideoBuilder = function(){};

VideoBuilder.prototype.mimes = function(mimes){
  this._mimes = mimes;
  return this;
};

VideoBuilder.prototype.minduration = function(minduration){
  this._minduration = minduration;
  return this;
};

VideoBuilder.prototype.maxduration = function(maxduration){
  this._maxduration = maxduration;
  return this;
};

VideoBuilder.prototype.protocols = function(protocols){
  this._protocols = protocols;
  return this;
};

VideoBuilder.prototype.w = function(w){
  this._w = w;
  return this;
};

VideoBuilder.prototype.h = function(h){
  this._h = h;
  return this;
};

VideoBuilder.prototype.startdelay = function(startdelay){
  this._startdelay = startdelay;
  return this;
};

VideoBuilder.prototype.linearity = function(linearity){
  this._linearity = linearity;
  return this;
};

VideoBuilder.prototype.sequence = function(sequence){
  this._sequence = sequence;
  return this;
};

VideoBuilder.prototype.battr = function(battr){
  this._battr = battr;
  return this;
};

VideoBuilder.prototype.maxextended = function(maxextended){
  this._maxextended = maxextended;
  return this;
};

VideoBuilder.prototype.minbitrate = function(minbitrate){
  this._minbitrate = minbitrate;
  return this;
};

VideoBuilder.prototype.maxbitrate = function(maxbitrate){
  this._maxbitrate = maxbitrate;
  return this;
};

VideoBuilder.prototype.boxingallowed = function(boxingallowed){
  this._boxingallowed = boxingallowed;
  return this;
};

VideoBuilder.prototype.playbackmethod = function(playbackmethod){
  this._playbackmethod = playbackmethod;
  return this;
};

VideoBuilder.prototype.delivery = function(delivery){
  this._delivery = delivery;
  return this;
};

VideoBuilder.prototype.pos = function(pos){
  this._pos = pos;
  return this;
};

VideoBuilder.prototype.companionad = function(companionad){
  this._companionad = companionad;
  return this;
};

VideoBuilder.prototype.api = function(api){
  this._api = api;
  return this;
};

VideoBuilder.prototype.companiontype = function(companiontype){
  this._companiontype = companiontype;
  return this;
};

VideoBuilder.prototype.ext = function(ext){
  this._ext = ext;
  return this;
};

VideoBuilder.prototype.build = function() {
  const video = new Video(
    this._mimes, 
    this._minduration, 
    this._maxduration, 
    this._protocols, 
    this._w, 
    this._h, 
    this._startdelay, 
    this._linearity, 
    this._sequence,
    this._battr,
    this._maxextended,
    this._minbitrate,
    this._maxbitrate,
    this._boxingallowed,
    this._playbackmethod,
    this._delivery,
    this._pos,
    this._companionad,
    this._api,
    this._companiontype,
    this._ext
  );

  return removeEmptyValues(video);
};

module.exports = {
  object: Video,
  builder: VideoBuilder  
};