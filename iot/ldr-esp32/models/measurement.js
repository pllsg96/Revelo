'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Measurement extends Model {
    static associate(models) {
    }
  }
  Measurement.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      brightness: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Measurement',
      timestamps: true,
      underscored: true,
      updatedAt: 'updated_at',
      createdAt: 'created_at',
    }
  );

  return Measurement;
};
