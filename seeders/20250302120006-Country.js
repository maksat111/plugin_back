"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    updatedAt: new Date(),name: 'John Doe',
     * await queryInterface.bulkInsert('People', [{
     *   createdAt: new Date(),
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Countries",
      [
        {
          name_en: "Afghanistan",
          name: "Owganystan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Albania",
          name: "Albaniýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Algeria",
          name: "Alžir",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Andorra",
          name: "Andorra",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Angola",
          name: "Angola",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Antigua and Barbuda",
          name: "Antigua we Barbuda",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Argentina",
          name: "Argentina",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Armenia",
          name: "Ermenistan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Australia",
          name: "Awstraliýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Austria",
          name: "Awstriýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Azerbaijan",
          name: "Azerbaýjan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Bahrain",
          name: "Bahreýn",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Bangladesh",
          name: "Bangladeş",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Belarus",
          name: "Belarus",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Belgium",
          name: "Belgiýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Bolivia",
          name: "Boliwiýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Bosnia and Herzegovina",
          name: "Bosniýa we Gersegowina",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Botswana",
          name: "Botswana",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Brazil",
          name: "Braziliýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Brunei",
          name: "Bruneý",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Bulgaria",
          name: "Bolgariýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Burundi",
          name: "Burundi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Cambodia",
          name: "Kamboja",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Cameroon",
          name: "Kamerun",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Canada",
          name: "Kanada",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Chile",
          name: "Çili",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "China",
          name: "Hytaý",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Colombia",
          name: "Kolumbiýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Comoros",
          name: "Komor adalary",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Congo",
          name: "Kongo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Costa Rica",
          name: "Kosta-Rika",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Croatia",
          name: "Horwatiýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Cuba",
          name: "Kuba",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Cyprus",
          name: "Kipr",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Czech Republic",
          name: "Çehiýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Denmark",
          name: "Daniýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Djibouti",
          name: "Jibuti",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Dominica",
          name: "Dominika",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Dominican Republic",
          name: "Dominikan Respublikasy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Ecuador",
          name: "Ekwador",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Egypt",
          name: "Müsür",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "El Salvador",
          name: "Salwador",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Equatorial Guinea",
          name: "Ekwatorial Gwineýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Eritrea",
          name: "Eritreýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Estonia",
          name: "Estoniýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Eswatini",
          name: "Eswatini",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Ethiopia",
          name: "Efiopiýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Fiji",
          name: "Fiji",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Finland",
          name: "Finlýandiýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "France",
          name: "Fransiýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Gambia",
          name: "Gambiýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Georgia",
          name: "Gruziýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Germany",
          name: "Germaniýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Ghana",
          name: "Gana",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Greece",
          name: "Gresiýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Grenada",
          name: "Grenada",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Guatemala",
          name: "Gwatemala",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Guinea",
          name: "Gwineýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Guyana",
          name: "Gayana",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Haiti",
          name: "Gaiti",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Honduras",
          name: "Honduras",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Hungary",
          name: "Wengriýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Iceland",
          name: "Islandiýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "India",
          name: "Hindistan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Indonesia",
          name: "Indoneziýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Iran",
          name: "Eýran",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Iraq",
          name: "Yrak",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Ireland",
          name: "Irlandiýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Israel",
          name: "Ysraýyl",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Italy",
          name: "Italiýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Jamaica",
          name: "Ýamaýka",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Japan",
          name: "Ýaponiýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Jordan",
          name: "Iordaniýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Kazakhstan",
          name: "Gazagystan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Kenya",
          name: "Keniýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Kuwait",
          name: "Kuweýt",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Kyrgyzstan",
          name: "Gyrgyzystan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Laos",
          name: "Laos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Latvia",
          name: "Latwiýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Lithuania",
          name: "Litwa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Luxembourg",
          name: "Lýuksemburg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Madagascar",
          name: "Madagaskar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Malaysia",
          name: "Malaýziýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Mali",
          name: "Mali",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Mexico",
          name: "Meksika",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Moldova",
          name: "Moldowa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Mongolia",
          name: "Mongoliýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Netherlands",
          name: "Niderlandiýa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Turkmenistan",
          name: "Türkmenistan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Uzbekistan",
          name: "Özbegistan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_en: "Tajikistan",
          name: "Täjigistan",
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
    await queryInterface.bulkDelete("Countries", null, {});
  },
};
