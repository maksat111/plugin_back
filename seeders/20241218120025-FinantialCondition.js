"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    //  * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "FinantialConditions",
      [
        {
          // id: 1,
          name: "Ähli çykdajylar çagyrýan tarapyň hasabyna",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 2,
          name: "Ähli çykdajylar işgäriň hasabyna",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 3,
          name: "Ähli çykdajylar edaranyň hasabyna",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("FinantialConditions", null, {});
  },
};
