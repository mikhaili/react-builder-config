export const formBaseElement = {
  'properties': {
    'fields': {
      'type': 'array',
      'title': 'Fields',

      'items': {
        'type': 'object',
        'properties': {
          'key': {
            'type': 'string',
            'title': 'key',
          },
          'defaultValue': {
            'type': 'string',
            'title': 'defaultValue',
          },
          'type': {
            'type': 'string',
            'title': 'type',
            'default': 'string',
            'enum': [
              'string',
              'number',
              'boolean',
              'array',
            ],
          },
          'title': {
            'type': 'string',
            'title': 'title',
          },
          'description': {
            'type': 'string',
            'title': 'description',
          },
          'validator': {
            'type': 'string',
            'title': 'validator',
          }
        }
      }
    }
  }
};
