'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      console.log(this)
      console.log("===========all==========")

      this.hasMany(models.CountryConfig, {
        foreignKey: 'country_id',
        onDelete: 'CASCADE',
      });
    }
  }
  Country.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    orgUnit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Country',
    tableName: 'country'
  });
  return Country;
};