'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const hashedPassword1 = await bcrypt.hash('password1', 12);
    const hashedPassword2 = await bcrypt.hash('password2', 12);

    const students = [
      { name: 'Alice', age: 20, email: 'alice@example.com', password: hashedPassword1 },
      { name: 'Bob', age: 22, email: 'bob@example.com', password: hashedPassword2 },
      // Tambahkan lebih banyak data sesuai kebutuhan
    ];

    await queryInterface.bulkInsert('Students', students.map(student => ({
      ...student,
      createdAt: new Date(),
      updatedAt: new Date(),
    })));
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Students', null, {});
  },
};
