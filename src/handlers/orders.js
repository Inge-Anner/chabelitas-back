const chabelitaController = require('../controllers/orders.controller');
const headers = require('../lib/headers');
const getBody = require('../lib/getBody');//

const getOrder = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  let response = {
    headers,
    statusCode: 400,
    body: JSON.stringify({
      message: 'Order not Getting',
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

    const result = await chabelitaController.getOrder(data);
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

const getOrderById = async (event, context, callback) => {
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

    const result = await chabelitaController.getOrderById(data);
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

const getOrderByDate = async (event, context, callback) => {
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

    const result = await chabelitaController.getOrderByDate(data);
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

const insertOrder = async (event, context, callback) => {
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

    const result = await chabelitaController.insertOrder(data);
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

const updateOrder = async (event, context, callback) => {
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

    const result = await chabelitaController.updateOrder(data);
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

const deleteOrderById = async (event, context, callback) => {
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

    const result = await chabelitaController.deleteOrderById(data);
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
  getOrder,
  getOrderById,
  getOrderByDate,
  insertOrder,
  updateOrder,
  deleteOrderById,
};