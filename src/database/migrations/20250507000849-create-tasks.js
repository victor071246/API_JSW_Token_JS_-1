'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      task: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
    // lógica da migração vai aqui
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('tasks');
    // lógica para desfazer a migração vai aqui
  },
};
