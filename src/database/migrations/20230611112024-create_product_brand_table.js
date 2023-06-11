'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     */
    await queryInterface.createTable('product_brand', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false},
      name: {
        type: Sequelize.TEXT,
        allowNull: false
        },
      origin: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      product_brand_id: { 
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        }} });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     */
    await queryInterface.dropTable('product_brand');
  }
};
