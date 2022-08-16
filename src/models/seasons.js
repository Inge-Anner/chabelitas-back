const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Season extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }

  Season.init({
    seasonId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id_temporada',
    },
    statusId: {
      type: DataTypes.INTEGER,
      field: 'id_estado',
    },
    seasonName: {
      type: DataTypes.STRING,
      field: 'nombre_temporada',
    },
  }, {
    sequelize,
    modelName: 'Season',
    timestamps: false,
  });
  return Season;
}
