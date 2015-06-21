module.exports = {


  friendlyName: 'Take right',
  description: 'Copy a sub-array of consecutive items from the end, from the specified array.',
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
        var end = inputs.array.length - 1;
        if (Array.isArray(inputs.array) && inputs.array.length) {
          return inputs.array.slice(end-inputs.num, end);
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
    var end = inputs.array.length;
    return exits.success(inputs.array.slice(end-inputs.num, end));
  },

};
