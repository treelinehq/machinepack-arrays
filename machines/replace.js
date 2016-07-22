module.exports = {


  friendlyName: 'Replace item',


  description: 'Replace the item located at the specified index and return the result (a new array).',


  sync: true,


  sideEffects: 'cacheable',


  inputs: {

    array: {
      description: 'The array where the new item should be inserted.',
      example: ['*'],
      required: true
    },

    index: {
      friendlyName: 'Replace at (index)',
      description: 'The index of the item to replace.',
      example: 1,
      required: true
    },

    value: {
      friendlyName: 'New value',
      description: 'The new value to replace the old one with.',
      example: '*',
      required: true
    }

  },


  exits: {

    success: {
      like: 'array',
      outputFriendlyName: 'Array with replaced item',
      outputDescription: 'The resulting array after replacing the specified item.'

    },

    notFound: {
      friendlyName: 'Index out of bounds',
      description: 'The array does not have enough items for anything to exist at the specified index.',
    },

  },


  fn: function (inputs,exits) {

    if (inputs.index < 0) {
      return exits.error('Index must be least zero.');
    }
    if (inputs.array.length < inputs.index) {
      return exits.notFound();
    }

    // Replace item
    inputs.array.splice(inputs.index, 1, inputs.value);

    return exits.success(inputs.array);

  },



};
