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
    statusorderId: {
      type: DataTypes.INTEGER,
      field: 'id_estado_pedido',
    },
    phoneorder: {
      type: DataTypes.STRING,
      field: 'tel_pedido',
    },
    ticketorder: {
        type: DataTypes.STRING,
        field: 'boleta_pedido',
    },
      nameorder: {
        type: DataTypes.STRING,
        field: 'nombre_pedido',
    },
      lastnameorder: {
        type: DataTypes.STRING,
        field: 'apellido_pedido',
    },
    datecreated: {
      type: DataTypes.DATE,
      field: 'fecha_creado',
    },
    dateconfirmed: {
        type: DataTypes.DATE,
        field: 'fecha_confirmado',
    },
      datedeliver: {
        type: DataTypes.DATE,
        field: 'fecha_entrega',
    },
      adressdeliver: {
        type: DataTypes.STRING,
        field: 'direccion_entrega',
    },
    totalorder: {
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
