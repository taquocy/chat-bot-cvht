const Question = require('../models/questionModel');
const Answer = require('../models/answerModel');

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.json(questions);
  } catch (err) {
    console.error('Error fetching questions:', err);
    res.status(500).json({ error: 'Error fetching questions' });
  }
};

exports.getAnswerByQuestionId = async (req, res) => {
  try {
    const { questionId } = req.params;
    const answer = await Answer.findOne({ where: { question_id: questionId } });
    if (answer) {
      res.json(answer);
    } else {
      res.status(404).json({ error: 'Answer not found' });
    }
  } catch (err) {
    console.error('Error fetching answer:', err);
    res.status(500).json({ error: 'Error fetching answer' });
  }
};
