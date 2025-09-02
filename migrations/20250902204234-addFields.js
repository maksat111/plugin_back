"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Words", "name_ru", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn("Words", "name_en", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn("Words", "description", {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.removeColumn("Words", "is_probable");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Words", "name_ru");
    await queryInterface.removeColumn("Words", "name_en");
    await queryInterface.removeColumn("Words", "description");
    await queryInterface.addColumn("Words", "is_probable", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
  },
};
