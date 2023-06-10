'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('products', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.TEXT ,
        allowNull:false
      },
      descrption: {
        type: Sequelize.TEXT ,
        allowNull:false
      },
      price: {
        type: Sequelize.INTEGER ,
        allowNull:false
      },
      discount: {
        type: Sequelize.INTEGER ,
        allowNull:false
      },
      brand: {
        type: Sequelize.TEXT ,
        allowNull:false
      },
      images: {
        type: Sequelize.TEXT ,
        allowNull:false
      },
      size: {
        type: Sequelize.TEXT ,
        allowNull:false
      },
      color: {
        type: Sequelize.TEXT ,
        allowNull:false
      },
      category: {
        type: Sequelize.TEXT ,
        allowNull:false
      }
     });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('products');

  }
};
