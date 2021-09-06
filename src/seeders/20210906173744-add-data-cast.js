'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
     await queryInterface.bulkInsert('Cast', [
      {
        name: 'john travel',
        birthday: '1988-02-02',
        rating: 2
      },
      {
        name: 'john billy',
        birthday: '1956-07-02',
        rating: 5
      },
      {
        name: 'emma stone',
        birthday: '1975-08-02',
        rating: 4
      },
      {
        name: 'wicker',
        birthday: '1982-03-02',
        rating: 2
      },
      {
        name: 'wicker dua',
        birthday: '1952-03-02',
        rating: 2,
        deaddate:'2020-08-02'
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
