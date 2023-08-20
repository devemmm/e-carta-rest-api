'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'user',
    [
      {
        fname: 'Dev',
        lname: 'Emm',
        email: 'djntivuguruzwaemmanuel@gmail.com',
        country: 'Rwanda',
        phone: '078888888',
        dob:'2000-01-01',
        password: '@default',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('user', null, {}),
};

