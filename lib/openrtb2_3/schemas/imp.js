const bannerSchema = require('./banner');
const nativeSchema = require('./native');

const schema = {
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
  	"required": ["id"]
}

module.exports = schema;
