'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CountryConfig extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      console.log(this)
      console.log("=========alll============")
      this.belongsTo(models.Country, {
        foreignKey: 'country_id' 
      })
    }
  }
  CountryConfig.init({
    name: DataTypes.STRING,
    display: DataTypes.STRING,
    data_type: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'CountryConfig',
  });
  return CountryConfig;
};