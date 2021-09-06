'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    static associate(models) {
      // define association here
      // HasMany -> punya banyak aktor
      this.belongsToMany(models.Movies, {through: 'MovieCast', foreignKey: 'movie_id'})
      //bro?
    }
  };
  Cast.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    deadday:  { type: DataTypes.DATE, allowNull: false }, 
    rating: DataTypes.ENUM('1', '2', '3', '4', '5')
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    freezeTableName: true,
    modelName: 'Cast',
  });
  return Cast;
};