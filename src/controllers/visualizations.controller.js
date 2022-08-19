const sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const schema = require('../schemas/visualizations.schema');
const { Visualization } = require('../models');

const getVisualization = async (data) => {
  try {
    const { error, value } = schema.getVisualization.validate(data, {
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

      const getVisualization = await Visualization.findAll(findOptions);
      console.info('get Visualization:', JSON.stringify(getVisualization));

      if (getVisualization) {
        console.info('Get Visualization:', JSON.stringify(getVisualization));
        response = {
          error: false,
          statusCode: 200,
          message: 'Get Visualization Successfully',
          data: getVisualization,
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

const getVisualizationById = async (data) => {
    try {
      const { error, value } = schema.getVisualizationById.validate(data, {
        abortEarly: false,
      });
  
      if (error) {
        return {
          error: true,
          statusCode: 400,
          message: error.details.map((e) => e.message),
        };
      } else {
        const { visualizationId } = value;
        console.info(`get Visualization to DB with id: ${visualizationId}`);
        let getVisualizationById = null;
  
        const where = { visualizationId };
  
        getVisualizationById = await Visualization.findOne({
          where,
        });
        console.info('get Visualization:', JSON.stringify(getVisualizationById));
  
        if (getVisualizationById) {
          console.info('Get Visualization By Id:', JSON.stringify(getVisualizationById));
          response = {
            error: false,
            statusCode: 200,
            message: 'Get Visualization Successfully',
            data: getVisualizationById,
          };
        } else {
          response = {
            error: true,
            statusCode: 404,
            message: 'Visualization not Getting',
          };
        }
        return response;
      }
    } catch (error) {
      console.error(error);
      response = {
        error: true,
        statusCode: 403,
        message: 'Error to Get Visualization',
      };
      return response;
    }
  };

  const insertVisualization = async (data) => {
    try {
      const { error, value } = schema.insertVisualization.validate(data, {
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
          `Insert Visualization to DB: ${JSON.stringify(value)}`
        );
  
        let insertedVisualization = null;
  
        insertedVisualization = await Visualization.create(value);
  
        if (insertedVisualization) {
          console.info('Visualization inserted:', JSON.stringify(insertedVisualization));
          response = {
            error: false,
            statusCode: 201,
            message: 'Visualization Inserted',
            data: insertedVisualization,
          };
        } else {
          response = {
            error: true,
            statusCode: 404,
            message: 'Visualization not Inserted',
          };
        }
        return response;
      }
    } catch (error) {
      console.error(error);
      response = {
        error: true,
        statusCode: 403,
        message: 'Error to Insert Visualization',
      };
      return response;
    }
  };
   
  module.exports = {
    getVisualization,
    getVisualizationById,
    insertVisualization,
  };