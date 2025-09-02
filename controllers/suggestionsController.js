const { Op } = require("sequelize");
const db = require("../models/index");

const getAll = async (req, res) => {
  try {
    let { name, name_en, name_ru, description } = req.body;
    const page = parseInt(req.query.page) || 1; // Get page from query params, default to 1
    const limit = parseInt(req.query.limit) || 50; // Get limit from query params, default to 10
    const offset = (page - 1) * limit; // Calculate offset

    name =
      name && name?.length > 0
        ? {
            [Op.and]: [{ name: { [Op.iLike]: `%${name}%` } }],
          }
        : null;

    name_en =
      name_en && name_en?.length > 0
        ? {
            [Op.and]: [{ name_en: { [Op.iLike]: `%${name_en}%` } }],
          }
        : null;

    name_ru =
      name_ru && name_ru?.length > 0
        ? {
            [Op.and]: [{ name_ru: { [Op.iLike]: `%${name_ru}%` } }],
          }
        : null;

    description =
      description && description?.length > 0
        ? {
            [Op.and]: [{ description: { [Op.iLike]: `%${description}%` } }],
          }
        : null;

    const whereFilter = {
      [Op.and]: [name, name_en, name_ru, description].filter(Boolean),
    };

    const data = await db.Suggestion.findAll({
      where: whereFilter,
      order: [["createdAt", "DESC"]],
      limit,
      offset,
    });

    res.status(200).json({ success: 1, data });
  } catch (err) {
    res.status(500).json({
      success: 0,
      msg: err.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const { name, name_en, name_ru, description } = req.body;

    const created = await db.Suggestion.create({
      name,
      name_en,
      name_ru,
      description,
    });

    res.status(201).json({
      success: 1,
      data: created,
    });
  } catch (err) {
    res.status(500).json({
      success: 0,
      data: err.message,
    });
  }
};

const Delete = async (req, res) => {
  const { id } = req.params;

  try {
    const found = await db.Suggestion.findByPk(id);

    if (!found) {
      return res
        .status(404)
        .json({ success: 0, msg: "Suggestion not found in this id!" });
    }

    await found.destroy();
    res.status(200).json({ success: 1 });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: 1, msg: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ success: 0, msg: "Id field is required!" });
    }

    const found = await db.Suggestion.findOne({
      where: { id: id },
    }).then((res) => {
      if (res) {
        return res.toJSON();
      }
      return res;
    });

    if (!found) {
      return res.status(400).json({
        success: 0,
        msg: "Suggestion doesn't exists in this id!",
      });
    }

    const [rowsUpdated, updatedDatas] = await db.Suggestion.update(req.body, {
      where: { id },
      returning: true,
    });

    return res.status(200).json({ success: 1, data: updatedDatas[0] });
  } catch (err) {
    res.status(500).json({
      success: 0,
      msg: err.message,
    });
  }
};

exports.create = create;
exports.Delete = Delete;
exports.update = update;
exports.getAll = getAll;
