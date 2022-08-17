const joiBase = require('joi');
const joiDate = require('@hapi/joi-date');

const joi = joiBase.extend(joiDate);

const getVisualization = joi.object().keys({
    limit: joi.number().integer(),
  }).required();

const getVisualizationById = joi.object().keys({
    visualizationId: joi.number().integer().required(),
  }).required();

const insertVisualization = joi.object().keys({
  visualizationId: joi.number().integer().required(),
  productId: joi.number().integer().required(),
  dateVisualization: joi.date().required(),
  }).required();

const updateVisualization = joi.object().keys({
  visualizationId: joi.number().integer().required(),
  productId: joi.number().integer().required(),
  dateVisualization: joi.date().required(),
  }).required();

module.exports = {
  getVisualization,
  getVisualizationById,
  insertVisualization,
  updateVisualization,
};
