module.exports = {
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "bidfloor": {
      "type": "number"
    },
    "bidfloorcur": {
      "type": "string"
    },
    "at": {
      "type": "integer"
    },
    "wseat": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "wadomain": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "ext": {
      "type": "object"
    }
  },
  "required": ["id"]
};