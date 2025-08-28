const { Op } = require("sequelize");
const db = require("../models/index");

const getAll = async (req, res) => {
  try {
    let { name } = req.body;
    const page = parseInt(req.query.page) || 1; // Get page from query params, default to 1
    const limit = parseInt(req.query.limit) || 50; // Get limit from query params, default to 10
    const offset = (page - 1) * limit; // Calculate offset

    name =
      name && name?.length > 0
        ? {
            [Op.and]: [{ name: { [Op.iLike]: `%${name}%` } }],
          }
        : null;

    const whereFilter = {
      [Op.and]: [name].filter(Boolean),
    };

    const data = await db.Word.findAll({
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
    const { name, is_probable } = req.body;

    const created = await db.Word.create({
      name,
      is_probable,
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
    const found = await db.Word.findByPk(id);

    if (!found) {
      return res
        .status(404)
        .json({ success: 0, msg: "Word not found in this id!" });
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

    const found = await db.Word.findOne({
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
        msg: "Word doesn't exists in this id!",
      });
    }

    const [rowsUpdated, updatedDatas] = await db.Word.update(req.body, {
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
