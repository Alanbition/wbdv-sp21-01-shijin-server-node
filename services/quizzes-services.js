// const quizzes = require("./quizzes.json")
//
// const quizzesModel = require("../models/quizzes/quizzes-model")
//
// const createQuiz = () => {}
// const findAllQuizzes = () => {
//     return quizzesModel.find()
//     // return quizzes
// }
// const findQuizById = (qid) => {
//     return quizzesModel
//         .findById(qid)
//         .populate("questions")
//         .exec()
//     // return quizzes.find((quiz) => {
//     //     return (quiz._id === qid)
//     // })
// }
// const updateQuiz = () => {}
// const deleteQuiz = () => {}
//
// module.exports = {
//     createQuiz,
//     findAllQuizzes, findQuizById,
//     updateQuiz, deleteQuiz
// }

const quizzesDao = require('../daos/quizzes-dao')
const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (qzid) => quizzesDao.findQuizById(qzid)
module.exports = { findAllQuizzes, findQuizById }