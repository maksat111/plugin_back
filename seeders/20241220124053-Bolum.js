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
      "Bolums",
      [
        {
          // id: 1,
          name: "Birinji bölüm (prokuratura edaralarynda jenaýatlaryň derňelişine kanunylygyna gözegçilik)",
          createdAt: "2024-07-26T13:11:43.009Z",
          updatedAt: "2024-07-30T17:59:02.536Z",
          MudirlikId: 1,
        },
        {
          // id: 2,
          name: "Ikinji bölüm (içeri işler edaralarynda jenaýatlaryň Derňelişiniň kanunylygyna gözegçilik)",
          createdAt: "2024-07-26T13:11:52.397Z",
          updatedAt: "2024-07-30T17:59:14.702Z",
          MudirlikId: 1,
        },
        {
          // id: 3,
          name: "Üçünji bölüm (milli howpsuzlyk edaralarynda jenaýatlaryň Derňelişiniň kanunylygyna gözegçilik)",
          createdAt: "2024-07-26T13:12:01.095Z",
          updatedAt: "2024-07-30T17:59:27.945Z",
          MudirlikId: 1,
        },
        {
          // id: 4,
          name: "Barlag derňew bölüm",
          createdAt: "2024-07-26T13:12:55.343Z",
          updatedAt: "2024-07-29T03:21:37.258Z",
          MudirlikId: 3,
        },
        {
          // id: 5,
          name: "Raýat hukuklary we azatlyklary hakyndaky kanunlaryň berjaý edilişine gözegçilik bölümi",
          createdAt: "2024-07-26T13:13:54.347Z",
          updatedAt: "2024-07-29T03:21:43.223Z",
          MudirlikId: 3,
        },
        {
          // id: 6,
          name: "Umumy bölüm",
          createdAt: "2024-07-26T13:14:05.168Z",
          updatedAt: "2024-07-29T03:21:52.377Z",
          MudirlikId: 2,
        },
        {
          // id: 7,
          name: "Nobatçy bölüm",
          createdAt: "2024-07-26T13:16:03.258Z",
          updatedAt: "2024-07-29T03:22:09.988Z",
          MudirlikId: 2,
        },
        {
          // id: 8,
          name: "Işgärler bölümi",
          createdAt: "2024-07-29T11:40:33.567Z",
          updatedAt: "2024-07-29T11:40:42.311Z",
          MudirlikId: 2,
        },
        {
          // id: 9,
          name: "Anyklaýyş we dessin-gözleg işleriniň geçirilişine gözegçilik bölüm",
          createdAt: "2024-07-29T12:29:41.791Z",
          updatedAt: "2024-07-29T12:29:52.701Z",
          MudirlikId: 1,
        },
        {
          // id: 10,
          name: "Kriminalistika bölümi",
          createdAt: "2024-07-29T12:30:49.937Z",
          updatedAt: "2024-07-29T12:30:59.765Z",
          MudirlikId: 1,
        },
        {
          // id: 11,
          name: "Gurluşyk ulgamlarynda kanunlaryň ýerine ýetirilişine gözegçilik bölümi",
          createdAt: "2024-07-29T12:37:15.476Z",
          updatedAt: "2024-07-29T12:37:35.615Z",
          MudirlikId: 3,
        },
        {
          // id: 12,
          name: "Korrupsiýa garşy göreşmek bölümi",
          createdAt: "2024-07-29T12:38:31.039Z",
          updatedAt: "2024-07-29T12:38:39.342Z",
          MudirlikId: 3,
        },
        {
          // id: 13,
          name: "Nebit gaz pudagynga kanunlaryň ýerine ýetirilişine gözegçilik bölümi",
          createdAt: "2024-07-29T12:39:00.113Z",
          updatedAt: "2024-07-29T12:39:07.565Z",
          MudirlikId: 3,
        },
        {
          // id: 14,
          name: "Oba hojalygynda kanunlaryň ýerine ýetirilişine gözegçilik bölümi",
          createdAt: "2024-07-29T12:51:06.739Z",
          updatedAt: "2024-07-29T12:51:14.556Z",
          MudirlikId: 3,
        },
        {
          // id: 15,
          name: "Ykdysadyýet we maliýe ulgamlarynda kanunlaryň ýerine ýetirilişine gözegçilik bölümi",
          createdAt: "2024-07-29T12:51:32.608Z",
          updatedAt: "2024-07-29T12:51:43.456Z",
          MudirlikId: 3,
        },
        {
          // id: 16,
          name: "Kämillik ýaşyna ýetmedikler we ýaşlar hakyndaky kanunlaryň ýerine ýetirilişine gözegçilik bölümi",
          createdAt: "2024-07-29T13:41:57.334Z",
          updatedAt: "2024-07-30T17:51:54.364Z",
          MudirlikId: 5,
        },
        {
          // id: 17,
          name: "Seljeriş we maglumatlar bölümi",
          createdAt: "2024-07-29T13:42:44.622Z",
          updatedAt: "2024-07-30T17:53:45.864Z",
          MudirlikId: 10,
        },
        {
          // id: 18,
          name: "Nägilelik tertibinde kazyýet kararlarynyň kanunylygyna gözgçilik bölümi",
          createdAt: "2024-07-29T13:45:29.833Z",
          updatedAt: "2024-07-29T13:45:43.702Z",
          MudirlikId: 4,
        },
        {
          // id: 19,
          name: "Gözegçilik tertibinde kazyýetiň kararlarynyň kanunylygyna gözgçilik bölümi",
          createdAt: "2024-07-29T13:46:03.773Z",
          updatedAt: "2024-07-29T13:46:11.214Z",
          MudirlikId: 4,
        },
        {
          // id: 20,
          name: "Kazyýetde döwlet aýbyny goldamak topary",
          createdAt: "2024-07-29T13:46:43.714Z",
          updatedAt: "2024-07-29T13:46:51.527Z",
          MudirlikId: 4,
        },
        {
          // id: 21,
          name: "Raýat we arbitraž jedeller baradaky kazyýetiň çözgütleriniň kanunylygyna gözegçilik bölümi",
          createdAt: "2024-07-29T13:47:16.218Z",
          updatedAt: "2024-07-29T13:47:22.659Z",
          MudirlikId: 4,
        },
        {
          // id: 22,
          name: "Azatlykdan mahrum etmek bilen bagly jeza çäreleri çekdirilýän ýerlerde kanunlaryň berjaý edilişine gözegçilk bölümçesi",
          createdAt: "2024-07-30T17:56:16.856Z",
          updatedAt: "2024-07-30T17:56:54.443Z",
          MudirlikId: 8,
        },
        {
          // id: 23,
          name: "Derňew gabawhanalarynda kanunlaryň berjaý edilişine gözegçilik bölümi",
          createdAt: "2024-07-30T17:56:31.776Z",
          updatedAt: "2024-07-30T17:57:02.321Z",
          MudirlikId: 8,
        },
        {
          // id: 24,
          name: "Düzediş edaralarynda kanunlaryň berjaý edilşine gözegçilik bölümi",
          createdAt: "2024-07-30T17:56:46.447Z",
          updatedAt: "2024-07-30T17:57:10.649Z",
          MudirlikId: 8,
        },
        {
          // id: 25,
          name: "Birinji bölüm (jenaýatlaryň derňelişine gözegçilik)",
          createdAt: "2024-07-30T17:57:43.825Z",
          updatedAt: "2024-07-30T17:58:20.520Z",
          MudirlikId: 6,
        },
        {
          // id: 26,
          name: "Ikinji bölüm hb",
          createdAt: "2024-07-30T17:58:01.066Z",
          updatedAt: "2024-07-30T17:58:28.414Z",
          MudirlikId: 6,
        },
        {
          // id: 27,
          name: "Üçünji bölüm (guramaçylyk işi , hasaplaýyş we arza-şikaýatlara seretmek)",
          createdAt: "2024-07-30T17:58:11.747Z",
          updatedAt: "2024-07-30T17:58:36.540Z",
          MudirlikId: 6,
        },
        {
          // id: 28,
          name: "Guramaçylyk işi, ýerine ýetirişe gözegçilik we hasaplaýyş (seljeriş) bölümi",
          createdAt: "2024-08-01T12:36:42.762Z",
          updatedAt: "2024-08-01T12:36:50.677Z",
          MudirlikId: 2,
        },
        {
          // id: 29,
          name: "Aýratyn möhüm işleri derňemek boýunça bölümi",
          createdAt: "2024-09-20T06:05:50.641Z",
          updatedAt: "2024-10-04T04:45:30.069Z",
          MudirlikId: 12,
        },
        {
          // id: 30,
          name: "Statistika bölümi",
          createdAt: "2024-10-04T04:43:38.772Z",
          updatedAt: "2024-10-04T04:45:17.246Z",
          MudirlikId: 2,
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
    await queryInterface.bulkDelete("Bolums", null, {});
  },
};
