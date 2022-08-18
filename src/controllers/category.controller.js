const sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const schema = require('../schemas/category.schema');
const { Category } = require('../models');

const getCategory = async (data) => {
  try {
    const { error, value } = schema.getCategory.validate(data, {
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

      const getCategory = await Category.findAll(findOptions);
      console.info('get Category:', JSON.stringify(getCategory));

      if (getCategory) {
        console.info('Get Category:', JSON.stringify(getCategory));
        response = {
          error: false,
          statusCode: 200,
          message: 'Get Category Successfully',
          data: getCategory,
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

const getCategoryById = async (data) => {
    try {
      const { error, value } = schema.getCategoryById.validate(data, {
        abortEarly: false,
      });
  
      if (error) {
        return {
          error: true,
          statusCode: 400,
          message: error.details.map((e) => e.message),
        };
      } else {
        const { categoryId } = value;
        console.info(`get Category to DB with id: ${categoryId}`);
        let getCategoryById = null;
  
        const where = { categoryId };
  
        getCategoryById = await Category.findOne({
          where,
        });
        console.info('get Category:', JSON.stringify(getCategoryById));
  
        if (getCategoryById) {
          console.info('Get Category By Id:', JSON.stringify(getCategoryById));
          response = {
            error: false,
            statusCode: 200,
            message: 'Get Category Successfully',
            data: getCategoryById,
          };
        } else {
          response = {
            error: true,
            statusCode: 404,
            message: 'Category not Getting',
          };
        }
        return response;
      }
    } catch (error) {
      console.error(error);
      response = {
        error: true,
        statusCode: 403,
        message: 'Error to Get Category',
      };
      return response;
    }
  };

  const insertCategory = async (data) => {
    try {
      const { error, value } = schema.insertCategory.validate(data, {
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
          `Insert Category to DB: ${JSON.stringify(value)}`
        );
  
        let insertedCategory = null;
  
        insertedCategory = await Category.create(value);
  
        if (insertedCategory) {
          console.info('Category inserted:', JSON.stringify(insertedCategory));
          response = {
            error: false,
            statusCode: 201,
            message: 'Category Inserted',
            data: insertedCategory,
          };
        } else {
          response = {
            error: true,
            statusCode: 404,
            message: 'Category not Inserted',
          };
        }
        return response;
      }
    } catch (error) {
      console.error(error);
      response = {
        error: true,
        statusCode: 403,
        message: 'Error to Insert Category',
      };
      return response;
    }
  };
   
  const updateCategory = async (data) => {
    try {
      const { error, value } = schema.updateCategory.validate(data, {
        abortEarly: false,
      });
  
      if (error) {
        return {
          error: true,
          statusCode: 400,
          message: error.details.map((e) => e.message),
        };
      } else {
        const { categoryId } = value;
        console.info(
          `Update Category to DB: id:${categoryId}`
        );
        let updatedCategory = null;
  
        const getCategory = await Category.findOne({
          where: { categoryId },
        });
        console.info(`get Category: ${JSON.stringify(getCategory)}`);
  
        const params = {
          statusId: value.statusId,
          categoryName: value.categoryName,
        };
  
        updatedCategory = await getCategory.update(params);
        console.info('Category updated:', JSON.stringify(updatedCategory));
  
        if (updatedCategory) {
          response = {
            error: false,
            statusCode: 200,
            message: 'Category Updated',
            data: updatedCategory,
          };
        } else {
          response = {
            error: true,
            statusCode: 404,
            message: 'Category not Updated',
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

  const deleteCategoryById = async (data) => {
    try {
      const { error, value } = schema.deleteCategory.validate(data, {
        abortEarly: false,
      });
  
      if (error) {
        return {
          error: true,
          statusCode: 400,
          message: error.details.map((e) => e.message),
        };
      } else {
        const { categoryId } = value;
        console.info(`delete Category to DB with id: ${categoryId}`);
  
        const getCategory = await Category.findOne({
          where: { categoryId },
        });
        console.info(`get Category: ${JSON.stringify(getCategory)}`);
  
        const params = {
          statusId: 2,
        };
        console.log(`params ${JSON.stringify(params)}`)
  
        updatedCategory = await getCategory.update(params);
        console.info('Category Deleted:', JSON.stringify(updatedCategory));
  
        if (updatedCategory) {
          console.info('Deleted Category By Id:', JSON.stringify(updatedCategory));
          response = {
            error: false,
            statusCode: 200,
            message: 'Delete Category Successfully',
            data: updatedCategory,
          };
        } else {
          response = {
            error: true,
            statusCode: 404,
            message: 'Category not Deleting',
          };
        }
        return response;
      }
    } catch (error) {
      console.error(error);
      response = {
        error: true,
        statusCode: 403,
        message: 'Error to Delete Category',
      };
      return response;
    }
  };
  
  module.exports = {
    getCategory,
    getCategoryById,
    insertCategory,
    updateCategory,
    deleteCategoryById,
  };