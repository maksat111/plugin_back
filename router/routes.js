const express = require("express");
const router = express.Router();

// ------------------------------------------- Controllers -------------------------------------------------------- //
// const auth = require("../middlewares/auth");

// ------------------------------------------- Controllers -------------------------------------------------------- //
const wordsController = require("../controllers/wordsController");

//---------------------------------------------- Word Routes --------------------------------------------------- //
router.get("/word/all", wordsController.getAll);
router.post("/word/create", wordsController.create);
router.delete("/word/delete/:id", wordsController.Delete);
router.patch("/word/update/:id", wordsController.update);

module.exports = router;
