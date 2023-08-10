module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello from service two!',
        input: event,
      },
      null,
      2
    ),
  };
};
