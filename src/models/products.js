const { Model } = require('sequelize');
const { Category } = sequelize.define('../models');
const { Season } = sequelize.define('../models');

Product.belongsTo(Category);
Product.belongsTo(Season);

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.S
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }

  Product.init({
    statusId: {
      type: DataTypes.INTEGER,
      field: 'id_estado',
    },
    categoryId: {
      type: DataTypes.INTEGER,
      field: 'id_categoria',
    },
    seasonId: {
      type: DataTypes.INTEGER,
      field: 'id_temporada',
    },
    productId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id_producto',
    },
    productName: {
      type: DataTypes.STRING,
      field: 'nombre_producto',
    },
    productDescription: {
      type: DataTypes.STRING,
      field: 'descripcion_producto',
    },
    productPrice: {
      type: DataTypes.FLOAT(8, 2),
      field: 'precio_producto',
    },
    productImage: {
      type: DataTypes.STRING,
      field: 'imagen',
    },
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: false,
  });
  return Product;
}
//