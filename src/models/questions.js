const sqlConnection = require("../services/sqlConnection");

function addQuestion(data, cb) {
    var sql = `insert into questions
               (title, descript, owner_id, CreatedAt, UpdatedAt) 
               values(?, ?, ?, now(), now())`; 
    var values = [];
    values.push(data.title);
    values.push(data.description);
    values.push(data.owner_id);  
    sqlConnection.executeQuery(sql, values, function(err, result) {
        cb(err, result);
    }); 
}

function addComment(data, cb) {
    var sql = `insert into comments
               (is_question, question_id, owner_id, comment_text, CreatedAt, UpdatedAt) 
               values(?, ?, ?, ?, now(), now())`; 
    var values = [];
    values.push(data.is_question);
    values.push(data.question_id);
    values.push(data.owner_id);  
    values.push(data.comment);  
    sqlConnection.executeQuery(sql, values, function(err, result) {
        cb(err, result);
    }); 
}

module.exports = { addQuestion, addComment };