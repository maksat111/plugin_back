const express = require("express");
const router = express.Router();

// ------------------------------------------- Controllers -------------------------------------------------------- //
// const auth = require("../middlewares/auth");

// ------------------------------------------- Controllers -------------------------------------------------------- //
const wordsController = require("../controllers/wordsController");
const suggestionsController = require("../controllers/suggestionsController");

//---------------------------------------------- Word Routes --------------------------------------------------- //
router.get("/word/all", wordsController.getAll);
router.get("/word/sync", wordsController.Sync);
router.post("/word/create", wordsController.create);
router.delete("/word/delete/:id", wordsController.Delete);
router.patch("/word/update/:id", wordsController.update);

//---------------------------------------------- Word Routes --------------------------------------------------- //
router.get("/suggestion/all", suggestionsController.getAll);
router.post("/suggestion/create", suggestionsController.create);
router.delete("/suggestion/delete/:id", suggestionsController.Delete);
router.patch("/suggestion/update/:id", suggestionsController.update);

module.exports = router;
