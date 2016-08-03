var bannerSchema = require('./banner');
var nativeSchema = require('./native');

var schema = {
	"type": "array",
	"items": {
		"type": "object",
  	"properties": {
			"id": {
			  "type": "string"
			},
			"banner": bannerSchema,
			"video": {
			  "type": "object"
			},
			"native": nativeSchema,
			"displaymanager": {
			  "type": "string"
			},
			"displaymanagerver": {
			  "type": "string"
			},
			"instl": {
			  "type": "integer"
			},
			"tagid": {
			  "type": "string"
			},
			"bidfloor": {
			  "type": "number"
			},
			"bidfloorcur": {
			  "type": "string"
			},
			"secure": {
			  "type": "integer"
			},
			"iframebuster": {
		      "type": "array",
		      "items": {
		        "type": "string"
		      }
		    },
			"pmp": {
			  "type": "object"
			},
			"ext": {
			  "type": "object"
			}
		},
	},
	"required": ["id"]
}

module.exports = schema;
