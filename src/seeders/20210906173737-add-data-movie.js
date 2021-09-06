'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Movies', [
        {
        name: 'fast furious',
        language: 'english',
        status: 'ongoing',
        rating: 2,
        },
        {
        name: 'be my boy',
        language: 'english',
        status: 'ongoing',
        rating: 4,
        },
        {
        name: 'evangelion',
        language: 'english',
        status: 'ongoing',
        rating: 5,
        },
        {
        name: 'fast feast',
        language: 'english',
        status: 'ongoing',
        rating: 3,
        },
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
