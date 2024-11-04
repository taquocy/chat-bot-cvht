const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.get('/', questionController.getAllQuestions);
router.get('/:questionId/answer', questionController.getAnswerByQuestionId);

module.exports = router;
