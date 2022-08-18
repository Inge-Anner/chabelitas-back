const chabelitaController = require('../controllers/category.controller');
const headers = require('../lib/headers');
const getBody = require('../lib/getBody');
//
const getCategory = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  let response = {
    headers,
    statusCode: 400,
    body: JSON.stringify({
      message: 'Category not Getting',
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

    const result = await chabelitaController.getCategory(data);
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

const getCategoryById = async (event, context, callback) => {
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
  
      const result = await chabelitaController.getCategoryById(data);
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

  const insertCategory = async (event, context, callback) => {
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
  
      const result = await chabelitaController.insertCategory(data);
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

  const updateCategory = async (event, context, callback) => {
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
  
      const result = await chabelitaController.updateCategory(data);
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

  const deleteCategoryById = async (event, context, callback) => {
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
  
      const result = await chabelitaController.deleteCategoryById(data);
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
    getCategory,
    getCategoryById,
    insertCategory,
    updateCategory,
    deleteCategoryById,
  }; 