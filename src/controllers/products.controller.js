const sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const schema = require('../schemas/products.schema');
const { Product } = require('../models');

const getProduct = async (data) => {
  try {
    const { error, value } = schema.getProduct.validate(data, {
      abortEarly: false,
    });

    if (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.details.map((e) => e.message),
      };
    } else {
      const limit = value.limit ? parseInt(value.limit, 200) : 200;
      
      const findOptions = {
        where: { statusId: 1 },
        limit,
        raw: true,
      };

      const getProduct = await Product.findAll(findOptions);
      console.info('get Product:', JSON.stringify(getProduct));

      if (getProduct) {
        console.info('Get Product:', JSON.stringify(getProduct));
        response = {
          error: false,
          statusCode: 200,
          message: 'Get Products Successfully',
          data: getProduct,
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

const getProductAll = async (data) => {
  try {
    const { error, value } = schema.getProductAll.validate(data, {
      abortEarly: false,
    });

    if (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.details.map((e) => e.message),
      };
    } else {
      const limit = value.limit ? parseInt(value.limit, 200) : 200;
      
      const findOptions = {
        raw: true,
      };

      const getProductAll = await Product.findAll(findOptions);
      console.info('get Product:', JSON.stringify(getProductAll));

      if (getProductAll) {
        console.info('Get Product:', JSON.stringify(getProductAll));
        response = {
          error: false,
          statusCode: 200,
          message: 'Get Products Successfully',
          data: getProductAll,
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


const getProductPersonalized = async (data) => {
  try {
    const { error, value } = schema.getProductPersonalized.validate(data, {
      abortEarly: false,
    });

    if (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.details.map((e) => e.message),
      };
    } else {
      const limit = value.limit ? parseInt(value.limit, 50) : 50;

      const findOptions = {
        where: { categoryId: 14 },
        limit,
        raw: true,
      };

      if (value.categoryId == 14) {
        findOptions.where.categoryId = value.categoryId
      }

      const getProductPersonalized = await Product.findAll(findOptions);
      console.info('get Product:', JSON.stringify(getProductPersonalized));

      if (getProductPersonalized) {
        console.info('Get Product:', JSON.stringify(getProductPersonalized));
        response = {
          error: false,
          statusCode: 200,
          message: 'Get Products Successfully',
          data: getProductPersonalized,
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

const getProductTopping = async (data) => {
  try {
    const { error, value } = schema.getProductTopping.validate(data, {
      abortEarly: false,
    });

    if (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.details.map((e) => e.message),
      };
    } else {
      const limit = value.limit ? parseInt(value.limit, 50) : 50;

      const findOptions = {
        where: { categoryId: 15 },
        limit,
        raw: true,
      };

      if (value.categoryId == 15) {
        findOptions.where.categoryId = value.categoryId
      }

      const getProductTopping = await Product.findAll(findOptions);
      console.info('get Product:', JSON.stringify(getProductTopping));

      if (getProductTopping) {
        console.info('Get Product:', JSON.stringify(getProductTopping));
        response = {
          error: false,
          statusCode: 200,
          message: 'Get Products Successfully',
          data: getProductTopping,
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


const getProductById = async (data) => {
  try {
    const { error, value } = schema.getProductById.validate(data, {
      abortEarly: false,
    });

    if (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.details.map((e) => e.message),
      };
    } else {
      const { productId } = value;
      console.info(`get Product to DB with id: ${productId}`);
      let getProduct = null;

      const where = { productId };

      getProduct = await Product.findOne({
        where,
      });
      console.info('get Product:', JSON.stringify(getProduct));

      if (getProduct) {
        console.info('Get Product By Id:', JSON.stringify(getProduct));
        response = {
          error: false,
          statusCode: 200,
          message: 'Get Product Successfully',
          data: getProduct,
        };
      } else {
        response = {
          error: true,
          statusCode: 404,
          message: 'Product not Getting',
        };
      }
      return response;
    }
  } catch (error) {
    console.error(error);
    response = {
      error: true,
      statusCode: 403,
      message: 'Error to Get Product',
    };
    return response;
  }
};

const insertProduct = async (data) => {
  try {
    const { error, value } = schema.insertProduct.validate(data, {
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
        `Insert Product to DB: ${JSON.stringify(value)}`
      );

      let insertedProduct = null;

      insertedProduct = await Product.create(value);

      if (insertedProduct) {
        console.info('Product inserted:', JSON.stringify(insertedProduct));
        response = {
          error: false,
          statusCode: 201,
          message: 'Product Inserted',
          data: insertedProduct,
        };
      } else {
        response = {
          error: true,
          statusCode: 404,
          message: 'Product not Inserted',
        };
      }
      return response;
    }
  } catch (error) {
    console.error(error);
    response = {
      error: true,
      statusCode: 403,
      message: 'Error to Insert Product',
    };
    return response;
  }
};

const updateProduct = async (data) => {
  try {
    const { error, value } = schema.updateProduct.validate(data, {
      abortEarly: false,
    });

    if (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.details.map((e) => e.message),
      };
    } else {
      const { productId } = value;
      console.info(
        `Update Product to DB: id:${productId}`
      );
      let updatedProduct = null;

      const getProduct = await Product.findOne({
        where: { productId },
      });
      console.info(`get Product: ${JSON.stringify(getProduct)}`);

      const params = {
        statusId: value.statusId,
        categoryId: value.categoryId,
        seasonId: value.seasonId,
        productName: value.productName,
        productDescription: value.productDescription,
        productPrice: value.productPrice,
        productImage: value.productImage,
      };

      updatedProduct = await getProduct.update(params);
      console.info('Product updated:', JSON.stringify(updatedProduct));

      if (updatedProduct) {
        response = {
          error: false,
          statusCode: 200,
          message: 'Product Updated',
          data: updatedProduct,
        };
      } else {
        response = {
          error: true,
          statusCode: 404,
          message: 'Product not Updated',
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

const deleteProductById = async (data) => {
  try {
    const { error, value } = schema.deleteProduct.validate(data, {
      abortEarly: false,
    });

    if (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.details.map((e) => e.message),
      };
    } else {
      const { productId } = value;
      console.info(`delete Product to DB with id: ${productId}`);

      const getProduct = await Product.findOne({
        where: { productId },
      });
      console.info(`get Product: ${JSON.stringify(getProduct)}`);

      const params = {
        statusId: 2,
      };
      console.log(`params ${JSON.stringify(params)}`)

      updatedProduct = await getProduct.update(params);
      console.info('Product Deleted:', JSON.stringify(updatedProduct));

      if (updatedProduct) {
        console.info('Deleted Product By Id:', JSON.stringify(updatedProduct));
        response = {
          error: false,
          statusCode: 200,
          message: 'Delete Product Successfully',
          data: updatedProduct,
        };
      } else {
        response = {
          error: true,
          statusCode: 404,
          message: 'Product not Deleting',
        };
      }
      return response;
    }
  } catch (error) {
    console.error(error);
    response = {
      error: true,
      statusCode: 403,
      message: 'Error to Delete Product',
    };
    return response;
  }
};

module.exports = {
  getProduct,
  getProductAll,
  getProductPersonalized,
  getProductTopping,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProductById,
};
//