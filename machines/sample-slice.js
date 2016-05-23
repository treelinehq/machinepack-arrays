module.exports = {


  friendlyName: 'Sample slice',
  description: 'Randomly select a slice of item(s) from an array',
  extendedDescription: '',

  sync: true,

  inputs: {
    "array": {
      "friendlyName": "array",
      "description": "A array",
      "typeclass": "array",
      "required": true
    },
    "num": {
      "friendlyName": "num",
      "description": "A number of items",
      "example": 2,
      "required": true
    }
  },

  defaultExit: 'success',

  exits: {
    error: {
      description: 'Unexpected error occurred.',
    },
    emptyError: {
      description: 'Empty array.',
    },
    success: {
      description: 'Done.',
      example: ['lorem ipsum', 5],
      "isDefault": true,
      "hasDynamicOutputType": true,
      "name": "success",
      "friendlyName": "success"
    }
  },

  fn: function (inputs,exits) {
    if (!Array.isArray(inputs.array)) { return exits.error(); }
    else if (!inputs.array.length) { return exits.emptyError(); }
    var rdm = Math.floor(Math.random() * ( inputs.array.length - inputs.num ));
    return exits.success(inputs.array.splice(rdm, inputs.num));
  },

};
