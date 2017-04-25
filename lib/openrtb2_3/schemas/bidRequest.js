'use strict'

const appSchema = require('./app');
const impSchema = require('./imp');
const deviceSchema = require('./device');
const userSchema = require('./user');
const pmpSchema = require('./pmp');
const regsSchema = require('./regs');
const siteSchema = require('./site');

module.exports = {
  "properties": {
    "id": {
      "type": "string"
    },
    "at": {
      "type": "number"
    },
    "cur": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "imp": impSchema,
    "device": deviceSchema,
    "user": userSchema,
    "bcat": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "badv": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "test": {
      "type": "number"
    },
    "tmax": {
      "type": "number"
    },
    "site": siteSchema,
    "regs": regsSchema,
    "ext": {
      "type": "object"
    }
  },
  "required": ["id", "imp"]
};