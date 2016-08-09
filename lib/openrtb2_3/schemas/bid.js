module.exports = {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "dealid": {
        "type": "string"
      },
      "impid": {
        "type": "string"
      },
      "price": {
        "type": "number"
      },
      "nurl": {
        "type": "string"
      },
      "adm": {
        "type": "string"
      },
      "adomain": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "bundle": {
        "type": "string"
      },
      "iurl": {
        "type": "string"
      },
      "cid": {
        "type": "string"
      },
      "crid": {
        "type": "string"
      },
      "cat": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "h": {
        "type": "integer"
      },
      "w": {
        "type": "integer"
      },
      "cat": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "ext": {
        "type": "object"
      }
    },
    "required": ["id", "impid", "price"]
  }
};
