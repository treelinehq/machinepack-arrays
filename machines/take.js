module.exports = {

  friendlyName: 'Take',
  description: 'Copy a sub-array of consecutive items from the start, from the specified array.',
  extendedDescription: '',

  sync: true,
  cacheable: true,

  inputs: {
    "array": {
      "friendlyName": "array",
      "description": "A array",
      "typeclass": "array",
      "required": true
    },
    "num": {
      "friendlyName": "num",
      "description": "A number of elements",
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
      "getExample": function(inputs, env, input) {
        if (Array.isArray(inputs.array) && inputs.array.length) {
          return inputs.array.slice(inputs.start, inputs.end||null);
        }
      },
      "isDefault": true,
      "hasDynamicOutputType": true,
      "name": "success",
      "friendlyName": "success"
    },

  },

  fn: function (inputs,exits) {
    if (!Array.isArray(inputs.array)) { return exits.error(); }
    else if (!inputs.array.length) { return exits.emptyError(); }
    return exits.success(inputs.array.slice(0, inputs.num));
  },

};
