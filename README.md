# OpenRTB Objects

[![NPM](https://nodei.co/npm/openrtb.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/openrtb/)


## Purpose
A Node.js library which builds, validates and processes OpenRTB objects. This project was inspired by the good people at [Metamarkets](https://metamarkets.com/) who build a [similar library for Java](https://github.com/metamx/rad-tech-datatypes). 

## Contents

- [Installation](#installation)
- [Constructing objects](#constructing-objects)
- [Validating objects](#validating-objects)
- [Objects API](#objects-api)
- [Contributing](#contributing)

## Installation

```npm install openrtb```

## Constructing objects

The library exposes object builders which are used to construct new objects. 

**Supported objects builders**

**OpenRTB API Specification Version 2.3**

- BidRequest
  - Imp
    - Native
    - Banner
    - Pmp
      - Deal
  - App
    - Publisher
  - Site      
    - Publisher
  - Device
  - User
  - Reqs
     
- BidResponse
    - Id
    - SeatBid
      - Bid 

**OpenRTB API Specification Version 2.2**

Not supported but most objects for v2.3 should work for this one too.

### Construct a bid request
```javascript
  var bidRequestBuilder = openrtb.getBuilder({
    builderType: 'bidRequest'
  });
  var bidRequest = bidRequestBuilder
  .timestamp(moment.utc().format())
  .id('1234')
  .at(2)
  .imp([
    {
      "id":"1",
      "native":{
        "request": {
          "ver": 1,
          "layout": 6,
          "assets": [
            { "id": 0, "req": 1, "title": { "len": 25 } }, 
            { "id": 1, "req": 1, "img": { "type": 3, "wmin": 100, "hmin": 100 } },
            { "id": 3, "req": 0, "data": { "type": 2, "len": 90 } }
          ]
        }
      },
      "tagid": "eb09ff2a287598302fd631493949169b0d17f815",
      "bidfloor": 1.3,
      "pmp": {
        "private_auction": 1,
        "deals": [
          { 
            "id": 'deal1', 
            "bidfloor": 5.5,
            "bidfloorcur": "USD",
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
    "cat":["IAB3-1"],
    "storeurl": "http://www.example.com",
    "publisher":{  
        "id": "6332"
    }
  })
  .device({
    "dnt":0,
    "ua":"Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
    "ip":"76.174.49.222",
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
        "country": "UK"
    }
  })
  .user({
    "id":"55816b39711f9b5acf3b90e313ed29e51665623f",
    "yob": 1987,
    "gender": "M"
  })
  .bcat(["IAB10"])
  .badv(["xxx.com"])
  .ext({
    'extra': '1234'
  })
  .build();
```

### Construct a bid response
```javascript
  var bidResponseBuilder = openrtb.getBuilder({
    builderType: 'bidResponse'
  });
  var bidResponse = bidResponseBuilder
  .timestamp(moment.utc().format())
  .status(1)
  .id('1234-5678')
  .bidderName('test-bidder')
  .seatbid([
    {
      bid: [
        {
          status: 1,
          clearPrice: 0.9,
          adid: 1,
          id: '819582c3-96b2-401a-b60d-7ac3c117a513',
          dealid: 'deal1',
          impid: 'e317ae49-8cd1-47b0-b022-02a8830182ce',
          price: 1.05,
          nurl: 'http://trackwin.com/win?pid=784170&data=OuJifVtEK&price=${AUCTION_PRICE}',
          adm: {"native":{"assets":[{"id":0,"title":{"text":"Test Campaign"}},{"id":1,"img":{"url":"http://cdn.exampleimage.com/a/100/100/2639042","w":100,"h":100}},{"id":2,"img":{"url":"http://cdn.exampleimage.com/a/50/50/2639042","w":50,"h":50}},{"id":3,"data":{"value":"This is an amazing offer..."}},{"id":5,"data":{"value":"Install"}}],"link":{"url":"http://trackclick.com/Click?data=soDvIjYdQMm3WBjoORcGaDvJGOzgMvUap7vAw2"},"imptrackers":["http://trackimp.com/Pixel/Impression/?bidPrice=${AUCTION_PRICE}&data=OuJifVtEKZqw3Hw7456F-etFgvhJpYOu0&type=img"]}},
          cid: '9607',
          crid: '335224',
          iurl: 'http://cdn.testimage.net/1200x627.png',
          adomain: ["example.com"] 
        } 
      ]
    }
  ])
  .build();
```

## Validating objects

During the build process of the bid response, a validation process is performed on the object and if there are discrepancies with the official OpenRTB documentation, a Validation Error is thrown. E.g if the id is missing from the bid response:

```javascript
  var bidResponseBuilder = openrtb.getBuilder({
    builderType: 'bidResponse'
  });

  //Trying to build a bid request without a response id
  try { 
    bidResponseBuilder
    .timestamp(moment.utc().format())
    .build();
  } catch(err) {
    //err.message: "Validation failed"
    //err.errors:
    //'[{
    //    dataPath: '.id',
    //    keyword: 'required',
    //    message: 'is a required property'
      //}]'
  }
```

## Objects API

All objects inherit common functionality from a base RtbObject and also define some functionality of their own. See below for the documentation. 

### RtbObject

##### `.stringify()` 

Converts the object to a JSON string. Properties that are undefined are not included.

### BidRequest

**Additional Properties**

##### `timestamp` 

The timestamp of the bid request. If not provided explicitly at build time the default will be the current UTC when the object is created.

### BidResponse

**Additional Properties**

##### `status`

The table below lists the possible values for a bid response status.

| Status  | Description  |
|---|---|
| 1 | Filled |
| 2 | Timeout |
| 3 | Invalid JSON |
| 4 | HTTP Error |
| 5 | Bid request failed |
| 6 | No bid |

##### `bidderName`

The bidder's name used for reporting and debugging.

##### `timestamp`

The timestamp of bid response. If not provided explicitly at build time the default will be the current UTC when the object is created.

##### `id`

The id of the bid request to which this is a response.

**Functions**

##### `forEachBid(callback)` 

It executes a provided function once per bid. The callback is called with two arguments

`bid` The current bid being processed in the bids array.
`index` The index of the current bid being processed in the bids array.

### Bid

**Additional Properties**

##### `status`

The table below lists the possible values for a bid status.

| Status  | Description  |
|---|---|
| 1  | Won  |
| 2  | Lost on Price |
| 3  | Below floor  |
| 4  | Markup Delivery Failure  |
| 5  | Unscreenable  |
| 6  | Blocked by publisher  |
| 7  | Unverified creative  |
| 8  | Blocked advertiser  |
| 9  | Blocked content category  |
| 10  | Block creative attribute |

##### `clearPrice`

The bid clearing price determined after an auction.

**Functions**

##### `replaceMacros(string, [valuesMap])` 

Replaces auction macros on a given string and returns the altered string.

```string``` is the string with the MACROS that will be replaced. e.g the nurl of a bid

```valuesMap``` is an object containing the values to be replaced. The keys are the macro names. See an example below.

```
{
  '${AUCTION_ID}': '1234',
  '${AUCTION_PRICE}': 0.6
}
```

If no ```valuesMap``` is passed the parsed values will be used. A special case is ```${AUCTION_ID}``` which if not passed then it will not be replaced.

```string``` is a required argument.


## Disclaimer

This project is a work in progress. It was created for the specific purposes of the [Avocarrot Native Ad Exchange (AVX)](http://www.avocarrot.com/avx/) and some objects fields or functionality might be missing. If you want something to be added then please either get in touch or [submit your own pull request](#contributing).

## Contributing

This project is work in progress and we'd love more people contributing to it. 

1. Fork the repo
2. Apply your changes
3. Write tests
4. Submit your pull request

For feedback or suggestions you can drop us a line at support@avocarrot.com
