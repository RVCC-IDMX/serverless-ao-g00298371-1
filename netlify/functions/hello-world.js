/* eslint-disable func-names */
exports.handler = async function () {
  console.log('I am in the handler.');
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World!',
    }),
  };
};
