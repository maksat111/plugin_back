const db = require("../models/index");
const words = require("../constants/file.json");

const { Op, fn, col, where: sequelizeWhere, literal } = require("sequelize");

const getAll = async (req, res) => {
  try {
    const { name, name_en, name_ru, description } = req.query;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 50;
    const offset = (page - 1) * limit;

    const whereFilter = [];
    const similarityFields = [];
    const hasPgTrgm = true; // set false if pg_trgm not installed

    const addFilter = (field, value) => {
      if (value?.trim()) {
        const trimmed = value.trim();
        if (hasPgTrgm) {
          // fuzzy search with pg_trgm
          whereFilter.push(
            sequelizeWhere(fn("similarity", col(field), trimmed), {
              [Op.gt]: 0.3,
            })
          );
          similarityFields.push(fn("similarity", col(field), trimmed));
        } else {
          // fallback: simple substring search
          whereFilter.push({ [field]: { [Op.iLike]: `%${trimmed}%` } });
        }
      }
    };

    addFilter("name", name);
    addFilter("name_en", name_en);
    addFilter("name_ru", name_ru);
    addFilter("description", description);

    let attributes = { include: [] };
    let order = [["createdAt", "DESC"]];

    if (hasPgTrgm && similarityFields.length) {
      attributes.include.push([
        fn("GREATEST", ...similarityFields),
        "similarity_score",
      ]);
      order = [[literal('"similarity_score"'), "DESC"]];
    }

    const data = await db.Word.findAll({
      where: whereFilter.length ? { [Op.and]: whereFilter } : undefined,
      attributes,
      order,
      limit,
      offset,
    });

    res.status(200).json({ success: 1, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: 0, msg: err.message });
  }
};

const create = async (req, res) => {
  try {
    const { name, name_en, name_ru, desction } = req.body;

    const created = await db.Word.create({
      name,
      name_en,
      name_ru,
      desction,
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

const Sync = async (req, res) => {
  try {
    const formattedWords = words.map((item) => ({
      name: item.word,
    }));

    await db.Word.bulkCreate(formattedWords);

    res
      .status(200)
      .json({ success: true, msg: "Words inserted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, msg: err.message });
  }
};

exports.create = create;
exports.Delete = Delete;
exports.update = update;
exports.getAll = getAll;
exports.Sync = Sync;
