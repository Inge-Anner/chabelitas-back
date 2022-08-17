const joiBase = require('joi');
const joiDate = require('@hapi/joi-date');

const joi = joiBase.extend(joiDate);


const getDetailOrderById = joi.object().keys({
  OrderId: joi.number().integer().required(),
  }).required();

const insertDetailOrder = joi.object().keys({
  productId: joi.number().integer().required(),
  orderId: joi.number().integer().required(),
  detailOrderQuantity: joi.number().required(),
  orderDetailSubtotal: joi.number().required(),
  }).required();

const updateDetailOrder = joi.object().keys({
  detailOrderId: joi.number().integer().required(),
  productId: joi.number().integer(),
  orderId: joi.number().integer(),
  detailOrderQuantity: joi.number(),
  orderDetailSubtotal: joi.number(),
  }).required();

const deleteDetailOrder = joi
  .object()
  .keys({
    detailOrderId: joi.number().integer().required(),
  })
  .required();

module.exports = {
  getDetailOrderById,
  insertDetailOrder,
  updateDetailOrder,
  deleteDetailOrder,
};