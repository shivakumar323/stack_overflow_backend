const answers = require('../models/answer');

function addAnswer(req, res) {
    let data = req.body;
    let responseData = {
        success: false,
        msg: "invalid params for creating Answer"
    };
    if(data.owner_id && data.question_id && data.answer) {
        answers.addAnswer(data, function(err, result) {
            if(err) {
                return res.status(500).send(responseData);
            } 
            responseData.success = true;
            responseData.msg = "successfully added answer";
            return res.status(200).send(responseData);
        })
    }
    
}

function addVote(req, res) {
    let data = req.body;
    let responseData = {
        success: false,
        msg: "invalid params for adding vote"
    };
    if(data.answer_id && data.vote) {
        
        answers.getVoteCount(data, function(err, result) {
            if(err) {
                responseData.msg = "failed while getting vote count";
                return res.status(500).send(responseData);
            }
            responseData.count = result;
            console.log(responseData);
            console.log(responseData.count[0].vote);
            if(data.vote == 1 || data.vote == -1) {
                data.vote += responseData.count[0].vote
            } else {
                responseData.msg = "invalid value of vote please try with either 1 or -1";
                return res.status(500).send(responseData);
            }
            answers.addVote(data, function(err, result) {
                if(err) {
                    return res.status(500).send(responseData);
                }
                responseData.success = true;
                responseData.msg = "successfully added vote";
                delete responseData["count"];
                return res.status(200).send(responseData);
            })
        })
    }
}

function addComment(req, res) {
    let data = req.body;
    let responseData = {
        success: false,
        msg: "invalid params for adding Comment"
    };

    if(data.answer_id && data.comment && data.owner_id && data.is_answer) {
        answers.addComment(data, function(err, result) {
            if(err) {
                return res.status(500).send(responseData);
            }
            responseData.success = true;
            responseData.msg = "successfully added comment";
            return res.status(200).send(responseData);
        })
    }
}

module.exports = { addAnswer, addVote, addComment };