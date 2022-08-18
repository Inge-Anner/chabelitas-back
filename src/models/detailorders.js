const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class DetailsOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }

  DetailsOrder.init({
    detailOrderId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    detailOrderQuantity: {
      type: DataTypes.FLOAT(8, 0),
      field: 'cantidad_detalle_pedido',
    },
    orderDetailSubtotal: {
      type: DataTypes.FLOAT(8, 0),
      field: 'subtotal_detalle_pedido',
    },
    
  }, {
    sequelize,
    modelName: 'DetailsOrder',
    timestamps: false,
  });
  return DetailsOrder;
}
