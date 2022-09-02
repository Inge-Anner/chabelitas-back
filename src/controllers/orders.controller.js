const sequelize = require('sequelize');
const { Op } = require("sequelize");
const { v4: uuidv4 } = require('uuid');
const schema = require('../schemas/orders.schema');
const { Order } = require('../models');//
const moment = require ('moment-timezone')

const getOrder = async (data) => {
  try {
    const { error, value } = schema.getOrder.validate(data, {
      abortEarly: false,
    });

    if (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.details.map((e) => e.message),
      };
    } else {

      const findOptions = {
        where: {
          statusOrderId: {
            [Op.between]: [1, 3]
          }
        },
        raw: true,
      };

      const getOrder = await Order.findAll(findOptions);
      console.info('get Order:', JSON.stringify(getOrder));

      if (getOrder) {
        console.info('Get Order:', JSON.stringify(getOrder));
        response = {
          error: false,
          statusCode: 200,
          message: 'Get Order Successfully',
          data: getOrder,
        };
      } else {
        response = {
          error: true,
          statusCode: 404,
          message: 'Questions not Getting',
        };
      }
      return response;
    }
  } catch (error) {
    console.error(error);
    response = {
      error: true,
      statusCode: 403,
      message: 'Error to Get Questions',
    };
    return response;
  }
};

const getOrderById = async (data) => {
  try {
    const { error, value } = schema.getOrderById.validate(data, {
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
      console.info(`get Order to DB with id: ${orderId}`);
      let getOrder = null;

      const where = { orderId };

      getOrder = await Order.findOne({
        where,
      });
      console.info('get Order:', JSON.stringify(getOrder));

      if (getOrder) {
        console.info('Get Order By Id:', JSON.stringify(getOrder));
        response = {
          error: false,
          statusCode: 200,
          message: 'Get Order Successfully',
          data: getOrder,
        };
      } else {
        response = {
          error: true,
          statusCode: 404,
          message: 'Order not Getting',
        };
      }
      return response;
    }
  } catch (error) {
    console.error(error);
    response = {
      error: true,
      statusCode: 403,
      message: 'Error to Get Order',
    };
    return response;
  }
};

const getOrderByDate = async (data) => {
  try {
    const { error, value } = schema.getOrderByDate.validate(data, {
      abortEarly: false,
    });

    if (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.details.map((e) => e.message),
      };
    } else {


      const { startDate, endDate } = value;
      console.info(`get Order to DB with date between: ${startDate}, ${endDate}`);
      let getOrder = null;

      const where = {
        dateConfirmed: {
          [Op.between]: [startDate, endDate]
        }
      }
      
      getOrder = await Order.findAll({
        where,
      });

      console.info('get Order:', JSON.stringify(getOrder));

      if (getOrder) {
        console.info('Get Order By Date:', JSON.stringify(getOrder));
        response = {
          error: false,
          statusCode: 200,
          message: 'Get Order Successfully',
          data: getOrder,
        };
      } else {
        response = {
          error: true,
          statusCode: 404,
          message: 'Order not Getting',
        };
      }
      return response;
    }
  } catch (error) {
    console.error(error);
    response = {
      error: true,
      statusCode: 403,
      message: 'Error to Get Order',
    };
    return response;
  }
};

const insertOrder = async (data) => {
  try {
    const { error, value } = schema.insertOrder.validate(data, {
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
        `Insert Order to DB: ${JSON.stringify(value)}`
      );

      let insertedOrder = null;

      value.dateCreated = moment().tz('America/Guatemala').format('YYYY-MM-DD HH:mm')

      insertedOrder = await Order.create(value);

      if (insertedOrder) {
        console.info('Order inserted:', JSON.stringify(insertedOrder));
        response = {
          error: false,
          statusCode: 201,
          message: 'Order Inserted',
          data: insertedOrder,
        };
      } else {
        response = {
          error: true,
          statusCode: 404,
          message: 'Order not Inserted',
        };
      }
      return response;
    }
  } catch (error) {
    console.error(error);
    response = {
      error: true,
      statusCode: 403,
      message: 'Error to Insert Order',
    };
    return response;
  }
};

const updateOrder = async (data) => {
  try {
    const { error, value } = schema.updateOrder.validate(data, {
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
        `Update Order to DB: id:${orderId}`
      );

      let updatedOrder = null;

      const getOrder = await Order.findOne({
        where: { orderId },
      });
      console.info(`get Order: ${JSON.stringify(getOrder)}`);

      const params = {
        orderId: value.orderId,
        statusOrderId: value.statusOrderId,
        phoneOrder: value.phoneOrder,
        ticketOrder: value.ticketOrder,
        nameOrder: value.nameOrder,
        lastNameOrder: value.lastNameOrder,
        dateCreated: value.dateCreated,
        dateConfirmed: value.dateConfirmed,
        dateDeliver: value.dateDeliver,
        adressDeliver: value.adressDeliver,
        totalOrder: value.totalOrder,
      };

      updatedOrder = await getOrder.update(params);
      console.info('Order updated:', JSON.stringify(updatedOrder));

      if (updatedOrder) {
        response = {
          error: false,
          statusCode: 200,
          message: 'Order Updated',
          data: updatedOrder,
        };
      } else {
        response = {
          error: true,
          statusCode: 404,
          message: 'Order not Updated',
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

const deleteOrderById = async (data) => {
  try {
    const { error, value } = schema.deleteOrder.validate(data, {
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
      console.info(`delete Order to DB with id: ${orderId}`);

      const getOrder = await Order.findOne({
        where: { orderId },
      });
      console.info(`get Order: ${JSON.stringify(getOrder)}`);

      const params = {
        statusOrderId: 5,//
      };
      console.log(`params ${JSON.stringify(params)}`)

      updatedOrder = await getOrder.update(params);
      console.info('Order Deleted:', JSON.stringify(updatedOrder));

      if (updatedOrder) {
        console.info('Deleted Order By Id:', JSON.stringify(updatedOrder));
        response = {
          error: false,
          statusCode: 200,
          message: 'Delete Order Successfully',
          data: updatedOrder,
        };
      } else {
        response = {
          error: true,
          statusCode: 404,
          message: 'Order not Deleting',
        };
      }
      return response;
    }
  } catch (error) {
    console.error(error);
    response = {
      error: true,
      statusCode: 403,
      message: 'Error to Delete Order',
    };
    return response;
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