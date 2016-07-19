module.exports = {


  friendlyName: 'Sort (strings)',


  description: 'Sort an array of strings alphabetically (A to Z)',


  extendedDescription: '',


  sync: true,


  cacheable: true,


  inputs: {

    array: {
      friendlyName: 'Array',
      description: 'The array of strings to sort.',
      example: ['Roger Wilco'],
      required: true
    }

  },


  exits: {

    error: {
      description: 'Unexpected error occurred.',
    },

    success: {
      description: 'Returns the sorted array.',
      outputExample: ['Roger Wilco'],
      outputFriendlyName: 'Sorted array',
      outputDescription: 'The resulting array after sorting by ascending value'
    },

  },


  fn: function (inputs,exits) {
    return exits.success(inputs.array.sort());
  },



};
