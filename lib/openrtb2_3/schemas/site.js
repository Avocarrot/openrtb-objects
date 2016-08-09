const publisherSchema = require('./publisher');

module.exports = {
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "domain": {
      "type": "string"
    },
    "cat": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "sectioncat": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "pagecat": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "page": {
      "type": "string"
    },
    "ref": {
      "type": "string"
    },
    "search": {
      "type": "string"
    },
    "mobile": {
      "type": "number"
    },
    "privacypolicy": {
      "type": "number"
    },
    "publisher": publisherSchema,
    "content": {
      "type": "object"
    },
    "keywords": {
      "type": "string"
    },
    "ext": {
      "type": "object"
    }
  }
};
