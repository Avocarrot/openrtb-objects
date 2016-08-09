module.exports = {
	"type": "object",
	"properties": {
		"id": {
		  "type": "string"
		},
		"buyeruid": {
		  "type": "string"
		},
		"yob": {
	      "type": "integer"
	    },
	    "gender": {
		  "type": "string"
		},
		"keywords": {
	      "type": "string"
	    },
	    "customdata": {
		  "type": "string"
		},
		"geo": {
	      "type": "object"
	    },
	    "data": {
	      "type": "array",
	      "items": {
	        "type": "object"
	      }
	    },
		"ext": {
		  "type": "object"
		}
	}
};