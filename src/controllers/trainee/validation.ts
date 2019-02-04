const validation = {
  post: {
    id: {
      in: ['body'],
      required: true,
      string: true,
      custom(value) {
        console.log('Value', value);
      },
    },
    name: {
      errorMessage: 'Name is required',
      in: ['body'],
      regex: /^[a-zA-Z ]{2,30}$/,
      required: true,
    },
  },

  get: {
    limit: {
      default: 10,
      errorMessage: 'Limit is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
    skip: {
      default: 0,
      errorMessage: 'Limit is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
  },
  put: {
    dataToUpdate: {
      custom: ('{function(dataToUpdate)}'),
      in: ['body'],
      isObject: true,
      required: true,
    },
    id: {
      in: ['body'],
      required: true,
      string: true,
    },
  },
};
export default validation;
