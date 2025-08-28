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
      "Welayats",
      [
        {
          // id: 1,
          name: "Lebap welaýat",
          createdAt: "2024-07-26T13:07:19.656Z",
          updatedAt: "2024-09-02T17:37:09.463Z",
        },
        {
          // id: 2,
          name: "Mary welaýat",
          createdAt: "2024-07-26T13:07:28.899Z",
          updatedAt: "2024-09-02T17:37:15.046Z",
        },
        {
          // id: 3,
          name: "Daşoguz welaýat",
          createdAt: "2024-07-26T13:07:35.843Z",
          updatedAt: "2024-09-02T17:37:20.879Z",
        },
        {
          // id: 4,
          name: "Balkan welaýat",
          createdAt: "2024-07-26T13:07:41.264Z",
          updatedAt: "2024-09-02T17:37:26.981Z",
        },
        {
          // id: 5,
          name: "Ahal welaýat",
          createdAt: "2024-07-26T13:07:46.816Z",
          updatedAt: "2024-09-02T17:37:32.980Z",
        },
        {
          // id: 6,
          name: "Arkadag şäher",
          createdAt: "2024-07-26T13:07:58.363Z",
          updatedAt: "2024-08-23T15:17:07.321Z",
        },
        {
          // id: 7,
          name: "Aşgabat şäher",
          createdAt: "2024-07-26T13:08:06.584Z",
          updatedAt: "2024-08-23T15:16:52.720Z",
        },
        {
          // id: 8,
          name: "Baş prokuraturasy",
          createdAt: "2024-07-26T13:08:23.755Z",
          updatedAt: "2024-07-26T13:08:23.755Z",
        },
        {
          // id: 9,
          name: "Harby prokuraturalar",
          createdAt: "2024-09-09T07:16:13.467Z",
          updatedAt: "2024-09-09T07:16:13.467Z",
        },
        {
          // id: 10,
          name: "Ýörite prokuraturalar",
          createdAt: "2024-09-11T13:02:44.401Z",
          updatedAt: "2024-09-11T13:02:44.401Z",
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
    await queryInterface.bulkDelete("Welayats", null, {});
  },
};
