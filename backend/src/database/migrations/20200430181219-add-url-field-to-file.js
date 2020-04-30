'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'files',
      'url',
     Sequelize.STRING
    );

  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'files',
      'url'
    );
  }
}