const joiBase = require('joi');
const joiDate = require('@hapi/joi-date');

const joi = joiBase.extend(joiDate);


const getDetailOrderById = joi.object().keys({
  orderId: joi.number().integer().required(),
  }).required();

const insertDetailOrder = joi.object().keys({
  productId: joi.number().integer().required(),
  orderId: joi.number().integer().required(),
  detailOrderQuantity: joi.number().required(),
  orderDetailSubtotal: joi.number().required(),
  }).required();

const updateDetailOrder = joi.object().keys({
  detailOrderId: joi.number().integer(),
  productId: joi.number().integer(),
  orderId: joi.number().integer().required(),
  detailOrderQuantity: joi.number(),
  orderDetailSubtotal: joi.number(),
  }).required();

module.exports = {
  getDetailOrderById,
  insertDetailOrder,
  updateDetailOrder,
};