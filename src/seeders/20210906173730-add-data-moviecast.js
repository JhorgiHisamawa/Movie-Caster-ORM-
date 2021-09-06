'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    //  * Add seed commands here.
    //  *
    //  * Example:
    await queryInterface.bulkInsert('MovieCasts', [{
      movie_id: 2,
      cast_id: 1
    },
    {
      movie_id: 2,
      cast_id: 2
    },
    {
      movie_id: 2,
      cast_id: 3
    },
    {
      movie_id: 3,
      cast_id: 1
    },
    {
      movie_id: 3,
      cast_id: 3
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
