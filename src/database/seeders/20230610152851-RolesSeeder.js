'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
   
    */
    await queryInterface.bulkInsert('roles', [{
      name: 'Vendedor'
    },
    {
      name: 'Usuario'
    }, {
      name: 'Administrador'
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     
     */

    await queryInterface.bulkDelete('roles', null, {});
  }
};
