const joiBase = require('joi');//
const joiDate = require('@hapi/joi-date');

const joi = joiBase.extend(joiDate);

const getOrderById = joi.object().keys({
  orderId: joi.number().integer().required(),
}).required();

const getOrderByDate = joi.object().keys({
  dateConfirmed: joi.date(),
  startDate: joi.date(),
  endDate: joi.date(),
  }).required();

const insertOrder = joi.object().keys({
  statusOrderId: joi.number().integer().required(),
  phoneOrder: joi.string().required(),
  ticketOrder: joi.string().required(),
  nameOrder: joi.string().required(),
  lastNameOrder: joi.string().required(),
  dateCreated: joi.date().required(),
  dateConfirmed: joi.date().required(),
  dateDeliver: joi.date().required(),
  adressDeliver: joi.string().required(),
  totalOrder: joi.number().required(),
  }).required();

const updateOrder = joi.object().keys({
  orderId: joi.number().integer().required(),
  statusOrderId: joi.number().integer(),
  phoneOrder: joi.string(),
  ticketOrder: joi.string(),
  nameOrder: joi.string(),
  lastNameOrder: joi.string(),
  dateCreated: joi.date(),
  dateConfirmed: joi.date(),
  dateDeliver: joi.date(),
  adressDeliver: joi.string(),
  totalOrder: joi.number(),
  }).required();

const deleteOrder = joi
  .object()
  .keys({
    orderId: joi.number().integer().required(),
  })
  .required();

module.exports = {
  getOrderById,
  getOrderByDate,
  insertOrder,
  updateOrder,
  deleteOrder,
};