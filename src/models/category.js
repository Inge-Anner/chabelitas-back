const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }

  Categories.init({
    categoryId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id_categoria',
    },
    statusId: {
      type: DataTypes.INTEGER,
      field: 'id_estado',
    },
    categoryName: {
      type: DataTypes.STRING,
      field: 'nombre_categoria',
    },
  }, {
    sequelize,
    modelName: 'Categories',
    timestamps: false,
  });
  return Categories;
}
