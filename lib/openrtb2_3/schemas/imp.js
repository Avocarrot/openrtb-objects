const videoSchema = require('./video');
const bannerSchema = require('./banner');
const nativeSchema = require('./native');

module.exports = {
	"type": "array",
	"items": {
		"type": "object",
  	"properties": {
			"id": {
			  "type": "string"
			},
			"banner": bannerSchema,
			"video": videoSchema,
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
};
