'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CountryInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CountryInfo.init({
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    contact: DataTypes.STRING,
    key: DataTypes.STRING,
    dhis2url: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    orgUnit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CountryInfo',
  });
  return CountryInfo;
};