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
      "Mudirliks",
      [
        {
          // id: 1,
          name: "Baş derňew müdirligi",
          createdAt: "2024-07-26T13:09:28.349Z",
          updatedAt: "2024-07-30T17:59:50.693Z",
        },
        {
          // id: 2,
          name: "Baş müdirlik",
          createdAt: "2024-07-26T13:11:18.351Z",
          updatedAt: "2024-07-26T13:11:18.351Z",
        },
        {
          // id: 3,
          name: "Umumy gözegçilik müdirligi",
          createdAt: "2024-07-26T13:11:30.016Z",
          updatedAt: "2024-07-26T13:11:30.016Z",
        },
        {
          // id: 4,
          name: "Kazyýetiň kararlarynyň kanunylygyna gözegçlik müdirligi",
          createdAt: "2024-07-29T13:42:25.728Z",
          updatedAt: "2024-07-29T13:42:25.728Z",
        },
        {
          // id: 5,
          name: "Kämillik ýaşyna ýetmedikler we ýaşlar hakyndaky kanunlaryň ýerine ýetirilişine gözegçilik bölümi",
          createdAt: "2024-07-30T17:51:37.318Z",
          updatedAt: "2024-07-30T17:51:37.318Z",
        },
        {
          // id: 6,
          name: "Harby müdirligi",
          createdAt: "2024-07-30T17:52:25.450Z",
          updatedAt: "2024-07-30T17:52:25.450Z",
        },
        {
          // id: 7,
          name: "Halkara gatnaşyklar müdirligi",
          createdAt: "2024-07-30T17:52:40.468Z",
          updatedAt: "2024-07-30T17:52:40.468Z",
        },
        {
          // id: 8,
          name: "Jenaýat jezalarynyň ýerine ýetirilişiniň kanunylygyna gözegçilik",
          createdAt: "2024-07-30T17:52:56.343Z",
          updatedAt: "2024-07-30T17:52:56.343Z",
        },
        {
          // id: 9,
          name: "Ulaglarda kanunlaryň ýerine ýetirilişine gözegçilik bölümi",
          createdAt: "2024-07-30T17:53:14.646Z",
          updatedAt: "2024-07-30T17:53:14.646Z",
        },
        {
          // id: 10,
          name: "Seljeriş we maglumatlar bölüm",
          createdAt: "2024-07-30T17:53:34.084Z",
          updatedAt: "2024-07-30T17:53:34.084Z",
        },
        {
          // id: 11,
          name: "Ýolbaşçylar",
          createdAt: "2024-07-30T17:53:34.084Z",
          updatedAt: "2024-07-30T17:53:34.084Z",
        },
        {
          // id: 12,
          name: "Aýratyn möhüm işleri derňemek boýunça bölümi",
          createdAt: "2024-09-20T06:00:53.796Z",
          updatedAt: "2024-09-20T06:00:53.796Z",
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
    await queryInterface.bulkDelete("Mudirliks", null, {});
  },
};
