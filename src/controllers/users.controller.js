const sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const schema = require('../schemas/users.schema');
const { User } = require('../models');
//
const getUser = async (data) => {
    try {
      const { error, value } = schema.getUser.validate(data, {
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

        const getUser = await User.findAll(findOptions);
      console.info('get User:', JSON.stringify(getUser));

      if (getUser) {
        console.info('Get User:', JSON.stringify(getUser));
        response = {
          error: false,
          statusCode: 200,
          message: 'Get User Successfully',
          data: getUser,
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

const getUserById = async (data) => {
    try {
      const { error, value } = schema.getUserById.validate(data, {
        abortEarly: false,
      });
  
      if (error) {
        return {
          error: true,
          statusCode: 400,
          message: error.details.map((e) => e.message),
        };
      } else {
        const { userId } = value;
        console.info(`get User to DB with id: ${userId}`);
        let getUserById = null;
  
        const where = { userId };
  
        getUserById = await User.findOne({
          where,
        });
        console.info('get User:', JSON.stringify(getUserById));
  
        if (getUserById) {
          console.info('Get User By Id:', JSON.stringify(getUserById));
          response = {
            error: false,
            statusCode: 200,
            message: 'Get User Successfully',
            data: getUserById,
          };
        } else {
          response = {
            error: true,
            statusCode: 404,
            message: 'User not Getting',
          };
        }
        return response;
      }
    } catch (error) {
      console.error(error);
      response = {
        error: true,
        statusCode: 403,
        message: 'Error to Get User',
      };
      return response;
    }
  };

  const userLogin = async (data) => {
    try {
      const { error, value } = schema.userLogin.validate(data, {
        abortEarly: false,
      });
  
      if (error) {
        return {
          error: true,
          statusCode: 400,
          message: error.details.map((e) => e.message),
        };
      } else {
        const { userName, userCode } = value;
        console.info(`login User to DB with userName: ${userName}`);
        let loginUser = null;
  
        const where = { userName, userCode };
  
        loginUser = await User.findOne({
          where,
        });
        console.info('get User:', JSON.stringify(loginUser));
  
        if (loginUser) {
          console.info('Get User By userName:', JSON.stringify(loginUser));
          response = {
            error: false,
            statusCode: 200,
            message: 'User Login Successfully',
            data: loginUser,
          };
        } else {
          response = {
            error: true,
            statusCode: 404,
            message: 'User not Exist',
          };
        }
        return response;
      }
    } catch (error) {
      console.error(error);
      response = {
        error: true,
        statusCode: 403,
        message: 'Error to Get User',
      };
      return response;
    }
  };

  const insertUser = async (data) => {
    try {
      const { error, value } = schema.insertUser.validate(data, {
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
          `Insert User to DB: ${JSON.stringify(value)}`
        );
  
        let insertedUser = null;
  
        insertedUser = await User.create(value);
  
        if (insertedUser) {
          console.info('User inserted:', JSON.stringify(insertedUser));
          response = {
            error: false,
            statusCode: 201,
            message: 'User Inserted',
            data: insertedUser,
          };
        } else {
          response = {
            error: true,
            statusCode: 404,
            message: 'User not Inserted',
          };
        }
        return response;
      }
    } catch (error) {
      console.error(error);
      response = {
        error: true,
        statusCode: 403,
        message: 'Error to Insert User',
      };
      return response;
    }
  };
 
  const updateUser = async (data) => {
    try {
      const { error, value } = schema.updateUser.validate(data, {
        abortEarly: false,
      });
  
      if (error) {
        return {
          error: true,
          statusCode: 400,
          message: error.details.map((e) => e.message),
        };
      } else {
        const { userId } = value;
        console.info(
          `Update User to DB: id:${userId}`
        );
        let updatedUser = null;
  
        const getUser = await User.findOne({
          where: { userId },
        });
        console.info(`get User: ${JSON.stringify(getUser)}`);
  
        const params = {
          statusId: value.statusId,
          userName: value.userName,
          userCode: value.userCode,
        };
  
        updatedUser = await getUser.update(params);
        console.info('User updated:', JSON.stringify(updatedUser));
  
        if (updatedUser) {
          response = {
            error: false,
            statusCode: 200,
            message: 'User Updated',
            data: updatedUser,
          };
        } else {
          response = {
            error: true,
            statusCode: 404,
            message: 'User not Updated',
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

  const deleteUserById = async (data) => {
    try {
      const { error, value } = schema.deleteUserById.validate(data, {
        abortEarly: false,
      });
  
      if (error) {
        return {
          error: true,
          statusCode: 400,
          message: error.details.map((e) => e.message),
        };
      } else {
        const { userId } = value;
        console.info(`delete User to DB with id: ${userId}`);
  
        const getUser = await User.findOne({
          where: { userId },
        });
        console.info(`get User: ${JSON.stringify(getUser)}`);
  
        const params = {
          statusId: 2,
        };
        console.log(`params ${JSON.stringify(params)}`)
  
        updatedUser = await getUser.update(params);
        console.info('User Deleted:', JSON.stringify(updatedUser));
  
        if (updatedUser) {
          console.info('Deleted User By Id:', JSON.stringify(updatedUser));
          response = {
            error: false,
            statusCode: 200,
            message: 'Delete User Successfully',
            data: updatedUser,
          };
        } else {
          response = {
            error: true,
            statusCode: 404,
            message: 'User not Deleting',
          };
        }
        return response;
      }
    } catch (error) {
      console.error(error);
      response = {
        error: true,
        statusCode: 403,
        message: 'Error to Delete User',
      };
      return response;
    }
  };
  
  module.exports = {
    getUser,
    getUserById,
    userLogin,
    insertUser,
    updateUser,
    deleteUserById,
  };
  