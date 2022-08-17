const sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const schema = require('../schemas/seasons.schema');
const { Season } = require('../models');

const getSeason = async (data) => {
  try {
    const { error, value } = schema.getSeason.validate(data, {
      abortEarly: false,
    });

    if (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.details.map((e) => e.message),
      };
    } else {
      const limit = value.limit ? parseInt(value.limit, 10) : 10;

      const findOptions = {
        where: { statusId: 1 },
        limit,
        raw: true,
      };

      const getSeason = await Season.findAll(findOptions);
      console.info('get Season:', JSON.stringify(getSeason));

      if (getSeason) {
        console.info('Get Season:', JSON.stringify(getSeason));
        response = {
          error: false,
          statusCode: 200,
          message: 'Get Seasons Successfully',
          data: getSeason,
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

const getSeasonById = async (data) => {
  try {
    const { error, value } = schema.getSeasonById.validate(data, {
      abortEarly: false,
    });

    if (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.details.map((e) => e.message),
      };
    } else {
      const { seasonId } = value;
      console.info(`get Season to DB with id: ${seasonId}`);
      let getSeason = null;

      const where = { seasonId };

      getSeason = await Season.findOne({
        where,
      });
      console.info('get Season:', JSON.stringify(getSeason));

      if (getSeason) {
        console.info('Get Season By Id:', JSON.stringify(getSeason));
        response = {
          error: false,
          statusCode: 200,
          message: 'Get Season Successfully',
          data: getSeason,
        };
      } else {
        response = {
          error: true,
          statusCode: 404,
          message: 'Season not Getting',
        };
      }
      return response;
    }
  } catch (error) {
    console.error(error);
    response = {
      error: true,
      statusCode: 403,
      message: 'Error to Get Season',
    };
    return response;
  }
};

const insertSeason = async (data) => {
  try {
    const { error, value } = schema.insertSeason.validate(data, {
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
        `Insert Season to DB: ${JSON.stringify(value)}`
      );

      let insertedSeason = null;

      insertedSeason = await Season.create(value);

      if (insertedSeason) {
        console.info('Season inserted:', JSON.stringify(insertedSeason));
        response = {
          error: false,
          statusCode: 201,
          message: 'Season Inserted',
          data: insertedSeason,
        };
      } else {
        response = {
          error: true,
          statusCode: 404,
          message: 'Season not Inserted',
        };
      }
      return response;
    }
  } catch (error) {
    console.error(error);
    response = {
      error: true,
      statusCode: 403,
      message: 'Error to Insert Season',
    };
    return response;
  }
};

const updateSeason = async (data) => {
  try {
    const { error, value } = schema.updateSeason.validate(data, {
      abortEarly: false,
    });

    if (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.details.map((e) => e.message),
      };
    } else {
      const { seasonId } = value;
      console.info(
        `Update Season to DB: id:${seasonId}`
      );
      let updatedSeason = null;

      const getSeason = await Season.findOne({
        where: { seasonId },
      });
      console.info(`get Season: ${JSON.stringify(getSeason)}`);

      const params = {
        seasonId: value.seasonId,
        statusId: value.statusId,
        seasonName: value.seasonName,
      };

      updatedSeason = await getSeason.update(params);
      console.info('Season updated:', JSON.stringify(updatedSeason));

      if (updatedSeason) {
        response = {
          error: false,
          statusCode: 200,
          message: 'Season Updated',
          data: updatedSeason,
        };
      } else {
        response = {
          error: true,
          statusCode: 404,
          message: 'Season not Updated',
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

const deleteSeasonById = async (data) => {
  try {
    const { error, value } = schema.deleteSeason.validate(data, {
      abortEarly: false,
    });

    if (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.details.map((e) => e.message),
      };
    } else {
      const { seasonId } = value;
      console.info(`delete Season to DB with id: ${seasonId}`);

      const getSeason = await Season.findOne({
        where: { seasonId },
      });
      console.info(`get Season: ${JSON.stringify(getSeason)}`);

      const params = {
        statusId: 2,
      };
      console.log(`params ${JSON.stringify(params)}`)

      updatedSeason = await getSeason.update(params);
      console.info('Season Deleted:', JSON.stringify(updatedSeason));

      if (updatedSeason) {
        console.info('Deleted Season By Id:', JSON.stringify(updatedSeason));
        response = {
          error: false,
          statusCode: 200,
          message: 'Delete Season Successfully',
          data: updatedSeason,
        };
      } else {
        response = {
          error: true,
          statusCode: 404,
          message: 'Season not Deleting',
        };
      }
      return response;
    }
  } catch (error) {
    console.error(error);
    response = {
      error: true,
      statusCode: 403,
      message: 'Error to Delete Season',
    };
    return response;
  }
};

module.exports = {
  getSeason,
  getSeasonById,
  insertSeason,
  updateSeason,
  deleteSeasonById,
};
//