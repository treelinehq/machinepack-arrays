module.exports = {


  friendlyName: 'Detach last',
  description: 'Detach last element from a specified array and return last element and the rest of the array',
  extendedDescription: '',

  sync: true,
  cacheable: true,

  inputs: {
    "array": {
      "friendlyName": "array",
      "description": "A array",
      "typeclass": "array",
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
          return {
            last: inputs.array.pop(),
            array: inputs.array
          };
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
    return exits.success({
      last: inputs.array.pop(),
      array: inputs.array
    });
  },

};
