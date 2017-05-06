module.exports = {
  'type': 'object',
  'properties': {
    'mimes': {
      'type': 'array',
      'items': {
        'type': 'string'
      }
    },
    'minduration': {
      'type': 'integer'
    },
    'maxduration': {
      'type': 'integer'
    },
    'protocols': {
      'type': 'array',
      'items': {
        'type': 'integer'
      }
    },
    'w': {
      'type': 'integer'
    },
    'h': {
      'type': 'integer'
    },
    'startdelay': {
      'type': 'integer'
    },
    'linearity': {
      'type': 'integer'
    },
    'sequence': {
      'type': 'integer'
    },    
    'battr': {
      'type': 'array',
      'items': {
        'type': 'integer'
      }
    },
    'maxextended': {
      'type': 'integer'
    },    
    'minbitrate': {
      'type': 'integer'
    },    
    'maxbitrate': {
      'type': 'integer'
    },    
    'boxingallowed': {
      'type': 'integer'
    },    
    'playbackmethod': {
      'type': 'array',
      'items': {
        'type': 'integer'
      }
    },    
    'delivery': {
      'type': 'array',
      'items': {
        'type': 'integer'
      }
    },        
    'pos': {
      'type': 'integer'
    },    
    'companionad': {
      'type': 'array',
      'items': {
        'type': 'integer'
      }
    },
    'api': {
      'type': 'array',
      'items': {
        'type': 'integer'
      }
    },
    'companiontype': {
      'type': 'array',
      'items': {
        'type': 'integer'
      }
    },
    'ext': {
      'type': 'object'
    }
  },
  'required': ['mimes']
}; 
