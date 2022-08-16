const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }

  User.init({
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id_usuario',
    },
    statusId: {
        type: DataTypes.INTEGER,
        field: 'id_estado',
      },
    userName: {
      type: DataTypes.STRING,
      field: 'nombre_usuario',
    },
    userName: {
        type: DataTypes.STRING,
        field: 'clave_usuario',
      }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false,
  });
  return User;
}
