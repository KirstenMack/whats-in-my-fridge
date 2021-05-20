const express = require("express");
const router = express.Router();
const ingredientsController = require('../controllers/ingredientsController');

router.post('/save', ingredientsController.save);
router.post('/update', ingredientsController.update);
router.post('/delete', ingredientsController.delete);
router.post('/use', ingredientsController.use);

module.exports = router;