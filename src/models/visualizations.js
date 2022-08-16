const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Visualization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }

  Visualization.init({
    visualizationId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id_visualizacion',
    },
    productId: {
      type: DataTypes.INTEGER,
      field: 'id_producto',
    },
    dateVisualization: {
      type: DataTypes.date,
      field: 'fecha_visualizacion',
    },
  }, {
    sequelize,
    modelName: 'Visualization',
    timestamps: false,
  });
  return Visualization;
}
