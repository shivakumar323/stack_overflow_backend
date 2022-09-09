const questions = require('../models/questions');

function addQuestion(req, res) {
    let data = req.body;
    let responseData = {
        success: false,
        msg: "invalid params for creating Question"
    };
    if(data.owner_id && data.title && data.description) {
        questions.addQuestion(data, function(err, result) {
            if(err) {
                return res.status(500).send(responseData);
            } 
            responseData.success = true;
            responseData.msg = "successfully added question";
            return res.status(200).send(responseData);
        })
    }
    
}

function addComment(req, res) {
    let data = req.body;
    let responseData = {
        success: false,
        msg: "invalid params for adding Comment"
    };

    if(data.question_id && data.comment && data.owner_id && data.is_question) {
        questions.addComment(data, function(err, result) {
            if(err) {
                return res.status(500).send(responseData);
            }
            responseData.success = true;
            responseData.msg = "successfully added comment";
            return res.status(200).send(responseData);
        })
    }
}

module.exports = { addQuestion, addComment };