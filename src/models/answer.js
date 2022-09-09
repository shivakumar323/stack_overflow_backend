const sqlConnection = require("../services/sqlConnection");

function addAnswer(data, cb) {
    var sql = `insert into answers
               (question_id, answer, owner_id, CreatedAt, UpdatedAt) 
               values(?, ?, ?, now(), now())`; 
    var values = [];
    values.push(data.question_id);
    values.push(data.answer);
    values.push(data.owner_id);  
    sqlConnection.executeQuery(sql, values, function(err, result) {
        cb(err, result);
    }); 
}

function addVote(data, cb) {
    var sql = `update answers set vote = ?, UpdatedAt = now() where ID = ?`; 
    var values = [];
    values.push(data.vote);  
    values.push(data.answer_id);
    sqlConnection.executeQuery(sql, values, function(err, result) {
        cb(err, result);
    }); 
}

function getVoteCount(data, cb) {
    var sql = `select vote from answers where ID = ?`; 
    var values = [];
    values.push(data.answer_id);
    sqlConnection.executeQuery(sql, values, function(err, result) {
        cb(err, result);
    }); 
}

function addComment(data, cb) {
    var sql = `insert into comments
               (is_answer, answer_id, owner_id, comment_text, CreatedAt, UpdatedAt) 
               values(?, ?, ?, ?, now(), now())`; 
    var values = [];
    values.push(data.is_answer);
    values.push(data.answer_id);
    values.push(data.owner_id);  
    values.push(data.comment);  
    sqlConnection.executeQuery(sql, values, function(err, result) {
        cb(err, result);
    }); 
}

module.exports = { addAnswer, addVote, getVoteCount, addComment };