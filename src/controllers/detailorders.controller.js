const sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const schema = require('../schemas/detailorders.schema');
const { DetailsOrder } = require('../models');//

const getDetailsOrderById = async (data) => {
  try {
    const { error, value } = schema.getDetailOrderById.validate(data, {
      abortEarly: false,
    });

    if (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.details.map((e) => e.message),
      };
    } else {
      const limit = value.limit ? parseInt(value.limit, 10) : 10;

      const findOptions = {
        where: { orderId: value.orderId },
        limit,
        raw: true,
      };

      const getDetailOrder = await DetailsOrder.findAll(findOptions);
      console.info('get DetailOrder:', JSON.stringify(getDetailOrder));

      if (getDetailOrder) {
        console.info('Get Product:', JSON.stringify(getDetailOrder));
        response = {
          error: false,
          statusCode: 200,
          message: 'Get DetailOrder Successfully',
          data: getProduct,
        };
      } else {
        response = {
          error: true,
          statusCode: 404,
          message: 'DetailOrder not Getting',
        };
      }
      return response;
    }
  } catch (error) {
    console.error(error);
    response = {
      error: true,
      statusCode: 403,
      message: 'Error to Get DetailOrder',
    };
    return response;
  }
};

const insertDetailOrder = async (data) => {
  try {
    const { error, value } = schema.insertDetailOrder.validate(data, {
      abortEarly: false,
    });

    if (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.details.map((e) => e.message),
      };
    } else {
      console.info(
        `Insert DetailOrder to DB: ${JSON.stringify(value)}`
      );

      let insertedDetailOrder = null;

      insertedDetailOrder = await DetailsOrder.create(value);

      if (insertedDetailOrder) {
        console.info('Order inserted:', JSON.stringify(insertedDetailOrder));
        response = {
          error: false,
          statusCode: 201,
          message: 'DetailOrder Inserted',
          data: insertedDetailOrder,
        };
      } else {
        response = {
          error: true,
          statusCode: 404,
          message: 'DetailOrder not Inserted',
        };
      }
      return response;
    }
  } catch (error) {
    console.error(error);
    response = {
      error: true,
      statusCode: 403,
      message: 'Error to Insert DetailOrder',
    };
    return response;
  }
};

const updateDetailsOrder = async (data) => {
  try {
    const { error, value } = schema.updateDetailsOrder.validate(data, {
      abortEarly: false,
    });

    if (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.details.map((e) => e.message),
      };
    } else {
      const { orderId } = value;
      console.info(
        `Update DetailsOrder to DB: id:${orderId}`
      );

      let updatedDetailsOrder = null;

      const getDetailsOrder = await DetailsOrder.findOne({
        where: { orderId },
      });
      console.info(`get DetailsOrder: ${JSON.stringify(getDetailsOrder)}`);

      const params = {
        
      };

      updatedDetailsOrder = await getDetailsOrder.update(params);
      console.info('DetailsOrder updated:', JSON.stringify(updatedDetailsOrder));

      if (updatedDetailsOrder) {
        response = {
          error: false,
          statusCode: 200,
          message: 'DetailsOrder Updated',
          data: updatedDetailsOrder,
        };
      } else {
        response = {
          error: true,
          statusCode: 404,
          message: 'DetailsOrder not Updated',
        };
      }
      return response;
    }
  } catch (error) {
    console.error(error);
    response = {
      error: true,
      statusCode: 403,
      message: 'Error to Updated Question',
    };
    return response;
  }
};

module.exports = {
  getDetailsOrderById,
  insertDetailOrder,
  updateDetailsOrder,
};