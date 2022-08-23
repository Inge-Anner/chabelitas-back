const chabelitaController = require('../controllers/visualizations.controller');
const headers = require('../lib/headers');
const getBody = require('../lib/getBody');

const getVisualization = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  let response = {
    headers,
    statusCode: 400,
    body: JSON.stringify({
      message: 'Visualizations not Getting',
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

    const result = await chabelitaController.getVisualization(data);
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

const getVisualizationById = async (event, context, callback) => {
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
  
      const result = await chabelitaController.getVisualizationById(data);
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

  const insertVisualization = async (event, context, callback) => {
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
  
      const result = await chabelitaController.insertVisualization(data);
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
    getVisualization,
    getVisualizationById,
    insertVisualization,
};