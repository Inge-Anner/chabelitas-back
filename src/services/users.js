const chabelitaController = require('../controllers/users.controller');
const headers = require('../lib/headers');
const getBody = require('../lib/getBody');
//
const getUser = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  let response = {
    headers,
    statusCode: 400,
    body: JSON.stringify({
      message: 'Users not Getting',
    }),
  };
  try {
    const body = getBody(event) || {};
    const data = {
      ...body,
      ...event.pathParameters,
      ...event.queryStringParameters,
    };
    console.info(`data ${JSON.stringify(data)}`);

    const result = await chabelitaController.getUser(data);
    console.log(`result ${JSON.stringify(result)}`);
    if (!result.error) {
      response = {
        headers,
        statusCode: 200,
        body: JSON.stringify(result),
      };
    } else {
      response = {
        headers,
        statusCode: result.statusCode,
        body: JSON.stringify(result),
      };
    }
  } catch (error) {
    console.log(`error ${error}`);
    response = {
      headers,
      statusCode: 403,
      body: JSON.stringify(error),
    };
  } finally {
    callback(null, response);
  }
};

const getUserById = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
  
    let response = {
      headers,
      statusCode: 400,
      body: JSON.stringify({
        message: 'Flow not Getting',
      }),
    };
    try {
      const body = getBody(event) || {};
      const data = {
        ...body,
        ...event.pathParameters,
        ...event.queryStringParameters,
      };
      console.info(`data ${JSON.stringify(data)}`);
  
      const result = await chabelitaController.getUserById(data);
      console.log(`result ${JSON.stringify(result)}`);
      if (!result.error) {
        response = {
          headers,
          statusCode: 200,
          body: JSON.stringify(result),
        };
      } else {
        response = {
          headers,
          statusCode: result.statusCode,
          body: JSON.stringify(result),
        };
      }
    } catch (error) {
      console.log(`error ${error}`);
      response = {
        headers,
        statusCode: 403,
        body: JSON.stringify(error),
      };
    } finally {
      callback(null, response);
    }
  };

  const insertUser = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
  
    let response = {
      headers,
      statusCode: 400,
      body: JSON.stringify({
        message: 'Flow Not Inserted',
      }),
    };
    try {
      const body = getBody(event) || {};
      const data = {
        ...body,
        ...event.pathParameters,
        ...event.queryStringParameters,
      };
      console.info(`data ${JSON.stringify(data)}`);
  
      const result = await chabelitaController.insertUser(data);
      console.log(`result ${JSON.stringify(result)}`);
      if (!result.error) {
        response = {
          headers,
          statusCode: 200,
          body: JSON.stringify(result),
        };
      } else {
        response = {
          headers,
          statusCode: result.statusCode,
          body: JSON.stringify(result),
        };
      }
    } catch (error) {
      console.log(`error ${error}`);
      response = {
        headers,
        statusCode: 403,
        body: JSON.stringify(error),
      };
    } finally {
      callback(null, response);
    }
  };
  
  const updateUser = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
  
    let response = {
      headers,
      statusCode: 400,
      body: JSON.stringify({
        message: 'Flow Not Updated',
      }),
    };
    try {
      const body = getBody(event) || {};
      const data = {
        ...body,
        ...event.pathParameters,
        ...event.queryStringParameters,
      };
      console.info(`data ${JSON.stringify(data)}`);
  
      const result = await chabelitaController.updateUser(data);
      console.log(`result ${JSON.stringify(result)}`);
      if (!result.error) {
        response = {
          headers,
          statusCode: 200,
          body: JSON.stringify(result),
        };
      } else {
        response = {
          headers,
          statusCode: result.statusCode,
          body: JSON.stringify(result),
        };
      }
    } catch (error) {
      console.log(`error ${error}`);
      response = {
        headers,
        statusCode: 403,
        body: JSON.stringify(error),
      };
    } finally {
      callback(null, response);
    }
  };
  
  const deleteUser = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
  
    let response = {
      headers,
      statusCode: 400,
      body: JSON.stringify({
        message: 'Flow Not Deleted',
      }),
    };
    try {
      const body = getBody(event) || {};
      const data = {
        ...body,
        ...event.pathParameters,
        ...event.queryStringParameters,
      };
      console.info(`data ${JSON.stringify(data)}`);
  
      const result = await chabelitaController.deleteUserById(data);
      console.log(`result ${JSON.stringify(result)}`);
      if (!result.error) {
        response = {
          headers,
          statusCode: 200,
          body: JSON.stringify(result),
        };
      } else {
        response = {
          headers,
          statusCode: result.statusCode,
          body: JSON.stringify(result),
        };
      }
    } catch (error) {
      console.log(`error ${error}`);
      response = {
        headers,
        statusCode: 403,
        body: JSON.stringify(error),
      };
    } finally {
      callback(null, response);
    }
  };
  
  module.exports = {
    getUser,
    getUserById,
    insertUser,
    updateUser,
    deleteUser,
  };