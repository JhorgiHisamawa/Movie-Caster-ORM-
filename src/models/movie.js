'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // HasMany -> punya banyak aktor
      this.belongsToMany(models.Cast, {through: 'MovieCast', foreignKey: 'cast_id'})
      //bro?
    }
  };
  Movie.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    language: DataTypes.STRING,
    status: DataTypes.STRING,
    rating: DataTypes.ENUM('1', '2', '3', '4', '5'),
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    freezeTableName: true,
    modelName: 'Movies'
  });
  return Movie;
};