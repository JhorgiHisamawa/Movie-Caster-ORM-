'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieCast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsToMany(models.Movie, {foreignKey: 'movie'})
      // this.belongsTo(models.Cast, {foreignKey: 'cast'})
    }
  };
  MovieCast.init({
    movie_id: DataTypes.INTEGER,
    cast_id: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    freezeTableName: true,
    modelName: 'MovieCast',
  });
  return MovieCast;
};