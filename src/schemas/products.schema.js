const joiBase = require('joi');
const joiDate = require('@hapi/joi-date');

const joi = joiBase.extend(joiDate);

const getProduct = joi.object().keys({
    limit: joi.number().integer(),
    categoryId: joi.number().integer(),
  }).required();

  const getProductAll = joi.object().keys({
    limit: joi.number().integer(),
    categoryId: joi.number().integer(),
  }).required();

  const getProductPersonalized = joi.object().keys({
    limit: joi.number().integer(),
    categoryId: joi.number().integer(),
  }).required();

  const getProductTopping = joi.object().keys({
    limit: joi.number().integer(),
    categoryId: joi.number().integer(),
  }).required();


const getProductById = joi.object().keys({
    productId: joi.number().integer().required(),
  }).required();

const insertProduct = joi.object().keys({
  statusId: joi.number().integer().required(),
  categoryId: joi.number().integer().required(),
  seasonId: joi.number().integer().required(),
  productName: joi.string().required(),
  productDescription: joi.string(),
  productPrice: joi.number().required(),
  productImage: joi.string(),
  portionsMin: joi.number().integer().allow(null),
  toppingsYes: joi.number().integer().allow(null),
  categoryTopping: joi.number().integer().allow(null),
  }).required();

const updateProduct = joi.object().keys({
    productId: joi.string().required(),
    statusId: joi.number().integer(),
    categoryId: joi.number().integer(),
    seasonId: joi.number().integer(),
    productName: joi.string(),
    productDescription: joi.string(),
    productPrice: joi.number(),
    productImage: joi.string(),
    portionsMin: joi.number().integer().allow(null),
    toppingsYes: joi.number().integer().allow(null),
    categoryTopping: joi.number().integer().allow(null),
  }).required();

const deleteProduct = joi
  .object()
  .keys({
    productId: joi.number().integer().required(),
  })
  .required();

module.exports = {
  getProduct,
  getProductAll,
  getProductPersonalized,
  getProductTopping,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
};
//