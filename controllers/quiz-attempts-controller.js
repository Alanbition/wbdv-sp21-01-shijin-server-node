const quizAttemptDao = require('../daos/quiz-attempts-dao')
module.exports = (app) => {
    app.post('/api/quizzes/:qzid/attempts', (req, res) =>
        quizAttemptDao.createAttempt( req.params.qzid, req.body)
            .then(attempt => res.send(attempt)))
    app.get('/api/quizzes/:qzid/attempts', (req, res) =>
        quizAttemptDao.findAttemptsForQuiz(req.params.qzid)
            .then(attempts => res.send(attempts)))
}
