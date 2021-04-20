// module.exports = (app) => {
//     const questionService = require("../services/questions-service")
//
//     const findAllQuestions = (req, res) => {
//         const questions = questionService.findAllQuestions()
//         res.send(questions)
//         // questionService.findAllQuestions()
//         //     .then((questions) => {
//         //         res.send(questions)
//         //     })
//     }
//
//     const findQuestionsForQuiz = (req, res) => {
//         const quizId = req.params.qzid;
//         const questions = questionService.findQuestionsForQuiz(quizId);
//         res.send(questions);
//         // questionService.findQuestionsForQuiz(quizId)
//         //     .then((questions) => {
//         //         res.send(questions)
//         //     })
//     }
//
//     app.get("/api/questions", findAllQuestions);
//     app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz);
// }

// const questionsService = require('../services/questions-service')
// module.exports = function(app) {
//     app.get('/api/quizzes/:qzid/questions', (req, res) =>{
//         const quizId = req.params.qzid;
//         questionsService.findQuestionsForQuiz(quizId)
//             .then((questions) => {res.send(questions)})
//     })
//
//     app.get('/api/questions', (req, res) =>
//         questionsService.findAllQuestions()
//             .then(allQuestions => res.json(allQuestions).pretty()))
//     app.get('/api/questions/:qid', (req, res) =>
//         questionsService.findQuestionById(req.params['qid'])
//             .then(question => res.json(question)))
// }

module.exports = (app) => {
    const questionsService = require('../services/questions-service')

    const findAllQuestions = (req, res) => {
        questionsService.findAllQuestions()
            .then((questions) => {
                res.send(questions)
            })
    }

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params.qzid;
        questionsService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                res.send(questions)
            })
    }

    const findQuestionById = (req, res) => {
        const quid = req.params.qid;
        questionsService.findQuestionById(quid)
            .then((questions) => {
                res.send(questions)
            })
    }

    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz);
    app.get('/api/questions/:qid', findQuestionById);
}