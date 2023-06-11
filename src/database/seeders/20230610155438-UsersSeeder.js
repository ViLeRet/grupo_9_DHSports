'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Aldrich Obin',
        country: 'Brazil',
        email: 'aobin0@yellowpages.com',
        password: 'UhrNrxWGv4P',
        age: 40,
        avatar: 'https://robohash.org/velaspernaturmolestiae.png?size=50x50&set=set1'
      },
      {
        id: 2,
        name: 'Brett Alday',
        country: 'Paraguay',
        email: 'balday1@wsj.com',
        password: 'Hola1',
        age: 35,
        avatar: 'https://robohash.org/occaecativoluptatemtenetur.png?size=50x50&set=set1',
        
      },
    {
      id: 3,
        name: 'Sybil Fetherstan',
        country: 'Argentina',
        email: 'sfetherstan2@lulu.com',
        password: 'UU2reHwUIm2',
        age: 23,
        avatar: 'https://robohash.org/eterrorarchitecto.png?size=50x50&set=set1'
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
