'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.TEXT ,
        allowNull:false
      },
      country: {
        type: Sequelize.TEXT ,
        allowNull:false
      },
      email: {
        type: Sequelize.TEXT ,
        allowNull:false
      },
      password: {
        type: Sequelize.TEXT ,
        allowNull:false
      },
      age: {
        type: Sequelize.INTEGER ,
        allowNull:false
      },
      avatar:{
        type: Sequelize.TEXT ,
        allowNull:false
      },
      roles_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'roles',
          key: 'id'
        }
      }
    });

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');

  }
};
