const chabelitaController = require('./controllers/products.controller');
const headers = require('./lib/headers');
const getBody = require('./lib/getBody');

const getProducts = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  let response = {
    headers,
    statusCode: 400,
    body: JSON.stringify({
      message: 'Products not Getting',
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

    const result = await chabelitaController.getProduct(data);
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

const getProductById = async (event, context, callback) => {
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

    const result = await chabelitaController.getProductById(data);
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

const insertProduct = async (event, context, callback) => {
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

    const result = await chabelitaController.insertProduct(data);
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

const updateProduct = async (event, context, callback) => {
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

    const result = await chabelitaController.updateProduct(data);
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

const deleteProduct = async (event, context, callback) => {
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

    const result = await chabelitaController.deleteProductById(data);
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
  getProducts,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
};
//