const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }

  Order.init({
    orderId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id_pedido',
    },
    statusOrderId: {
      type: DataTypes.INTEGER,
      field: 'id_estado_pedido',
    },
    phoneOrder: {
      type: DataTypes.STRING,
      field: 'tel_pedido',
    },
    ticketOrder: {
        type: DataTypes.STRING,
        field: 'boleta_pedido',
    },
      nameOrder: {
        type: DataTypes.STRING,
        field: 'nombre_pedido',
    },
      lastNameOrder: {
        type: DataTypes.STRING,
        field: 'apellido_pedido',
    },
    dateCreated: {
      type: DataTypes.DATE,
      field: 'fecha_creado',
    },
    dateConfirmed: {
        type: DataTypes.DATE,
        field: 'fecha_confirmado',
    },
      dateDeliver: {
        type: DataTypes.DATE,
        field: 'fecha_entrega',
    },
      adressDeliver: {
        type: DataTypes.STRING,
        field: 'direccion_entrega',
    },
    totalOrder: {
      type: DataTypes.FLOAT(8, 0),
      field: 'total_pedido',
    },
    
  }, {
    sequelize,
    modelName: 'Order',
    timestamps: false,
  });
  return Order;
}
