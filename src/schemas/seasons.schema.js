const joiBase = require('joi');
const joiDate = require('@hapi/joi-date');

const joi = joiBase.extend(joiDate);

const getSeason = joi.object().keys({
    limit: joi.number().integer(),
  }).required();

const getSeasonByAdmin = joi.object().keys({
    limit: joi.number().integer(),
  }).required();

const getSeasonById = joi.object().keys({
    seasonId: joi.number().integer().required(),
  }).required();

const insertSeason = joi.object().keys({
  statusId: joi.number().integer().required(),
  seasonName: joi.string().required(),
  }).required();

const updateSeason = joi.object().keys({
  seasonId: joi.number().integer().required(),
  statusId: joi.number().integer(),
  seasonName: joi.string(),
  }).required();

const deleteSeasonById = joi
  .object()
  .keys({
    seasonId: joi.number().integer().required(),
  })
  .required();

module.exports = {
  getSeason,
  getSeasonByAdmin,
  getSeasonById,
  insertSeason,
  updateSeason,
  deleteSeasonById,
};
