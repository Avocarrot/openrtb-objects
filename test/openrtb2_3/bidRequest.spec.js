const moment = require('moment');
const tk = require('timekeeper');
const RtbObject = require('../../lib/rtbObject');
const BidRequest = require('../../lib/openrtb2_3/bidRequest').object;
const BidRequestBuilder = require('../../lib/openrtb2_3/bidRequest').builder;

describe("BidRequest tests", () =>  {

  before(() => {
    const time = moment.utc('2015-01-14T00:00:00').format(); //Janurary 14 2015,
    //Freeze time
    tk.freeze(time);
  });

  after(() => {
    tk.reset(); // Reset
  });

  describe("The BidRequest object should", () =>  {
    it("be an instance of RtbObject", () =>  {
      const bidRequest = new BidRequest();
      bidRequest.should.be.an.instanceof(RtbObject);
    });
  });

  describe("The BidRequestBuilder should", () =>  {

    it.only("build a valid bid request object", () =>  {
      var requestObj = {
        "ver": 1,
        "layout": 6,
        "assets": [
          {
            "id": 0,
            "req": 1,
            "title": {
              "len": 25
            }
          },
          {
            "id": 1,
            "req": 1,
            "img": {
              "type": 3,
              "wmin": 100,
              "hmin": 100
            }
          },
          {
            "id": 3,
            "req": 0,
            "data": {
              "type": 2,
              "len": 90
            }
          }
        ]
      }
      
      var requestStr = JSON.stringify(requestObj);

      const builder = new BidRequestBuilder();

      const bidRequest = builder
      .timestamp(moment.utc().format())
      .id('1234')
      .at(2)
      .cur(["USD"])
      .imp([{
          "id":"1",
          "native":{
            "api": [ 3 ],
            "battr": [ 13, 14 ],
            "request": requestStr
          },
          "tagid": "eb09ff2a287598302fd631493949169b0d17f815",
          "bidfloor": 1.3,
          "secure": 0,
          "pmp": {
            "private_auction": 1,
            "deals": [
              { 
                "id": 'deal1', 
                "bidfloor": 5.5,
                "at": 3,
                "wseat": ["seat1"],
                "wadomain": ["advertiser.com"]
              }
            ]
          }
        }
      ])
      .app({
          "id":"55",
          "name":"Test App",
          "bundle":"com.foo.example",
          "domain":"example.foo.com",
          "cat":["IAB3-1"],
          "storeurl": "http://www.example.com",
          "publisher":{
              "id": "6332",
              "name": 'publisher 1'
          }
      })
      .device({
        "dnt":0,
        "ua":"Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
        "ip":"76.174.49.222",
        "ifa": "AA000DFE74168477C70D291f574D344790E0BB11",
        "connectiontype":2,
        "devicetype":1,
        "didsha1": "bbc9ff2a287598302fd631693949169b0d17f215",
        "carrier": "o2",
        "make": "samsung GT-I9300",
        "model": "Android",
        "language": "en",
        "os": "Android",
        "osv": "5.1.1",
        "geo": {
            "country": "UK",
            "lat": null,
            "lon": null
        }
      })
      .user({
          "id":"55816b39711f9b5acf3b90e313ed29e51665623f",
          "yob": 1987,
          "gender": "M",
      })
      .bcat(["IAB10"])
      .badv(["xxx.com"])
      .tmax(200)
      .site({
          "id": "10",
          "name": "Test",
          "domain": "example.com",
          "cat":["IAB3-1"],
          "sectioncat":["IAB3-1"],
          "pagecat":["IAB3-1"],
          "page": "http://www.example.com/test",
          "ref": "http://www.referrer.com",
          "search": "search string",
          "mobile": 0,
          "privacypolicy": 0,
          "publisher":{
          "id": "6332",
          "name": 'publisher 1'
      },
          "content": {
              "id": "1234",
              "episode": 1,
              "title": "title example",
              "series": "example serie",
              "url": "http://www.content.com",
              "language": 'EN'
          },
          "keywords": "keyword1,keyword2",
          "ext": {
          "extra": "1234"
      }
      })
      .regs({
          "coppa": 1,
          "ext": {
          "extra": "1234"
      }
      })
      .ext({
        'extra': '1234'
      })
      .build();

      bidRequest.should.have.property('timestamp', "2015-01-14T00:00:00Z");
      bidRequest.should.have.property('id', "1234");
      bidRequest.should.have.property('at', 2);
      // bidRequest.should.have.property('cur');
      // bidRequest.cur.should.eql(["USD"]);

      //Check imp object
      bidRequest.imp.length.should.equal(1);
      bidRequest.imp[0].should.have.properties({
        id: '1',
        bidfloor: 1.3,
        tagid: 'eb09ff2a287598302fd631493949169b0d17f815',
        secure: 0,
      });

      //Check imp.native object
      const native = bidRequest.imp[0].native;
      native.should.have.property('api', [3]);
      native.should.have.property('battr', [13,14]);
      native.should.have.property('request')
      var request = JSON.parse(native.request);
      request.should.eql({
        assets: [
          { id: 0, req: 1, title: { len: 25 } },
          { id: 1, img: { hmin: 100, type: 3, wmin: 100 }, req: 1 },
          { data: { len: 90, type: 2 }, id: 3, req: 0 }
        ],
        layout: 6,
        ver: 1
      });

      //Check imp.pmp object
      const pmp = bidRequest.imp[0].pmp;
      pmp.should.have.property('private_auction', 1);
      pmp.should.have.property('deals');
      pmp.deals.should.have.lengthOf(1);
      pmp.deals[0].should.eql({ 
        'id': 'deal1', 
        'bidfloor': 5.5,
        'at': 3,
        'wseat': ['seat1'],
        'wadomain': ['advertiser.com']
      });

      //Check app object
      bidRequest.app.should.have.properties({
        cat: [ 'IAB3-1' ],
        id: '55',
        bundle: 'com.foo.example',
        domain: 'example.foo.com',
        name: 'Test App',
        storeurl: 'http://www.example.com'
      });

      //Check app.publisher object
      bidRequest.app.publisher.should.have.properties({ id: '6332', name: 'publisher 1' });

      //Check device object
      bidRequest.device.should.have.properties({
          carrier: 'o2',
          connectiontype: 2,
          didsha1: 'bbc9ff2a287598302fd631693949169b0d17f215',
          ua: 'Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
          ifa: 'AA000DFE74168477C70D291f574D344790E0BB11',
          dnt: 0,
          ip: '76.174.49.222',
          geo: {
            country: "UK"
          },
          language: 'en',
          make: 'samsung GT-I9300',
          model: 'Android',
          os: 'Android',
          osv: '5.1.1',
          devicetype: 1
      });

          //Check user object
      bidRequest.user.should.have.properties({
        id: '55816b39711f9b5acf3b90e313ed29e51665623f',
        gender: 'M',
        yob: 1987
      });

      //Check bcat property
      bidRequest.bcat.should.eql(["IAB10"]);

      //Check badv property
      bidRequest.badv.should.eql(["xxx.com"]);

      //Check tmax property
      bidRequest.tmax.should.equal(200);

          //Check site object
      bidRequest.site.should.have.properties({
            id: "10",
            name: "Test",
            domain: "example.com",
            cat:["IAB3-1"],
            sectioncat:["IAB3-1"],
            pagecat:["IAB3-1"],
            page: "http://www.example.com/test",
            ref: "http://www.referrer.com",
            search: "search string",
            mobile: 0,
            privacypolicy: 0,
            keywords: "keyword1,keyword2",
            ext: {
              extra: "1234"
            }
      });

          //Check site.publisher object
      bidRequest.site.publisher.should.have.properties({ id: '6332', name: 'publisher 1' });

          //Check site.content object
      bidRequest.site.content.should.have.properties({
              id: "1234",
              episode: 1,
              title: "title example",
              series: "example serie",
              url: "http://www.content.com",
              language: 'EN'
          });

          //Check regs object
          bidRequest.regs.should.have.properties({
            coppa: 1,
            ext: {
              extra: "1234"
            }
          });

      //Check ext object
      bidRequest.ext.should.have.properties({
        'extra': '1234'
      });
    });

    it("reject an invalid Bid Request", () => {
      const builder = new BidRequestBuilder();

      (() => {
        builder
        .timestamp(moment.utc().format())
        .id('1')
        .build();
      }).should.throw('Validation failed');
    });
  });
});
