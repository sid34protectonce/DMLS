module.exports.handler1 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello from service one!\nThis is handler1', 
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.handler2 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello from service one!\nThis is handler2",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.handler3 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello from service one!\nThis is handler3",
        input: event,
      },
      null,
      2
    ),
  };
};
