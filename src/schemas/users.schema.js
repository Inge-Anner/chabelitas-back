const joiBase = require('joi');
const joiDate = require('@hapi/joi-date');

const joi = joiBase.extend(joiDate);
//
const getUser = joi.object().keys({
    limit: joi.number().integer(),
  }).required();

const getUserById = joi.object().keys({
    userId: joi.number().integer().required(),
  }).required();

const insertUser = joi.object().keys({
  statusId: joi.number().integer().required(),
  userName: joi.string().required(),
  userCode: joi.string().required(),
  }).required();

const updateUser = joi.object().keys({
  userId: joi.number().integer().required(),
  statusId: joi.number().integer(),
  userName: joi.string(),
  userCode: joi.string(),
  }).required();

const deleteUserById = joi
  .object()
  .keys({
    userId: joi.number().integer().required(),
  })
  .required();

module.exports = {
  getUser,
  getUserById,
  insertUser,
  updateUser,
  deleteUserById,
};
