'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('collectors', 'avatar_id', {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      });
    },

  down: queryInterface => {
    return queryInterface.removeColumn('collectors', 'avatar_id');
  },
};
