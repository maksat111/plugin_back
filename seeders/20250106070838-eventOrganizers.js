"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "EventOrganizers",
      [
        {
          name: "ABŞ-nyň ilçihanasy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Türkmenistanyň Daşary işler ministrligi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ÝHHG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ýewropada hyzmatdaşlyk we howpsuzlyk guramasy",
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
    await queryInterface.bulkDelete("EventOrganizers", null, {});
  },
};
