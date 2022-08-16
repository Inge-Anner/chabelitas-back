const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Statusorder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }

  Statusorder.init({
    statusorderId: {
      type: DataTypes.INTEGER,
      field: 'id_estado_pedido',
    },
    
    statusorderName: {
      type: DataTypes.STRING,
      field: 'nombre_estado_pedido',
    },
    
  }, {
    sequelize,
    modelName: 'Statusorder',
    timestamps: false,
  });
  return Statusorder;
}
