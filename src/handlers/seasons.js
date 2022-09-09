const chabelitaController = require('../controllers/seasons.controller');
const headers = require('../lib/headers');
const getBody = require('../lib/getBody');

const getSeason = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  let response = {
    headers,
    statusCode: 400,
    body: JSON.stringify({
      message: 'Seasons not Getting',
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

    const result = await chabelitaController.getSeason(data);
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

const getSeasonByAdmin = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  let response = {
    headers,
    statusCode: 400,
    body: JSON.stringify({
      message: 'Seasons not Getting',
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

    const result = await chabelitaController.getSeasonByAdmin(data);
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


const getSeasonById = async (event, context, callback) => {
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

    const result = await chabelitaController.getSeasonById(data);
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

const insertSeason = async (event, context, callback) => {
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

    const result = await chabelitaController.insertSeason(data);
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

const updateSeason = async (event, context, callback) => {
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

    const result = await chabelitaController.updateSeason(data);
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

const deleteSeasonById = async (event, context, callback) => {
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

    const result = await chabelitaController.deleteSeasonById(data);
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
  getSeason,
  getSeasonByAdmin,
  getSeasonById,
  insertSeason,
  updateSeason,
  deleteSeasonById,
};
//