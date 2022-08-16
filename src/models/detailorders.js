const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Detailorder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }

  Detailorder.init({
    detailorderId: {
      type: DataTypes.INTEGER,
      field: 'id_detalle_pedido',
    },
    productId: {
      type: DataTypes.INTEGER,
      field: 'id_producto',
    },
    orderId: {
      type: DataTypes.INTEGER,
      field: 'id_pedido',
    },
    detailorderquantity: {
      type: DataTypes.FLOAT,
      field: 'cantidad_detalle_pedido',
    },
    orderdetailsubtotal: {
      type: DataTypes.FLOAT,
      field: 'subtotal_detalle_pedido',
    },
    
  }, {
    sequelize,
    modelName: 'Detailorder',
    timestamps: false,
  });
  return Detailorder;
}
