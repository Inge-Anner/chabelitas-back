const joiBase = require('joi');
const joiDate = require('@hapi/joi-date');

const joi = joiBase.extend(joiDate);

const getSeason = joi.object().keys({
    limit: joi.number().integer(),
  }).required();

const getSeasonById = joi.object().keys({
    seasonId: joi.number().integer().required(),
  }).required();

const insertSeason = joi.object().keys({
  seasonId: joi.number().integer().required(),
  statusId: joi.number().integer().required(),
  seasonName: joi.string().required(),
  }).required();

const updateSeason = joi.object().keys({
  seasonId: joi.number().integer().required(),
  statusId: joi.number().integer().required(),
  seasonName: joi.string().required(),
  }).required();

const deleteSeason = joi
  .object()
  .keys({
    seasonId: joi.number().integer().required(),
  })
  .required();

module.exports = {
  getSeason,
  getSeasonById,
  insertSeason,
  updateSeason,
  deleteSeason,
};
