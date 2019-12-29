export const formBaseElement = {
  'channel': {
    'type': 'string',
    'title': 'channel',
    'enum': [
      'rv',
      'is',
    ],
  },
  'type': 'object',
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
            'type': 'array',
            'title': 'validator',
            'items': {
              'type': 'object',
              'properties': {
                'title': {
                  'type': 'string',
                  'title': 'key',
                  'description': 'Choose key: ',
                  'default': 'string',
                  'enum': [
                    'type',
                    'minimum',
                    'maximum',
                    'maxLength',
                    'minLength',
                  ],
                },
                'details': {
                  'type': 'string',
                  'title': 'value',
                  'description': 'Provide possible value',
                },
              },
            },
          },
        },
        'required': [
          'key',
          'title',
          'description',
        ],
      },
    },
  },
};
