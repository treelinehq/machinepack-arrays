module.exports = {


  friendlyName: 'Remove duplicate dictionaries',


  description: 'Build a duplicate-free version of an array of dictionaries, judging uniqueness based on a particular key.',


  sync: true,


  sideEffects: 'cacheable',


  inputs: {

    array: {
      friendlyName: 'Array of dictionaries',
      description: 'The array of dictionaries to remove duplicates from.',
      example: [{}],
      required: true
    },

    key: {
      friendlyName: 'Unique key',
      description: 'The key to use when determining uniqueness.',
      example: 'id',
      required: true
    }

  },


  exits: {

    success: {
      like: 'array',
      outputFriendlyName: 'De-duplicated Array',
      outputDescription: 'The resulting array after removing duplicate items.'

    }

  },


  fn: function(inputs, exits) {
    var _ = require('lodash');
    var set = _.uniq(inputs.array, false, inputs.key);
    return exits.success(set);
  }

};
