const joiBase = require('joi');
const joiDate = require('@hapi/joi-date');

const joi = joiBase.extend(joiDate);

const getCategory = joi.object().keys({
    limit: joi.number().integer(),
  }).required();

const getCategoryByAdmin = joi.object().keys({
    limit: joi.number().integer(),
  }).required();

const getCategoryById = joi.object().keys({
    categoryId: joi.number().integer().required(),
  }).required();

const insertCategory = joi.object().keys({
  statusId: joi.number().integer().required(),
  categoryName: joi.string().required(),
  }).required();

const updateCategory = joi.object().keys({
  categoryId: joi.number().integer().required(),
  statusId: joi.number().integer(),
  categoryName: joi.string(),
  }).required();

const deleteCategory = joi
  .object()
  .keys({
    categoryId: joi.number().integer().required(),
  })
  .required();

module.exports = {
  getCategory,
  getCategoryByAdmin,
  getCategoryById,
  insertCategory,
  updateCategory,
  deleteCategory,
};
