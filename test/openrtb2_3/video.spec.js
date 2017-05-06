const Video = require('../../lib/openrtb2_3/video').object;
const VideoBuilder = require('../../lib/openrtb2_3/video').builder;
const RtbObject = require('../../lib/rtbObject');

describe('The Video object should', () => {
  it('be an instance of RtbObject', () => {
    const video = new Video();
    video.should.be.an.instanceof(RtbObject);
  });
});